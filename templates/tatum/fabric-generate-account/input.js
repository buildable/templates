const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    fabricEndpoint: "string", // Required
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    key: "key_1", // Required
    data: "Data to store.", // Required
    chain: "FABRIC", // Required
  };
};
