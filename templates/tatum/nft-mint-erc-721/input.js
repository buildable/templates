const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ETH", // Required
    tokenId: "100000", // Required
    to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    url: "https://my_token_data.com", // Required
    fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", // Required

    // testnetType: "ethereum-ropsten",
    // contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    // erc20: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    // provenance: true,
    // authorAddresses: ["0x687422eEA2cB73B5d3e242bA5456b782919AFc85"],
    // cashbackValues: ["0.5"],
    // fixedValues: ["0.5"],
    // nonce: 0,
    // fee: { gasLimit: "40000", gasPrice: "20" },
  };
};
