const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_TWITTER_BEARER_TOKEN, usernames, userFields, expansions, tweetFields } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.twitter.com/2/users/by",
      headers: { Authorization: `Bearer ${BUILDABLE_TWITTER_BEARER_TOKEN}` },
      params: {
        usernames,
        ...(userFields ? { "user.fields": userFields } : {}),
        ...(expansions ? { expansions } : {}),
        ...(tweetFields ? { "tweet.fields": tweetFields } : {}),
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
const verifyInput = ({ BUILDABLE_TWITTER_BEARER_TOKEN, usernames }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWITTER_BEARER_TOKEN:
      "A valid BUILDABLE_TWITTER_BEARER_TOKEN field (string) was not provided in the input.",
    INVALID_USERNAMES: "A valid usernames field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWITTER_BEARER_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWITTER_BEARER_TOKEN);
  if (typeof usernames !== "string") throw new Error(ERRORS.INVALID_USERNAMES);
};
