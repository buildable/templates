/**
 * ----------------------------------------------------------------------------------------------------
 * Approve Spending of ERC20 [Run]
 *
 * @description - Approve spending of erc20 using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/Erc20Approve
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
    amount,
    spender,
    contractAddress,
    fromPrivateKey,
    testnetType,
    nonce,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `${TATUM_API_URL}/v3/blockchain/token/approve`,
      headers: {
        "x-api-key": TATUM_API_KEY,
        ...(testnetType ? { "x-testnet-type": testnetType } : {}),
      },
      data: {
        chain,
        amount,
        spender,
        contractAddress,
        fromPrivateKey,
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
  amount,
  spender,
  contractAddress,
  fromPrivateKey,
}) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CHAIN:
      "A valid chain field (string) was not provided in the input.",
    INVALID_AMOUNT:
      "A valid amount field (string) was not provided in the input.",
    INVALID_SPENDER:
      "A valid spender field (string) was not provided in the input.",
    INVALID_CONTRACT_ADDRESS:
      "A valid contractAddress field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof spender !== "string") throw new Error(ERRORS.INVALID_SPENDER);
  if (typeof contractAddress !== "string")
    throw new Error(ERRORS.INVALID_CONTRACT_ADDRESS);
  if (typeof fromPrivateKey !== "string")
    throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
};
