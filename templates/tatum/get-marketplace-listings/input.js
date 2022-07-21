const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "CELO", // Required
    contractAddress: "0xe6e7340394958674cdf8606936d292f565e4ecc4", // Required
    type: "INITIATED", // Required
  };
};
