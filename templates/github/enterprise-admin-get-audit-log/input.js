const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    enterprise: "string", // Required

    // phrase: "string",
    // after: "string",
    // before: "string",
    // order: "desc",
    // page: 1,
    // per_page: 30,
  };
};
