const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "a01e2e9f715590d8b766d1bbaa9229ad92fe1da996d8680fa9ef8cccf1467dec", // Required
  };
};
