/**
 * ----------------------------------------------------------------------------------------------------
 * Deploy Ethereum ERC20 Smart Contract to Blockchain and Ledger [Run]
 *
 * @description - Deploy ethereum erc20 smart contract to blockchain and ledger using the Tatum API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/EthDeployErc20
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
    symbol,
    supply,
    description,
    basePair,
    address,
    mnemonic,
    index,
    baseRate,
    customer,
    nonce,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `${TATUM_API_URL}/v3/offchain/ethereum/erc20/deploy`,
      headers: { "x-api-key": TATUM_API_KEY },
      data: {
        symbol,
        supply,
        description,
        basePair,
        address,
        mnemonic,
        index,
        ...(baseRate ? { baseRate } : {}),
        ...(customer ? { customer } : {}),
        ...(nonce ? { nonce } : {}),
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
  symbol,
  supply,
  description,
  basePair,
  address,
  mnemonic,
  index,
}) => {
  const ERRORS = {
    INVALID_TATUM_API_KEY:
      "A valid TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_TATUM_API_URL:
      "A valid TATUM_API_URL field (string) was not provided in the input.",
    INVALID_SYMBOL:
      "A valid symbol field (string) was not provided in the input.",
    INVALID_SUPPLY:
      "A valid supply field (string) was not provided in the input.",
    INVALID_DESCRIPTION:
      "A valid description field (string) was not provided in the input.",
    INVALID_BASE_PAIR:
      "A valid basePair field (string) was not provided in the input.",
    INVALID_ADDRESS:
      "A valid address field (string) was not provided in the input.",
    INVALID_MNEMONIC:
      "A valid mnemonic field (string) was not provided in the input.",
    INVALID_INDEX:
      "A valid index field (number) was not provided in the input.",
  };

  if (typeof TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_KEY);
  if (typeof TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_TATUM_API_URL);
  if (typeof symbol !== "string") throw new Error(ERRORS.INVALID_SYMBOL);
  if (typeof supply !== "string") throw new Error(ERRORS.INVALID_SUPPLY);
  if (typeof description !== "string")
    throw new Error(ERRORS.INVALID_DESCRIPTION);
  if (typeof basePair !== "string") throw new Error(ERRORS.INVALID_BASE_PAIR);
  if (typeof address !== "string") throw new Error(ERRORS.INVALID_ADDRESS);
  if (typeof mnemonic !== "string") throw new Error(ERRORS.INVALID_MNEMONIC);
  if (typeof index !== "number") throw new Error(ERRORS.INVALID_INDEX);
};
