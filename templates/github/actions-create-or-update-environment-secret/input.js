const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    repository_id: 0, // Required
    environment_name: "string", // Required
    secret_name: "string", // Required
    encrypted_value: "string", // Required
    key_id: "string", // Required
  };
};
