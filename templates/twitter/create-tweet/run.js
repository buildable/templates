const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TWITTER_BEARER_TOKEN,
    direct_message_deep_link,
    for_super_followers_only,
    geo,
    media,
    poll,
    quote_tweet_id,
    reply,
    reply_settings,
    text,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.twitter.com/2/tweets",
      headers: { Authorization: `Bearer ${BUILDABLE_TWITTER_BEARER_TOKEN}` },
      data: {
        ...(direct_message_deep_link ? { direct_message_deep_link } : {}),
        ...(for_super_followers_only ? { for_super_followers_only } : {}),
        ...(geo ? { geo } : {}),
        ...(media ? { media } : {}),
        ...(poll ? { poll } : {}),
        ...(quote_tweet_id ? { quote_tweet_id } : {}),
        ...(reply ? { reply } : {}),
        ...(reply_settings ? { reply_settings } : {}),
        ...(text ? { text } : {}),
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
const verifyInput = ({ BUILDABLE_TWITTER_BEARER_TOKEN }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWITTER_BEARER_TOKEN:
      "A valid BUILDABLE_TWITTER_BEARER_TOKEN field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWITTER_BEARER_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWITTER_BEARER_TOKEN);
};
