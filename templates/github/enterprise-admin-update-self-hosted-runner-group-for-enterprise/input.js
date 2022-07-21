const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    enterprise: "string", // Required
    runner_group_id: 0, // Required

    // name: "string",
    // visibility: "selected",
    // allows_public_repositories: false,
  };
};
