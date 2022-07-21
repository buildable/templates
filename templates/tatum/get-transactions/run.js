const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
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
      url: "{TATUM_API_URL}/v3/ledger/transaction/ledger",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
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
const verifyInput = ({ BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
};
