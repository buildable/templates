const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    pageSize: 50, // Required
    offset: 100, // Required
    address: "LPcLKgbdwmDkdNFYfv1VX1k3gUuQgS7Au6", // Required
  };
};
