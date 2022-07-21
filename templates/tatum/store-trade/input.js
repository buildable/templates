const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    type: "BUY", // Required
    price: "8650.4", // Required
    amount: "15000", // Required
    pair: "BTC/EUR", // Required
    currency1AccountId: "7c21ed165e294db78b95f0f1", // Required
    currency2AccountId: "7c21ed165e294db78b95f0f1", // Required
    attr: { sealDate: 1572031674384, percentBlock: 1.5, percentPenalty: 1.5 }, // Required

    // feeAccountId: "7c21ed165e294db78b95f0f1",
    // fee: 1.5,
  };
};
