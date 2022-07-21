const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_TWITTER_BEARER_TOKEN, ids, spaceFields, expansions, userFields, topicFields } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.twitter.com/2/spaces",
      headers: { Authorization: `Bearer ${BUILDABLE_TWITTER_BEARER_TOKEN}` },
      params: {
        ids,
        ...(spaceFields ? { "space.fields": spaceFields } : {}),
        ...(expansions ? { expansions } : {}),
        ...(userFields ? { "user.fields": userFields } : {}),
        ...(topicFields ? { "topic.fields": topicFields } : {}),
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
const verifyInput = ({ BUILDABLE_TWITTER_BEARER_TOKEN, ids }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWITTER_BEARER_TOKEN:
      "A valid BUILDABLE_TWITTER_BEARER_TOKEN field (string) was not provided in the input.",
    INVALID_IDS: "A valid ids field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWITTER_BEARER_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWITTER_BEARER_TOKEN);
  if (typeof ids !== "object") throw new Error(ERRORS.INVALID_IDS);
};
