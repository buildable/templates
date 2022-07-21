const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    intent,
    capture_method,
    client_secret,
    error_on_requires_action,
    expand,
    mandate,
    mandate_data,
    off_session,
    payment_method,
    payment_method_data,
    payment_method_options,
    payment_method_types,
    radar_options,
    receipt_email,
    return_url,
    setup_future_usage,
    shipping,
    use_stripe_sdk,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/payment_intents/${intent}/confirm`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(capture_method ? { capture_method } : {}),
        ...(client_secret ? { client_secret } : {}),
        ...(error_on_requires_action ? { error_on_requires_action } : {}),
        ...(expand ? { expand } : {}),
        ...(mandate ? { mandate } : {}),
        ...(mandate_data ? { mandate_data } : {}),
        ...(off_session ? { off_session } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(payment_method_data ? { payment_method_data } : {}),
        ...(payment_method_options ? { payment_method_options } : {}),
        ...(payment_method_types ? { payment_method_types } : {}),
        ...(radar_options ? { radar_options } : {}),
        ...(receipt_email ? { receipt_email } : {}),
        ...(return_url ? { return_url } : {}),
        ...(setup_future_usage ? { setup_future_usage } : {}),
        ...(shipping ? { shipping } : {}),
        ...(use_stripe_sdk ? { use_stripe_sdk } : {}),
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
