const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    xApiKey: "/v3/egld/node/asdlkfjnqunalkwjf124387ad/transaction/cost", // Required
    version: 1, // Required
    chainId: "D", // Required
    nonce: 42, // Required
    value: "100000000000000000", // Required
    receiver: "erd1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmq4vw35r", // Required
    sender: "erd1njqj2zggfup4nl83x0nfgqjkjserm7mjyxdx5vzkm8k0gkh40ezqtfz9lg", // Required
    gasPrice: 1000000000, // Required
    gasLimit: 70000, // Required
    data: "food for cats", // Required
    signature:
      "93207c579bf57be03add632b0e1624a73576eeda8a1687e0fa286f03eb1a17ffb125ccdb008a264c402f074a360442c7a034e237679322f62268b614e926d10f", // Required
  };
};
