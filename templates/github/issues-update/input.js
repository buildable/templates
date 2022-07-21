const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    issue_number: 0, // Required

    // title: "string",
    // body: "string",
    // assignee: "string",
    // state: "open",
    // milestone: "string",
    // labels: ["string"],
    // assignees: ["string"],
  };
};
