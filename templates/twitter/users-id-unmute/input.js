const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    source_user_id: "2244994945", // Required
    target_user_id: "2244994945", // Required
  };
};
