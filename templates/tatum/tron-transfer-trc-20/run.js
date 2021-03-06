/**
 * ----------------------------------------------------------------------------------------------------
 * Send Tron TRC20 Transaction [Run]
 *
 * @description - Send tron trc20 transaction using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/TronTransferTrc20
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
    fromPrivateKey,
    to,
    tokenAddress,
    feeLimit,
    amount,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `${TATUM_API_URL}/v3/tron/trc20/transaction`,
      headers: { "x-api-key": TATUM_API_KEY },
      data: { fromPrivateKey, to, tokenAddress, feeLimit, amount },
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
  fromPrivateKey,
  to,
  tokenAddress,
  feeLimit,
  amount,
}) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
    INVALID_TOKEN_ADDRESS:
      "A valid tokenAddress field (string) was not provided in the input.",
    INVALID_FEE_LIMIT:
      "A valid feeLimit field (number) was not provided in the input.",
    INVALID_AMOUNT:
      "A valid amount field (string) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
  if (typeof fromPrivateKey !== "string")
    throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
  if (typeof tokenAddress !== "string")
    throw new Error(ERRORS.INVALID_TOKEN_ADDRESS);
  if (typeof feeLimit !== "number") throw new Error(ERRORS.INVALID_FEE_LIMIT);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
};
