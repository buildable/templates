const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "1A32A054B04AC9D6814710DDCA416E72C4CD2D78D6C3DFC06CC9369CC4F6B250", // Required
  };
};
