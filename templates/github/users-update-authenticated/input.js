const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required

    // name: "Omar Jahandar",
    // email: "omar@example.com",
    // blog: "blog.example.com",
    // twitter_username: "therealomarj",
    // company: "Acme corporation",
    // location: "Berlin, Germany",
    // hireable: true,
    // bio: "string",
  };
};
