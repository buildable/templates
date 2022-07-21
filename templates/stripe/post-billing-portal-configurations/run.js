const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    business_profile,
    features,
    default_return_url,
    expand,
    metadata,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/billing_portal/configurations",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        business_profile,
        features,
        ...(default_return_url ? { default_return_url } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, business_profile, features }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_BUSINESS_PROFILE:
      "A valid business_profile field (object) was not provided in the input.",
    INVALID_FEATURES: "A valid features field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof business_profile !== "object") throw new Error(ERRORS.INVALID_BUSINESS_PROFILE);
  if (typeof features !== "object") throw new Error(ERRORS.INVALID_FEATURES);
};
