const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required

    // jsonrpc: "1.0",
    // id: "test",
    // method: "getblockcount",
    // params: [],
  };
};
