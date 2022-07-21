const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWITTER_BEARER_TOKEN,
    partition,
    backfill_minutes,
    start_time,
    end_time,
    tweetFields,
    expansions,
    mediaFields,
    pollFields,
    userFields,
    placeFields,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.twitter.com/2/tweets/firehose/stream",
      headers: { Authorization: `Bearer ${BUILDABLE_TWITTER_BEARER_TOKEN}` },
      params: {
        partition,
        ...(backfill_minutes ? { backfill_minutes } : {}),
        ...(start_time ? { start_time } : {}),
        ...(end_time ? { end_time } : {}),
        ...(tweetFields ? { "tweet.fields": tweetFields } : {}),
        ...(expansions ? { expansions } : {}),
        ...(mediaFields ? { "media.fields": mediaFields } : {}),
        ...(pollFields ? { "poll.fields": pollFields } : {}),
        ...(userFields ? { "user.fields": userFields } : {}),
        ...(placeFields ? { "place.fields": placeFields } : {}),
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
const verifyInput = ({ BUILDABLE_TWITTER_BEARER_TOKEN, partition }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWITTER_BEARER_TOKEN:
      "A valid BUILDABLE_TWITTER_BEARER_TOKEN field (string) was not provided in the input.",
    INVALID_PARTITION: "A valid partition field (number) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWITTER_BEARER_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWITTER_BEARER_TOKEN);
  if (typeof partition !== "number") throw new Error(ERRORS.INVALID_PARTITION);
};
