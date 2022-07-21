const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "qWpEineYmtc2Ea25GqDYhvuzCjTiu5hMYA", // Required
    pageSize: 20, // Required
    offset: 0, // Required
  };
};
