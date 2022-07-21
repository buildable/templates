const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    type,
    price,
    amount,
    pair,
    currency1AccountId,
    currency2AccountId,
    attr,
    feeAccountId,
    fee,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/trade",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        type,
        price,
        amount,
        pair,
        currency1AccountId,
        currency2AccountId,
        attr,
        ...(feeAccountId ? { feeAccountId } : {}),
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
  type,
  price,
  amount,
  pair,
  currency1AccountId,
  currency2AccountId,
  attr,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_TYPE: "A valid type field (string) was not provided in the input.",
    INVALID_PRICE: "A valid price field (string) was not provided in the input.",
    INVALID_AMOUNT: "A valid amount field (string) was not provided in the input.",
    INVALID_PAIR: "A valid pair field (string) was not provided in the input.",
    INVALID_CURRENCY1_ACCOUNT_ID:
      "A valid currency1AccountId field (string) was not provided in the input.",
    INVALID_CURRENCY2_ACCOUNT_ID:
      "A valid currency2AccountId field (string) was not provided in the input.",
    INVALID_ATTR: "A valid attr field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof type !== "string") throw new Error(ERRORS.INVALID_TYPE);
  if (typeof price !== "string") throw new Error(ERRORS.INVALID_PRICE);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof pair !== "string") throw new Error(ERRORS.INVALID_PAIR);
  if (typeof currency1AccountId !== "string") throw new Error(ERRORS.INVALID_CURRENCY1_ACCOUNT_ID);
  if (typeof currency2AccountId !== "string") throw new Error(ERRORS.INVALID_CURRENCY2_ACCOUNT_ID);
  if (typeof attr !== "object") throw new Error(ERRORS.INVALID_ATTR);
};
