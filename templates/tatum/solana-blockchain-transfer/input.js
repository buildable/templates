const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    from: "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ", // Required
    to: "FZAS4mtPvswgVxbpc117SqfNgCDLTCtk5CoeAtt58FWU", // Required
    amount: "100000", // Required
    fromPrivateKey:
      "zgsAKfjuXrAxEyuYRxbbxPM3rdsPbJPnGreaGMbcdUApJ6wHnCqQnf9b1RNPdeZxsRMkezh4VgXQ7YrbpndGtEv", // Required
  };
};
