const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    branch: "string", // Required
    required_status_checks: {
      strict: true,
      contexts: ["string"],
      checks: [{ context: "string", app_id: 0 }],
    }, // Required
    enforce_admins: true, // Required
    required_pull_request_reviews: {
      dismissal_restrictions: { users: ["string"], teams: ["string"] },
      dismiss_stale_reviews: true,
      require_code_owner_reviews: true,
      required_approving_review_count: 0,
    }, // Required
    restrictions: { users: ["string"], teams: ["string"], apps: ["string"] }, // Required

    // required_linear_history: true,
    // allow_force_pushes: true,
    // allow_deletions: true,
    // required_conversation_resolution: true,
    // contexts: ["string"],
  };
};
