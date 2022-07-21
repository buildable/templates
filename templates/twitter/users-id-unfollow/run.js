const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TWITTER_BEARER_TOKEN, source_user_id, target_user_id } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "delete",
      url: `https://api.twitter.com/2/users/${source_user_id}/following/${target_user_id}`,
      headers: { Authorization: `Bearer ${BUILDABLE_TWITTER_BEARER_TOKEN}` },
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
const verifyInput = ({ BUILDABLE_TWITTER_BEARER_TOKEN, source_user_id, target_user_id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWITTER_BEARER_TOKEN:
      "A valid BUILDABLE_TWITTER_BEARER_TOKEN field (string) was not provided in the input.",
    INVALID_SOURCE_USER_ID: "A valid source_user_id field (string) was not provided in the input.",
    INVALID_TARGET_USER_ID: "A valid target_user_id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWITTER_BEARER_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWITTER_BEARER_TOKEN);
  if (typeof source_user_id !== "string") throw new Error(ERRORS.INVALID_SOURCE_USER_ID);
  if (typeof target_user_id !== "string") throw new Error(ERRORS.INVALID_TARGET_USER_ID);
};
