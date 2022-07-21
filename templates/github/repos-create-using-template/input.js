const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    template_owner: "string", // Required
    template_repo: "string", // Required
    name: "string", // Required

    // owner: "string",
    // description: "string",
    // include_all_branches: false,
    // private: false,
  };
};
