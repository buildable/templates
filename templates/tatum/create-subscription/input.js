const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    type: "ADDRESS_TRANSACTION", // Required
    attr: {
      address: "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ",
      chain: "SOL",
      url: "https://webhook.tatum.io/account",
    }, // Required
  };
};
