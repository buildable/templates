const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TATUM_API_URL, xApiKey } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: `{TATUM_API_URL}/v3/egld/node/${xApiKey}/*`,
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
const verifyInput = ({ BUILDABLE_TATUM_API_URL, xApiKey }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_X_API_KEY: "A valid xApiKey field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof xApiKey !== "string") throw new Error(ERRORS.INVALID_X_API_KEY);
};
