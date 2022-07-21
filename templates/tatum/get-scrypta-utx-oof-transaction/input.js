const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "980fa9cb468f93c6cb6b672e1b062a16507a1a9a7903a83bf3f10e1059b25341", // Required
    index: "0", // Required
  };
};
