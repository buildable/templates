const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    quorumEndpoint: "string", // Required
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "0x3223AEB8404C7525FcAA6C512f91e287AE9FfE7B", // Required
    password: "ksjdfhu98q34fi", // Required
  };
};
