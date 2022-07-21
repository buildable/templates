const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    deployment_id: 0, // Required
    state: "error", // Required

    // target_url: "",
    // log_url: "",
    // description: "",
    // environment: "production",
    // environment_url: "",
    // auto_inactive: true,
  };
};
