const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    xApiKey: "/v3/egld/node/asdlkfjnqunalkwjf12341kljl/network/config", // Required
  };
};
