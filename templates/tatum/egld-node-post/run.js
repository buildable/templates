const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_URL,
    xApiKey,
    version,
    chainId,
    nonce,
    value,
    receiver,
    sender,
    gasPrice,
    gasLimit,
    data,
    signature,
  } = input;

  verifyInput(input);

  try {
    const { data: _data } = await axios({
      method: "post",
      url: `{TATUM_API_URL}/v3/egld/node/${xApiKey}/*`,
      data: {
        version,
        chainId,
        nonce,
        value,
        receiver,
        sender,
        gasPrice,
        gasLimit,
        data,
        signature,
      },
    });

    return _data;
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
  BUILDABLE_TATUM_API_URL,
  xApiKey,
  version,
  chainId,
  nonce,
  value,
  receiver,
  sender,
  gasPrice,
  gasLimit,
  data,
  signature,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_X_API_KEY: "A valid xApiKey field (string) was not provided in the input.",
    INVALID_VERSION: "A valid version field (number) was not provided in the input.",
    INVALID_CHAIN_ID: "A valid chainId field (string) was not provided in the input.",
    INVALID_NONCE: "A valid nonce field (number) was not provided in the input.",
    INVALID_VALUE: "A valid value field (string) was not provided in the input.",
    INVALID_RECEIVER: "A valid receiver field (string) was not provided in the input.",
    INVALID_SENDER: "A valid sender field (string) was not provided in the input.",
    INVALID_GAS_PRICE: "A valid gasPrice field (number) was not provided in the input.",
    INVALID_GAS_LIMIT: "A valid gasLimit field (number) was not provided in the input.",
    INVALID_DATA: "A valid data field (string) was not provided in the input.",
    INVALID_SIGNATURE: "A valid signature field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof xApiKey !== "string") throw new Error(ERRORS.INVALID_X_API_KEY);
  if (typeof version !== "number") throw new Error(ERRORS.INVALID_VERSION);
  if (typeof chainId !== "string") throw new Error(ERRORS.INVALID_CHAIN_ID);
  if (typeof nonce !== "number") throw new Error(ERRORS.INVALID_NONCE);
  if (typeof value !== "string") throw new Error(ERRORS.INVALID_VALUE);
  if (typeof receiver !== "string") throw new Error(ERRORS.INVALID_RECEIVER);
  if (typeof sender !== "string") throw new Error(ERRORS.INVALID_SENDER);
  if (typeof gasPrice !== "number") throw new Error(ERRORS.INVALID_GAS_PRICE);
  if (typeof gasLimit !== "number") throw new Error(ERRORS.INVALID_GAS_LIMIT);
  if (typeof data !== "string") throw new Error(ERRORS.INVALID_DATA);
  if (typeof signature !== "string") throw new Error(ERRORS.INVALID_SIGNATURE);
};
