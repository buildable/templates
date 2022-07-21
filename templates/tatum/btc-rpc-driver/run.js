const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TATUM_API_URL, jsonrpc, id, method, params } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/bitcoin/node",
      data: {
        ...(jsonrpc ? { jsonrpc } : {}),
        ...(id ? { id } : {}),
        ...(method ? { method } : {}),
        ...(params ? { params } : {}),
      },
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
const verifyInput = ({ BUILDABLE_TATUM_API_URL }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
};
