const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    intent,
    client_secret,
    expand,
    mandate_data,
    payment_method,
    payment_method_data,
    payment_method_options,
    return_url,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/setup_intents/${intent}/confirm`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(client_secret ? { client_secret } : {}),
        ...(expand ? { expand } : {}),
        ...(mandate_data ? { mandate_data } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(payment_method_data ? { payment_method_data } : {}),
        ...(payment_method_options ? { payment_method_options } : {}),
        ...(return_url ? { return_url } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, intent }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_INTENT: "A valid intent field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof intent !== "string") throw new Error(ERRORS.INVALID_INTENT);
};
