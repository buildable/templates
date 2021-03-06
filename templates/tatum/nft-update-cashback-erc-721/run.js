/**
 * ----------------------------------------------------------------------------------------------------
 * Update Royalty NFT [Run]
 *
 * @description - Update royalty nft using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/NftUpdateCashbackErc721
 *
 * ----------------------------------------------------------------------------------------------------
 */

const axios = require("axios");

/**
 * The Node’s executable function
 *
 * @param {Run} input - Data passed to your Node from the input function
 */
const run = async (input) => {
  const {
    TATUM_API_KEY,
    TATUM_API_URL,
    chain,
    tokenId,
    cashbackValue,
    contractAddress,
    fromPrivateKey,
    feeCurrency,
    testnetType,
    nonce,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "put",
      url: `${TATUM_API_URL}/v3/nft/royalty`,
      headers: {
        "x-api-key": TATUM_API_KEY,
        ...(testnetType ? { "x-testnet-type": testnetType } : {}),
      },
      data: {
        chain,
        tokenId,
        cashbackValue,
        contractAddress,
        fromPrivateKey,
        feeCurrency,
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
  TATUM_API_KEY,
  TATUM_API_URL,
  chain,
  tokenId,
  cashbackValue,
  contractAddress,
  fromPrivateKey,
  feeCurrency,
}) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CHAIN:
      "A valid chain field (string) was not provided in the input.",
    INVALID_TOKEN_ID:
      "A valid tokenId field (string) was not provided in the input.",
    INVALID_CASHBACK_VALUE:
      "A valid cashbackValue field (string) was not provided in the input.",
    INVALID_CONTRACT_ADDRESS:
      "A valid contractAddress field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
    INVALID_FEE_CURRENCY:
      "A valid feeCurrency field (string) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof tokenId !== "string") throw new Error(ERRORS.INVALID_TOKEN_ID);
  if (typeof cashbackValue !== "string")
    throw new Error(ERRORS.INVALID_CASHBACK_VALUE);
  if (typeof contractAddress !== "string")
    throw new Error(ERRORS.INVALID_CONTRACT_ADDRESS);
  if (typeof fromPrivateKey !== "string")
    throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
  if (typeof feeCurrency !== "string")
    throw new Error(ERRORS.INVALID_FEE_CURRENCY);
};
