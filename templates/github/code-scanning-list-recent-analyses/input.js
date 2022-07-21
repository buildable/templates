const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required

    // tool_name: "string",
    // tool_guid: "string",
    // page: 1,
    // per_page: 30,
    // ref: "string",
    // sarif_id: "6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53",
  };
};
