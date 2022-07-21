const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    display_name,
    delivery_estimate,
    expand,
    fixed_amount,
    metadata,
    tax_behavior,
    tax_code,
    type,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/shipping_rates",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        display_name,
        ...(delivery_estimate ? { delivery_estimate } : {}),
        ...(expand ? { expand } : {}),
        ...(fixed_amount ? { fixed_amount } : {}),
        ...(metadata ? { metadata } : {}),
        ...(tax_behavior ? { tax_behavior } : {}),
        ...(tax_code ? { tax_code } : {}),
        ...(type ? { type } : {}),
      }),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, display_name }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_DISPLAY_NAME: "A valid display_name field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof display_name !== "string") throw new Error(ERRORS.INVALID_DISPLAY_NAME);
};
