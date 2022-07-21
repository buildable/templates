const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ETH", // Required
    to: ["0x687422eEA2cB73B5d3e242bA5456b782919AFc85"], // Required
    tokenId: [["100000", "100001"]], // Required
    amounts: [["100", "100"]], // Required
    contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", // Required

    // testnetType: "ethereum-ropsten",
    // data: "0x1234",
    // nonce: 0,
    // fee: { gasLimit: "40000", gasPrice: "20" },
  };
};
