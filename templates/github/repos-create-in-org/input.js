const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    org: "string", // Required
    name: "string", // Required

    // description: "string",
    // homepage: "string",
    // private: false,
    // visibility: "public",
    // has_issues: true,
    // has_projects: true,
    // has_wiki: true,
    // is_template: false,
    // team_id: 0,
    // auto_init: false,
    // gitignore_template: "string",
    // license_template: "string",
    // allow_squash_merge: true,
    // allow_merge_commit: true,
    // allow_rebase_merge: true,
    // allow_auto_merge: false,
    // delete_branch_on_merge: false,
  };
};
