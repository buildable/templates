const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "61b3bffddfb389cde19c73be", // Required
    account: "rPRxSZzTFd6Yez3UMxFUPJvnhUhjewpjfV", // Required
    address: "rPRxSZzTFd6Yez3UMxFUPJvnhUhjewpjfV", // Required
    amount: "10000", // Required
    secret: "snSFTHdvSYQKKkYntvEt8cnmZuPJB", // Required

    // compliant: false,
    // attr: "12355",
    // sourceTag: 12355,
    // paymentId: "1234",
    // senderNote: "Sender note",
  };
};
