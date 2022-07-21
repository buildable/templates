const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "0x8ce4e40889a13971681391aad29e88efaf91f784", // Required
    pageSize: 10, // Required

    // testnetType: "ethereum-ropsten",
    // offset: 0,
    // from: 1087623,
    // to: 1087823,
    // sort: "ASC",
  };
};
