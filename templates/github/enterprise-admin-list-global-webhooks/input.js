const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    accept: "application/vnd.github.superpro-preview+json", // Required

    // per_page: 30,
    // page: 1,
  };
};
