const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    xApiKey: "asdlkfjnqunalkwjfnq2oi303294857k", // Required
    jsonrpc: "2.0", // Required
    method: "web3_clientVersion", // Required
    params: [], // Required
    id: 2, // Required

    // testnetType: "ethereum-ropsten",
  };
};
