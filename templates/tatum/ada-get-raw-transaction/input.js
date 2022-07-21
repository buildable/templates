const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "1451692ebbfbea1a2d2ec6fe6782596b6aa2e46c0589d04c406f491b5b46bc6a", // Required
  };
};
