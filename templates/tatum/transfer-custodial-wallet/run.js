const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    chain,
    custodialAddress,
    contractType,
    recipient,
    fromPrivateKey,
    tokenAddress,
    amount,
    tokenId,
    nonce,
    fee,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/blockchain/sc/custodial/transfer",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        chain,
        custodialAddress,
        contractType,
        recipient,
        fromPrivateKey,
        ...(tokenAddress ? { tokenAddress } : {}),
        ...(amount ? { amount } : {}),
        ...(tokenId ? { tokenId } : {}),
        ...(nonce ? { nonce } : {}),
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
  chain,
  custodialAddress,
  contractType,
  recipient,
  fromPrivateKey,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CHAIN: "A valid chain field (string) was not provided in the input.",
    INVALID_CUSTODIAL_ADDRESS:
      "A valid custodialAddress field (string) was not provided in the input.",
    INVALID_CONTRACT_TYPE: "A valid contractType field (number) was not provided in the input.",
    INVALID_RECIPIENT: "A valid recipient field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof custodialAddress !== "string") throw new Error(ERRORS.INVALID_CUSTODIAL_ADDRESS);
  if (typeof contractType !== "number") throw new Error(ERRORS.INVALID_CONTRACT_TYPE);
  if (typeof recipient !== "string") throw new Error(ERRORS.INVALID_RECIPIENT);
  if (typeof fromPrivateKey !== "string") throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
};
