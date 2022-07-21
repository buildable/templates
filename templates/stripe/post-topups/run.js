const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    amount,
    currency,
    description,
    expand,
    metadata,
    source,
    statement_descriptor,
    transfer_group,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/topups",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        amount,
        currency,
        ...(description ? { description } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(source ? { source } : {}),
        ...(statement_descriptor ? { statement_descriptor } : {}),
        ...(transfer_group ? { transfer_group } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, amount, currency }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_AMOUNT: "A valid amount field (number) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof amount !== "number") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
};
