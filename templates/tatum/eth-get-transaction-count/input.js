const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7", // Required

    // testnetType: "ethereum-ropsten",
  };
};
