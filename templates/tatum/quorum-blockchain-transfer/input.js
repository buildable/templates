const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    quorumEndpoint: "string", // Required
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    from: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    to: "0x938516ad9dc6d8d4dc8b2aa7cd7791125302fc95", // Required

    // data: "0x234958719045871984571934519035710938457190385719038457190457190385719034751903745092134857",
    // nonce: 0,
    // amount: "0xcee3",
  };
};
