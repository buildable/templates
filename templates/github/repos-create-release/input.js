const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    tag_name: "string", // Required

    // target_commitish: "string",
    // name: "string",
    // body: "string",
    // draft: false,
    // prerelease: false,
    // generate_release_notes: false,
  };
};
