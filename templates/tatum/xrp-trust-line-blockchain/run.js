/**
 * ----------------------------------------------------------------------------------------------------
 * Create / Update / Delete XRP Trust Line [Run]
 *
 * @description - Create / update / delete xrp trust line using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/XrpTrustLineBlockchain
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
    TATUM_API_KEY,
    TATUM_API_URL,
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
      url: `${TATUM_API_URL}/v3/xrp/trust`,
      headers: { "x-api-key": TATUM_API_KEY },
      data: {
        fromAccount,
        issuerAccount,
        limit,
        token,
        fromSecret,
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
  TATUM_API_KEY,
  TATUM_API_URL,
  fromAccount,
  issuerAccount,
  limit,
  token,
  fromSecret,
}) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
    INVALID_FROM_ACCOUNT:
      "A valid fromAccount field (string) was not provided in the input.",
    INVALID_ISSUER_ACCOUNT:
      "A valid issuerAccount field (string) was not provided in the input.",
    INVALID_LIMIT:
      "A valid limit field (string) was not provided in the input.",
    INVALID_TOKEN:
      "A valid token field (string) was not provided in the input.",
    INVALID_FROM_SECRET:
      "A valid fromSecret field (string) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
  if (typeof fromAccount !== "string")
    throw new Error(ERRORS.INVALID_FROM_ACCOUNT);
  if (typeof issuerAccount !== "string")
    throw new Error(ERRORS.INVALID_ISSUER_ACCOUNT);
  if (typeof limit !== "string") throw new Error(ERRORS.INVALID_LIMIT);
  if (typeof token !== "string") throw new Error(ERRORS.INVALID_TOKEN);
  if (typeof fromSecret !== "string")
    throw new Error(ERRORS.INVALID_FROM_SECRET);
};
