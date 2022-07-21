const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    environment_name: "string", // Required

    // wait_timer: 30,
    // reviewers: [{ type: "User", id: 4532992 }],
    // deployment_branch_policy: { protected_branches: true, custom_branch_policies: true },
  };
};
