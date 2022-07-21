const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    from: "2021-05-01T20:44:39Z", // Required
    to: "2021-06-01T20:44:39Z", // Required

    // limit: "5",
    // next: "ywAAAAAAAAAAAAAA",
  };
};
