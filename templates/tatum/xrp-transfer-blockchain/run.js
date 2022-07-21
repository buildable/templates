const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    fromAccount,
    to,
    amount,
    fromSecret,
    fee,
    sourceTag,
    destinationTag,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/xrp/transaction",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        fromAccount,
        to,
        amount,
        fromSecret,
        ...(fee ? { fee } : {}),
        ...(sourceTag ? { sourceTag } : {}),
        ...(destinationTag ? { destinationTag } : {}),
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
  fromAccount,
  to,
  amount,
  fromSecret,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_FROM_ACCOUNT: "A valid fromAccount field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
    INVALID_AMOUNT: "A valid amount field (string) was not provided in the input.",
    INVALID_FROM_SECRET: "A valid fromSecret field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof fromAccount !== "string") throw new Error(ERRORS.INVALID_FROM_ACCOUNT);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof fromSecret !== "string") throw new Error(ERRORS.INVALID_FROM_SECRET);
};
