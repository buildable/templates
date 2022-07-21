const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    pair: "BTC/EUR", // Required
    from: 1613654998398, // Required
    to: 1613654998398, // Required
    timeFrame: "MIN_5", // Required
  };
};
