const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    path: "string", // Required
    message: "string", // Required
    content: "string", // Required

    // sha: "string",
    // branch: "string",
    // committer: { name: "string", email: "string", date: "2013-01-05T13:13:22+05:00" },
    // author: { name: "string", email: "string", date: "2013-01-15T17:13:22+05:00" },
  };
};
