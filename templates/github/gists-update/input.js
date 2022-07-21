const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    gist_id: "string", // Required

    // description: "Example Ruby script",
    // files: { "hello.rb": { content: "blah", filename: "goodbye.rb" } },
  };
};
