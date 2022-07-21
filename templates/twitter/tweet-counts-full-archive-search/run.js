const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWITTER_BEARER_TOKEN,
    query,
    start_time,
    end_time,
    since_id,
    until_id,
    next_token,
    pagination_token,
    granularity,
    search_countFields,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.twitter.com/2/tweets/counts/all",
      headers: { Authorization: `Bearer ${BUILDABLE_TWITTER_BEARER_TOKEN}` },
      params: {
        query,
        ...(start_time ? { start_time } : {}),
        ...(end_time ? { end_time } : {}),
        ...(since_id ? { since_id } : {}),
        ...(until_id ? { until_id } : {}),
        ...(next_token ? { next_token } : {}),
        ...(pagination_token ? { pagination_token } : {}),
        ...(granularity ? { granularity } : {}),
        ...(search_countFields ? { "search_count.fields": search_countFields } : {}),
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "comma" });
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
const verifyInput = ({ BUILDABLE_TWITTER_BEARER_TOKEN, query }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWITTER_BEARER_TOKEN:
      "A valid BUILDABLE_TWITTER_BEARER_TOKEN field (string) was not provided in the input.",
    INVALID_QUERY: "A valid query field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWITTER_BEARER_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWITTER_BEARER_TOKEN);
  if (typeof query !== "string") throw new Error(ERRORS.INVALID_QUERY);
};
