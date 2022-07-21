const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    partition: 1, // Required

    // backfill_minutes: 5,
    // start_time: "2019-08-24T14:15:22Z",
    // end_time: "2019-08-24T14:15:22Z",
  };
};
