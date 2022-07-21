const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "00000000000000cfb22714715f09b3721f89819a325f7f4d39b2c22a061d1be8", // Required
  };
};
