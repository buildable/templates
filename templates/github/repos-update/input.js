const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required

    // name: "string",
    // description: "string",
    // homepage: "string",
    // private: false,
    // visibility: "public",
    // security_and_analysis: {
    //     advanced_security: { status: "string" },
    //     secret_scanning: { status: "string" }
    //   },
    // has_issues: true,
    // has_projects: true,
    // has_wiki: true,
    // is_template: false,
    // default_branch: "string",
    // allow_squash_merge: true,
    // allow_merge_commit: true,
    // allow_rebase_merge: true,
    // allow_auto_merge: false,
    // delete_branch_on_merge: false,
    // archived: false,
    // allow_forking: false,
  };
};
