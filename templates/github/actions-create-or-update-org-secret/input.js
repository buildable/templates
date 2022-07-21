const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    org: "string", // Required
    secret_name: "string", // Required
    visibility: "all", // Required

    // encrypted_value: "string",
    // key_id: "string",
    // selected_repository_ids: ["string"],
  };
};
