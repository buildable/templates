/**
 * ----------------------------------------------------------------------------------------------------
 * Find Transactions Within the Ledger. [Run]
 *
 * @description - Find transactions within the ledger. using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/getTransactions
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
    TATUM_API_URL,
    TATUM_API_KEY,
    pageSize,
    offset,
    count,
    account,
    counterAccount,
    currency,
    from,
    amount,
    currencies,
    transactionType,
    transactionTypes,
    opType,
    transactionCode,
    paymentId,
    recipientNote,
    senderNote,
    to,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `${TATUM_API_URL}/v3/ledger/transaction/ledger`,
      headers: { "x-api-key": `${TATUM_API_KEY}` },
      params: {
        ...(pageSize ? { pageSize } : {}),
        ...(offset ? { offset } : {}),
        ...(count ? { count } : {}),
      },
      data: {
        ...(account ? { account } : {}),
        ...(counterAccount ? { counterAccount } : {}),
        ...(currency ? { currency } : {}),
        ...(from ? { from } : {}),
        ...(amount ? { amount } : {}),
        ...(currencies ? { currencies } : {}),
        ...(transactionType ? { transactionType } : {}),
        ...(transactionTypes ? { transactionTypes } : {}),
        ...(opType ? { opType } : {}),
        ...(transactionCode ? { transactionCode } : {}),
        ...(paymentId ? { paymentId } : {}),
        ...(recipientNote ? { recipientNote } : {}),
        ...(senderNote ? { senderNote } : {}),
        ...(to ? { to } : {}),
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
const verifyInput = ({ TATUM_API_KEY, TATUM_API_URL }) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
};