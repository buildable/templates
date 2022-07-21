const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required

    // ids: ["120897978112909812"],
    // max_results: 1000,
    // pagination_token: "string",
  };
};
