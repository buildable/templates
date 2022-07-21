const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "61b3bffddfb389cde19c73be", // Required
    from: "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ", // Required
    address: "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g", // Required
    amount: "10000", // Required
    privateKey:
      "zgsAKfjuXrAxEyuYRxbbxPM3rdsPbJPnGreaGMbcdUApJ6wHnCqQnf9b1RNPdeZxsRMkezh4VgXQ7YrbpndGtEv", // Required

    // fee: "10000",
    // compliant: false,
    // paymentId: "1234",
    // senderNote: "Sender note",
  };
};
