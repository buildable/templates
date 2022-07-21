const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "CELO", // Required
    tokenId: 1, // Required
    tokenAddress: "0x1ce4e40889a13971681391aad29e88efaf91f784", // Required
    pageSize: 10, // Required

    // offset: 0,
    // from: 1087623,
    // to: 1087823,
  };
};
