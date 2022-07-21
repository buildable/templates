const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    fromAccount,
    issuerAccount,
    limit,
    token,
    fromSecret,
    fee,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/xrp/trust",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: { fromAccount, issuerAccount, limit, token, fromSecret, ...(fee ? { fee } : {}) },
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
  issuerAccount,
  limit,
  token,
  fromSecret,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_FROM_ACCOUNT: "A valid fromAccount field (string) was not provided in the input.",
    INVALID_ISSUER_ACCOUNT: "A valid issuerAccount field (string) was not provided in the input.",
    INVALID_LIMIT: "A valid limit field (string) was not provided in the input.",
    INVALID_TOKEN: "A valid token field (string) was not provided in the input.",
    INVALID_FROM_SECRET: "A valid fromSecret field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof fromAccount !== "string") throw new Error(ERRORS.INVALID_FROM_ACCOUNT);
  if (typeof issuerAccount !== "string") throw new Error(ERRORS.INVALID_ISSUER_ACCOUNT);
  if (typeof limit !== "string") throw new Error(ERRORS.INVALID_LIMIT);
  if (typeof token !== "string") throw new Error(ERRORS.INVALID_TOKEN);
  if (typeof fromSecret !== "string") throw new Error(ERRORS.INVALID_FROM_SECRET);
};
