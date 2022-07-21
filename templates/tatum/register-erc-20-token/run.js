const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    chain,
    symbol,
    supply,
    decimals,
    description,
    basePair,
    derivationIndex,
    xpub,
    baseRate,
    customer,
    accountingCurrency,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `{TATUM_API_URL}/v3/offchain/token/${chain}`,
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        symbol,
        supply,
        decimals,
        description,
        basePair,
        derivationIndex,
        xpub,
        ...(baseRate ? { baseRate } : {}),
        ...(customer ? { customer } : {}),
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
  chain,
  symbol,
  supply,
  decimals,
  description,
  basePair,
  derivationIndex,
  xpub,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CHAIN: "A valid chain field (string) was not provided in the input.",
    INVALID_SYMBOL: "A valid symbol field (string) was not provided in the input.",
    INVALID_SUPPLY: "A valid supply field (string) was not provided in the input.",
    INVALID_DECIMALS: "A valid decimals field (number) was not provided in the input.",
    INVALID_DESCRIPTION: "A valid description field (string) was not provided in the input.",
    INVALID_BASE_PAIR: "A valid basePair field (string) was not provided in the input.",
    INVALID_DERIVATION_INDEX:
      "A valid derivationIndex field (number) was not provided in the input.",
    INVALID_XPUB: "A valid xpub field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof symbol !== "string") throw new Error(ERRORS.INVALID_SYMBOL);
  if (typeof supply !== "string") throw new Error(ERRORS.INVALID_SUPPLY);
  if (typeof decimals !== "number") throw new Error(ERRORS.INVALID_DECIMALS);
  if (typeof description !== "string") throw new Error(ERRORS.INVALID_DESCRIPTION);
  if (typeof basePair !== "string") throw new Error(ERRORS.INVALID_BASE_PAIR);
  if (typeof derivationIndex !== "number") throw new Error(ERRORS.INVALID_DERIVATION_INDEX);
  if (typeof xpub !== "string") throw new Error(ERRORS.INVALID_XPUB);
};
