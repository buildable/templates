const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    txId: "45af182a0ffab58e5ba32fee57b297b2260c6e23a1de5ddc76c7ee22d72dea99", // Required
    index: 0, // Required
  };
};
