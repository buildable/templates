const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, pageSize, offset, address } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: `{TATUM_API_URL}/v3/scrypta/transaction/address/${address}`,
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      params: { pageSize, offset },
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
  pageSize,
  offset,
  address,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_PAGE_SIZE: "A valid pageSize field (number) was not provided in the input.",
    INVALID_OFFSET: "A valid offset field (number) was not provided in the input.",
    INVALID_ADDRESS: "A valid address field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof pageSize !== "number") throw new Error(ERRORS.INVALID_PAGE_SIZE);
  if (typeof offset !== "number") throw new Error(ERRORS.INVALID_OFFSET);
  if (typeof address !== "string") throw new Error(ERRORS.INVALID_ADDRESS);
};
