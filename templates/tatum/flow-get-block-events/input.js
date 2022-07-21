const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    type: "A.7e60df042a9c0868.FlowToken.TokensWithdrawn", // Required
    from: 654321, // Required
    to: 654326, // Required
  };
};
