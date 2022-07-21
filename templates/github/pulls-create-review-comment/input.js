const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    pull_number: 0, // Required
    body: "string", // Required

    // commit_id: "string",
    // path: "string",
    // position: 0,
    // side: "LEFT",
    // line: 0,
    // start_line: 0,
    // start_side: "LEFT",
    // in_reply_to: 2,
  };
};
