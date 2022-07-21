const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    type: "tweets", // Required

    // name: "my-job",
    // resumable: true,
  };
};
