const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ETH", // Required
    symbol: "ERC_SYMBOL", // Required
    name: "MyERC20", // Required
    supply: "10000000", // Required
    digits: 18, // Required
    address: "0xa0Ca9FF38Bad06eBe64f0fDfF279cAE35129F5C6", // Required
    fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", // Required

    // testnetType: "ethereum-ropsten",
    // totalCap: "10000000",
    // nonce: 0,
    // fee: { gasLimit: "40000", gasPrice: "20" },
  };
};
