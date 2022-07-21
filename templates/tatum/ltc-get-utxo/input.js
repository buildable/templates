const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "5f83d51c8d3054012cea3011fa626b85d89442788721afd60719ab1f9ab8f78a", // Required
    index: 0, // Required
  };
};
