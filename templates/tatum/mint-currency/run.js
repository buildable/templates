/**
 * ----------------------------------------------------------------------------------------------------
 * Create New Supply of Virtual Currency [Run]
 *
 * @description - Create new supply of virtual currency using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/mintCurrency
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
    accountId,
    amount,
    paymentId,
    reference,
    transactionCode,
    recipientNote,
    counterAccount,
    senderNote,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "put",
      url: `${TATUM_API_URL}/v3/ledger/virtualCurrency/mint`,
      headers: { "x-api-key": TATUM_API_KEY },
      data: {
        accountId,
        amount,
        ...(paymentId ? { paymentId } : {}),
        ...(reference ? { reference } : {}),
        ...(transactionCode ? { transactionCode } : {}),
        ...(recipientNote ? { recipientNote } : {}),
        ...(counterAccount ? { counterAccount } : {}),
        ...(senderNote ? { senderNote } : {}),
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
const verifyInput = ({ TATUM_API_KEY, TATUM_API_URL, accountId, amount }) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
    INVALID_ACCOUNT_ID:
      "A valid accountId field (string) was not provided in the input.",
    INVALID_AMOUNT:
      "A valid amount field (string) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
  if (typeof accountId !== "string") throw new Error(ERRORS.INVALID_ACCOUNT_ID);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
};
