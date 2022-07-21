const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    client_id: "string", // Required
    access_token: "e72e16c7e42f292c6912e7710c838347ae178b4a", // Required

    // target: "octocat",
    // target_id: 1,
    // repositories: ["rails"],
    // repository_ids: [1],
    // permissions: { contents: "read", issues: "read", deployments: "write", single_file: "read" },
  };
};
