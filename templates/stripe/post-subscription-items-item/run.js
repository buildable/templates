const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    item,
    billing_thresholds,
    expand,
    metadata,
    off_session,
    payment_behavior,
    price,
    price_data,
    proration_behavior,
    proration_date,
    quantity,
    tax_rates,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/subscription_items/${item}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(billing_thresholds ? { billing_thresholds } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(off_session ? { off_session } : {}),
        ...(payment_behavior ? { payment_behavior } : {}),
        ...(price ? { price } : {}),
        ...(price_data ? { price_data } : {}),
        ...(proration_behavior ? { proration_behavior } : {}),
        ...(proration_date ? { proration_date } : {}),
        ...(quantity ? { quantity } : {}),
        ...(tax_rates ? { tax_rates } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, item }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_ITEM: "A valid item field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof item !== "string") throw new Error(ERRORS.INVALID_ITEM);
};
