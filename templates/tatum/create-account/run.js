const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    currency,
    xpub,
    customer,
    compliant,
    accountCode,
    accountingCurrency,
    accountNumber,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/ledger/account",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        currency,
        ...(xpub ? { xpub } : {}),
        ...(customer ? { customer } : {}),
        ...(compliant ? { compliant } : {}),
        ...(accountCode ? { accountCode } : {}),
        ...(accountingCurrency ? { accountingCurrency } : {}),
        ...(accountNumber ? { accountNumber } : {}),
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
const verifyInput = ({ BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, currency }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
};
