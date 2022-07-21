const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    chain,
    to,
    tokenId,
    url,
    contractAddress,
    fromPrivateKey,
    feeCurrency,
    testnetType,
    authorAddresses,
    cashbackValues,
    nonce,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/nft/mint/batch",
      headers: {
        "x-api-key": BUILDABLE_TATUM_API_KEY,
        ...(testnetType ? { "x-testnet-type": testnetType } : {}),
      },
      data: {
        chain,
        to,
        tokenId,
        url,
        contractAddress,
        fromPrivateKey,
        feeCurrency,
        ...(authorAddresses ? { authorAddresses } : {}),
        ...(cashbackValues ? { cashbackValues } : {}),
        ...(nonce ? { nonce } : {}),
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
const verifyInput = ({
  BUILDABLE_TATUM_API_KEY,
  BUILDABLE_TATUM_API_URL,
  chain,
  to,
  tokenId,
  url,
  contractAddress,
  fromPrivateKey,
  feeCurrency,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CHAIN: "A valid chain field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (object) was not provided in the input.",
    INVALID_TOKEN_ID: "A valid tokenId field (object) was not provided in the input.",
    INVALID_URL: "A valid url field (object) was not provided in the input.",
    INVALID_CONTRACT_ADDRESS:
      "A valid contractAddress field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
    INVALID_FEE_CURRENCY: "A valid feeCurrency field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof to !== "object") throw new Error(ERRORS.INVALID_TO);
  if (typeof tokenId !== "object") throw new Error(ERRORS.INVALID_TOKEN_ID);
  if (typeof url !== "object") throw new Error(ERRORS.INVALID_URL);
  if (typeof contractAddress !== "string") throw new Error(ERRORS.INVALID_CONTRACT_ADDRESS);
  if (typeof fromPrivateKey !== "string") throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
  if (typeof feeCurrency !== "string") throw new Error(ERRORS.INVALID_FEE_CURRENCY);
};
