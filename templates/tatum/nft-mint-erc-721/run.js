const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    chain,
    tokenId,
    to,
    url,
    fromPrivateKey,
    testnetType,
    contractAddress,
    erc20,
    provenance,
    authorAddresses,
    cashbackValues,
    fixedValues,
    nonce,
    fee,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/nft/mint",
      headers: {
        "x-api-key": BUILDABLE_TATUM_API_KEY,
        ...(testnetType ? { "x-testnet-type": testnetType } : {}),
      },
      data: {
        chain,
        tokenId,
        to,
        url,
        fromPrivateKey,
        ...(contractAddress ? { contractAddress } : {}),
        ...(erc20 ? { erc20 } : {}),
        ...(provenance ? { provenance } : {}),
        ...(authorAddresses ? { authorAddresses } : {}),
        ...(cashbackValues ? { cashbackValues } : {}),
        ...(fixedValues ? { fixedValues } : {}),
        ...(nonce ? { nonce } : {}),
        ...(fee ? { fee } : {}),
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
  tokenId,
  to,
  url,
  fromPrivateKey,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CHAIN: "A valid chain field (string) was not provided in the input.",
    INVALID_TOKEN_ID: "A valid tokenId field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
    INVALID_URL: "A valid url field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof tokenId !== "string") throw new Error(ERRORS.INVALID_TOKEN_ID);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
  if (typeof url !== "string") throw new Error(ERRORS.INVALID_URL);
  if (typeof fromPrivateKey !== "string") throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
};
