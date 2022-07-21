const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    currency: "BNB", // Required
    address: "tbnb1sfj9981j2eo1ij2e09", // Required

    // index: 1,
  };
};
