const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    cardholder,
    created,
    ending_before,
    exp_month,
    exp_year,
    expand,
    last4,
    limit,
    starting_after,
    status,
    type,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.stripe.com/v1/issuing/cards",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        ...(cardholder ? { cardholder } : {}),
        ...(created ? { created } : {}),
        ...(ending_before ? { ending_before } : {}),
        ...(exp_month ? { exp_month } : {}),
        ...(exp_year ? { exp_year } : {}),
        ...(expand ? { expand } : {}),
        ...(last4 ? { last4 } : {}),
        ...(limit ? { limit } : {}),
        ...(starting_after ? { starting_after } : {}),
        ...(status ? { status } : {}),
        ...(type ? { type } : {}),
      },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
};
