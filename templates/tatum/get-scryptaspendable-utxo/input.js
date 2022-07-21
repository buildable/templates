const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    pageSize: 50, // Required
    offset: 100, // Required
    address: "2ac9175db66a9e646034a9663870743d177175ceff6c25231528cb7690900a78", // Required
  };
};
