const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    currency,
    interval,
    active,
    aggregate_usage,
    amount,
    amount_decimal,
    billing_scheme,
    expand,
    id,
    interval_count,
    metadata,
    nickname,
    product,
    tiers,
    tiers_mode,
    transform_usage,
    trial_period_days,
    usage_type,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/plans",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        currency,
        interval,
        ...(active ? { active } : {}),
        ...(aggregate_usage ? { aggregate_usage } : {}),
        ...(amount ? { amount } : {}),
        ...(amount_decimal ? { amount_decimal } : {}),
        ...(billing_scheme ? { billing_scheme } : {}),
        ...(expand ? { expand } : {}),
        ...(id ? { id } : {}),
        ...(interval_count ? { interval_count } : {}),
        ...(metadata ? { metadata } : {}),
        ...(nickname ? { nickname } : {}),
        ...(product ? { product } : {}),
        ...(tiers ? { tiers } : {}),
        ...(tiers_mode ? { tiers_mode } : {}),
        ...(transform_usage ? { transform_usage } : {}),
        ...(trial_period_days ? { trial_period_days } : {}),
        ...(usage_type ? { usage_type } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, currency, interval }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
    INVALID_INTERVAL: "A valid interval field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
  if (typeof interval !== "string") throw new Error(ERRORS.INVALID_INTERVAL);
};
