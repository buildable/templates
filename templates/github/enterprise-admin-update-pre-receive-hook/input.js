const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    pre_receive_hook_id: 0, // Required

    // name: "string",
    // script: "string",
    // script_repository: {},
    // environment: {},
    // enforcement: "string",
    // allow_downstream_configuration: true,
  };
};
