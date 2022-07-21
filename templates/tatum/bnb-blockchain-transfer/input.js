const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    to: "tbnb138u9djee6fwphhd2a3628q2h0j5w97yx48zqex", // Required
    currency: "BNB", // Required
    amount: "100000", // Required
    fromPrivateKey: "cTmS2jBWXgFaXZ2xG9jhn67TiyTshnMp3UedamzEhGm6BZV1vLgQ", // Required

    // message: "Message to recipient",
  };
};
