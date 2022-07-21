const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required

    // name: "string",
    // config: {
    //     url: "https://example.com/webhook",
    //     content_type: "json",
    //     secret: "********",
    //     insecure_ssl: "0",
    //     token: "abc",
    //     digest: "sha256"
    //   },
    // events: ["push"],
    // active: true,
  };
};
