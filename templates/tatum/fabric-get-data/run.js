const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, fabricEndpoint, key } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: `{TATUM_API_URL}/v3/fabric/data/${key}`,
      headers: { "x-fabric-endpoint": fabricEndpoint, "x-api-key": BUILDABLE_TATUM_API_KEY },
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
const verifyInput = ({ BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, fabricEndpoint, key }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_FABRIC_ENDPOINT: "A valid fabricEndpoint field (string) was not provided in the input.",
    INVALID_KEY: "A valid key field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof fabricEndpoint !== "string") throw new Error(ERRORS.INVALID_FABRIC_ENDPOINT);
  if (typeof key !== "string") throw new Error(ERRORS.INVALID_KEY);
};
