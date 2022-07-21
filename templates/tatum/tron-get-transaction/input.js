const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "81d0524acf5967f3b361e03fd7d141ab511791cd7aad7ae406c4c8d408290991", // Required
  };
};
