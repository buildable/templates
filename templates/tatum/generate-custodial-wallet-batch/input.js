const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "MATIC", // Required
    fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", // Required
    batchCount: 270, // Required
    owner: "0x8cb76aed9c5e336ef961265c6079c14e9cd3d2ea", // Required

    // testnetType: "ethereum-ropsten",
    // fee: { gasLimit: "40000", gasPrice: "20" },
    // nonce: 0,
  };
};
