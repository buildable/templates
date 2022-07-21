const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    name,
    supply,
    basePair,
    baseRate,
    customer,
    description,
    accountCode,
    accountNumber,
    accountingCurrency,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/ledger/virtualCurrency",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        name,
        supply,
        basePair,
        ...(baseRate ? { baseRate } : {}),
        ...(customer ? { customer } : {}),
        ...(description ? { description } : {}),
        ...(accountCode ? { accountCode } : {}),
        ...(accountNumber ? { accountNumber } : {}),
        ...(accountingCurrency ? { accountingCurrency } : {}),
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
  name,
  supply,
  basePair,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
    INVALID_SUPPLY: "A valid supply field (string) was not provided in the input.",
    INVALID_BASE_PAIR: "A valid basePair field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
  if (typeof supply !== "string") throw new Error(ERRORS.INVALID_SUPPLY);
  if (typeof basePair !== "string") throw new Error(ERRORS.INVALID_BASE_PAIR);
};
