const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_STRIPE_API_KEY, reader, customer_consent_collected, setup_intent, expand } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/terminal/readers/${reader}/process_setup_intent`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        customer_consent_collected,
        setup_intent,
        ...(expand ? { expand } : {}),
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
const verifyInput = ({
  BUILDABLE_STRIPE_API_KEY,
  reader,
  customer_consent_collected,
  setup_intent,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_READER: "A valid reader field (string) was not provided in the input.",
    INVALID_CUSTOMER_CONSENT_COLLECTED:
      "A valid customer_consent_collected field (boolean) was not provided in the input.",
    INVALID_SETUP_INTENT: "A valid setup_intent field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof reader !== "string") throw new Error(ERRORS.INVALID_READER);
  if (typeof customer_consent_collected !== "boolean")
    throw new Error(ERRORS.INVALID_CUSTOMER_CONSENT_COLLECTED);
  if (typeof setup_intent !== "string") throw new Error(ERRORS.INVALID_SETUP_INTENT);
};
