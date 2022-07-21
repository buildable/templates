const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required

    // sha: "string",
    // path: "string",
    // author: "string",
    // since: "2019-08-24T14:15:22Z",
    // until: "2019-08-24T14:15:22Z",
    // per_page: 30,
    // page: 1,
  };
};
