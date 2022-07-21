const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    fromAccount: "rPRxSZzTFd6Yez3UMxFUPJvnhUhjewpjfV", // Required
    to: "rPRxSZzTFd6Yez3UMxFUPJvnhUhjewpjfV", // Required
    amount: "10000", // Required
    fromSecret: "snSFTHdvSYQKKkYntvEt8cnmZuPJB", // Required

    // fee: "10000",
    // sourceTag: 12355,
    // destinationTag: 12355,
  };
};
