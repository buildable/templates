const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ETH", // Required
    tokenId: "100000", // Required
    to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    amount: "100000", // Required

    // testnetType: "ethereum-ropsten",
    // data: "0x1234",
    // index: 0,
    // signatureId: "26d3883e-4e17-48b3-a0ee-09a3e484ac83",
    // nonce: 0,
    // fee: { gasLimit: "40000", gasPrice: "20" },
  };
};
