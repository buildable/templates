const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    coupon,
    active,
    code,
    customer,
    expand,
    expires_at,
    max_redemptions,
    metadata,
    restrictions,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/promotion_codes",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        coupon,
        ...(active ? { active } : {}),
        ...(code ? { code } : {}),
        ...(customer ? { customer } : {}),
        ...(expand ? { expand } : {}),
        ...(expires_at ? { expires_at } : {}),
        ...(max_redemptions ? { max_redemptions } : {}),
        ...(metadata ? { metadata } : {}),
        ...(restrictions ? { restrictions } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, coupon }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_COUPON: "A valid coupon field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof coupon !== "string") throw new Error(ERRORS.INVALID_COUPON);
};
