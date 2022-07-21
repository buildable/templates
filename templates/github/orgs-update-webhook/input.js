const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    org: "string", // Required
    hook_id: 0, // Required

    // config: {
    //     url: "https://example.com/webhook",
    //     content_type: "json",
    //     secret: "********",
    //     insecure_ssl: "0"
    //   },
    // events: ["push"],
    // active: true,
    // name: "web",
  };
};
