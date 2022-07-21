const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    query: "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet", // Required

    // start_time: "2019-08-24T14:15:22Z",
    // end_time: "2019-08-24T14:15:22Z",
    // since_id: "1346889436626259968",
    // until_id: "1346889436626259968",
    // next_token: "string",
    // pagination_token: "string",
    // granularity: "minute",
    // search_countFields: ["end", "start", "tweet_count"],
  };
};
