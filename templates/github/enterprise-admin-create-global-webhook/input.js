const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    name: "string", // Required
    config: { url: "string", content_type: "string", secret: "string", insecure_ssl: "string" }, // Required

    // events: ["string"],
    // active: true,
  };
};
