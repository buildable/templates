const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    enterprise: "string", // Required
    name: "string", // Required

    // visibility: "selected",
    // selected_organization_ids: [0],
    // runners: [0],
    // allows_public_repositories: false,
  };
};
