const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    fromPrivateKey: "0cd8e6217b4a218807b858ffb508483cdcdadbb7a21196727f764a510a692760", // Required

    // from: "erd17k95m339aqzxzyvjjjfa3lka0yyeqgcsda50tw5z9g73ycfe2caq9e6jq7",
    // to: "erd17k95m339aqzxzyvjjjfa3lka0yyeqgcsda50tw5z9g73ycfe2caq9e6jq6",
    // amount: "0",
    // fee: { gasLimit: "500000", gasPrice: "1000000000" },
    // data: "Hello world",
  };
};
