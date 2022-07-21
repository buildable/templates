const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    org: "string", // Required

    // billing_email: "string",
    // company: "string",
    // email: "string",
    // twitter_username: "string",
    // location: "string",
    // name: "string",
    // description: "string",
    // has_organization_projects: true,
    // has_repository_projects: true,
    // default_repository_permission: "read",
    // members_can_create_repositories: true,
    // members_can_create_internal_repositories: true,
    // members_can_create_private_repositories: true,
    // members_can_create_public_repositories: true,
    // members_allowed_repository_creation_type: "all",
    // members_can_create_pages: true,
    // members_can_fork_private_repositories: false,
    // blog: "http://github.blog",
  };
};
