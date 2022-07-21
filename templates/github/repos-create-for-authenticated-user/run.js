const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_ID,
    name,
    description,
    homepage,
    private,
    has_issues,
    has_projects,
    has_wiki,
    team_id,
    auto_init,
    gitignore_template,
    license_template,
    allow_squash_merge,
    allow_merge_commit,
    allow_rebase_merge,
    allow_auto_merge,
    delete_branch_on_merge,
    has_downloads,
    is_template,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.github.com/user/repos",
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: {
        name,
        ...(description ? { description } : {}),
        ...(homepage ? { homepage } : {}),
        ...(private ? { private } : {}),
        ...(has_issues ? { has_issues } : {}),
        ...(has_projects ? { has_projects } : {}),
        ...(has_wiki ? { has_wiki } : {}),
        ...(team_id ? { team_id } : {}),
        ...(auto_init ? { auto_init } : {}),
        ...(gitignore_template ? { gitignore_template } : {}),
        ...(license_template ? { license_template } : {}),
        ...(allow_squash_merge ? { allow_squash_merge } : {}),
        ...(allow_merge_commit ? { allow_merge_commit } : {}),
        ...(allow_rebase_merge ? { allow_rebase_merge } : {}),
        ...(allow_auto_merge ? { allow_auto_merge } : {}),
        ...(delete_branch_on_merge ? { delete_branch_on_merge } : {}),
        ...(has_downloads ? { has_downloads } : {}),
        ...(is_template ? { is_template } : {}),
      },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({ BUILDABLE_GITHUB_ACCESS_TOKEN, BUILDABLE_GITHUB_ACCOUNT_ID, name }) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
};
