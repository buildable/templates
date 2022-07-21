const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    senderAccountId,
    address,
    amount,
    privateKey,
    compliant,
    currency,
    gasLimit,
    gasPrice,
    nonce,
    paymentId,
    senderNote,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/offchain/ethereum/erc20/transfer",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        senderAccountId,
        address,
        amount,
        privateKey,
        ...(compliant ? { compliant } : {}),
        ...(currency ? { currency } : {}),
        ...(gasLimit ? { gasLimit } : {}),
        ...(gasPrice ? { gasPrice } : {}),
        ...(nonce ? { nonce } : {}),
        ...(paymentId ? { paymentId } : {}),
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
const verifyInput = ({
  BUILDABLE_TATUM_API_KEY,
  BUILDABLE_TATUM_API_URL,
  senderAccountId,
  address,
  amount,
  privateKey,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_SENDER_ACCOUNT_ID:
      "A valid senderAccountId field (string) was not provided in the input.",
    INVALID_ADDRESS: "A valid address field (string) was not provided in the input.",
    INVALID_AMOUNT: "A valid amount field (string) was not provided in the input.",
    INVALID_PRIVATE_KEY: "A valid privateKey field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof senderAccountId !== "string") throw new Error(ERRORS.INVALID_SENDER_ACCOUNT_ID);
  if (typeof address !== "string") throw new Error(ERRORS.INVALID_ADDRESS);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof privateKey !== "string") throw new Error(ERRORS.INVALID_PRIVATE_KEY);
};
