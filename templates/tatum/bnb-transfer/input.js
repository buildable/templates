const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "61b3bffddfb389cde19c73be", // Required
    address: "tbnb1q82g2h9q0kfe7sysnj5w7nlak92csfjztymp39", // Required
    amount: "10000", // Required
    fromPrivateKey: "8ac4b14b38d8a5af58019088ce5a24b764536bccd1981cf79d3e09e9d1f2ad31", // Required

    // compliant: false,
    // attr: "12355",
    // paymentId: "1234",
    // senderNote: "Sender note",
  };
};
