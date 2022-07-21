const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    pageSize,
    id,
    customerId,
    offset,
    pair,
    count,
    tradeType,
    amount,
    fill,
    price,
    created,
    sort,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/trade/sell",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        pageSize,
        ...(id ? { id } : {}),
        ...(customerId ? { customerId } : {}),
        ...(offset ? { offset } : {}),
        ...(pair ? { pair } : {}),
        ...(count ? { count } : {}),
        ...(tradeType ? { tradeType } : {}),
        ...(amount ? { amount } : {}),
        ...(fill ? { fill } : {}),
        ...(price ? { price } : {}),
        ...(created ? { created } : {}),
        ...(sort ? { sort } : {}),
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
const verifyInput = ({ BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, pageSize }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_PAGE_SIZE: "A valid pageSize field (number) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof pageSize !== "number") throw new Error(ERRORS.INVALID_PAGE_SIZE);
};
