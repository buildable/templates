const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "CELO", // Required
    name: "My ERC721", // Required
    symbol: "ERC_SYMBOL", // Required
    fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", // Required
    feeCurrency: "CELO", // Required

    // testnetType: "ethereum-ropsten",
    // provenance: true,
    // publicMint: true,
    // nonce: 0,
  };
};
