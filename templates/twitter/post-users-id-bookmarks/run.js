const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TWITTER_BEARER_TOKEN, id, tweet_id } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twitter.com/2/users/${id}/bookmarks`,
      headers: { Authorization: `Bearer ${BUILDABLE_TWITTER_BEARER_TOKEN}` },
      data: { tweet_id },
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
const verifyInput = ({ BUILDABLE_TWITTER_BEARER_TOKEN, id, tweet_id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWITTER_BEARER_TOKEN:
      "A valid BUILDABLE_TWITTER_BEARER_TOKEN field (string) was not provided in the input.",
    INVALID_ID: "A valid id field (string) was not provided in the input.",
    INVALID_TWEET_ID: "A valid tweet_id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWITTER_BEARER_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWITTER_BEARER_TOKEN);
  if (typeof id !== "string") throw new Error(ERRORS.INVALID_ID);
  if (typeof tweet_id !== "string") throw new Error(ERRORS.INVALID_TWEET_ID);
};
