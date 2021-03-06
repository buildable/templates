/**
 * ----------------------------------------------------------------------------------------------------
 * Create a Repository for the Authenticated User [Run]
 *
 * @description - Create a repository for the authenticated user using the Github API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://docs.github.com/enterprise-server@3.3/rest/reference/repos#create-a-repository-for-the-authenticated-user
 *
 * ----------------------------------------------------------------------------------------------------
 */

const axios = require("axios");

/**
 * The Node’s executable function
 *
 * @param {Run} input - Data passed to your Node from the input function
 */
const run = async (input) => {
  const {
    GITHUB_API_TOKEN,
    GITHUB_API_USERNAME,
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
      auth: { password: GITHUB_API_TOKEN, username: GITHUB_API_USERNAME },
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
const verifyInput = ({ GITHUB_API_TOKEN, GITHUB_API_USERNAME, name }) => {
  const ERRORS = {
    INVALID_GITHUB_API_TOKEN:
      "A valid GITHUB_API_TOKEN field (string) was not provided in the input.",
    INVALID_GITHUB_API_USERNAME:
      "A valid GITHUB_API_USERNAME field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
  };

  if (typeof GITHUB_API_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_GITHUB_API_TOKEN);
  if (typeof GITHUB_API_USERNAME !== "string")
    throw new Error(ERRORS.INVALID_GITHUB_API_USERNAME);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
};
