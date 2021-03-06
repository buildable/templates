/**
 * ----------------------------------------------------------------------------------------------------
 * Freeze Tron Balance [Run]
 *
 * @description - Freeze tron balance using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/TronFreeze
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
    fromPrivateKey,
    receiver,
    duration,
    resource,
    amount,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `${TATUM_API_URL}/v3/tron/freezeBalance`,
      headers: { "x-api-key": TATUM_API_KEY },
      data: { fromPrivateKey, receiver, duration, resource, amount },
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
  fromPrivateKey,
  receiver,
  duration,
  resource,
  amount,
}) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
    INVALID_RECEIVER:
      "A valid receiver field (string) was not provided in the input.",
    INVALID_DURATION:
      "A valid duration field (number) was not provided in the input.",
    INVALID_RESOURCE:
      "A valid resource field (string) was not provided in the input.",
    INVALID_AMOUNT:
      "A valid amount field (string) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
  if (typeof fromPrivateKey !== "string")
    throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
  if (typeof receiver !== "string") throw new Error(ERRORS.INVALID_RECEIVER);
  if (typeof duration !== "number") throw new Error(ERRORS.INVALID_DURATION);
  if (typeof resource !== "string") throw new Error(ERRORS.INVALID_RESOURCE);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
};
