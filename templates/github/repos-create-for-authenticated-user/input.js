const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    name: "Team Environment", // Required

    // description: "string",
    // homepage: "string",
    // private: false,
    // has_issues: true,
    // has_projects: true,
    // has_wiki: true,
    // team_id: 0,
    // auto_init: false,
    // gitignore_template: "Haskell",
    // license_template: "mit",
    // allow_squash_merge: true,
    // allow_merge_commit: true,
    // allow_rebase_merge: true,
    // allow_auto_merge: false,
    // delete_branch_on_merge: false,
    // has_downloads: true,
    // is_template: true,
  };
};
