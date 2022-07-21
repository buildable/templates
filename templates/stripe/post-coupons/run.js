const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    amount_off,
    applies_to,
    currency,
    currency_options,
    duration,
    duration_in_months,
    expand,
    id,
    max_redemptions,
    metadata,
    name,
    percent_off,
    redeem_by,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/coupons",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(amount_off ? { amount_off } : {}),
        ...(applies_to ? { applies_to } : {}),
        ...(currency ? { currency } : {}),
        ...(currency_options ? { currency_options } : {}),
        ...(duration ? { duration } : {}),
        ...(duration_in_months ? { duration_in_months } : {}),
        ...(expand ? { expand } : {}),
        ...(id ? { id } : {}),
        ...(max_redemptions ? { max_redemptions } : {}),
        ...(metadata ? { metadata } : {}),
        ...(name ? { name } : {}),
        ...(percent_off ? { percent_off } : {}),
        ...(redeem_by ? { redeem_by } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
};
