const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    fromPrivateKey,
    recipient,
    name,
    symbol,
    totalSupply,
    decimals,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/tron/trc20/deploy",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: { fromPrivateKey, recipient, name, symbol, totalSupply, decimals },
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
  fromPrivateKey,
  recipient,
  name,
  symbol,
  totalSupply,
  decimals,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
    INVALID_RECIPIENT: "A valid recipient field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
    INVALID_SYMBOL: "A valid symbol field (string) was not provided in the input.",
    INVALID_TOTAL_SUPPLY: "A valid totalSupply field (number) was not provided in the input.",
    INVALID_DECIMALS: "A valid decimals field (number) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof fromPrivateKey !== "string") throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
  if (typeof recipient !== "string") throw new Error(ERRORS.INVALID_RECIPIENT);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
  if (typeof symbol !== "string") throw new Error(ERRORS.INVALID_SYMBOL);
  if (typeof totalSupply !== "number") throw new Error(ERRORS.INVALID_TOTAL_SUPPLY);
  if (typeof decimals !== "number") throw new Error(ERRORS.INVALID_DECIMALS);
};
