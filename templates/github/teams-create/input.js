const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    org: "string", // Required
    name: "string", // Required

    // description: "string",
    // maintainers: ["string"],
    // repo_names: ["string"],
    // privacy: "secret",
    // permission: "pull",
    // parent_team_id: 0,
  };
};
