const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_STRIPE_API_KEY, report_type, expand } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: `https://api.stripe.com/v1/reporting/report_types/${report_type}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: { ...(expand ? { expand } : {}) },
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, report_type }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_REPORT_TYPE: "A valid report_type field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof report_type !== "string") throw new Error(ERRORS.INVALID_REPORT_TYPE);
};