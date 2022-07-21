const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    contractAddress,
    methodName,
    methodABI,
    params,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/celo/smartcontract",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: { contractAddress, methodName, methodABI, params },
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
  BUILDABLE_TATUM_API_KEY,
  BUILDABLE_TATUM_API_URL,
  contractAddress,
  methodName,
  methodABI,
  params,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CONTRACT_ADDRESS:
      "A valid contractAddress field (string) was not provided in the input.",
    INVALID_METHOD_NAME: "A valid methodName field (string) was not provided in the input.",
    INVALID_METHOD_ABI: "A valid methodABI field (object) was not provided in the input.",
    INVALID_PARAMS: "A valid params field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof contractAddress !== "string") throw new Error(ERRORS.INVALID_CONTRACT_ADDRESS);
  if (typeof methodName !== "string") throw new Error(ERRORS.INVALID_METHOD_NAME);
  if (typeof methodABI !== "object") throw new Error(ERRORS.INVALID_METHOD_ABI);
  if (typeof params !== "object") throw new Error(ERRORS.INVALID_PARAMS);
};
