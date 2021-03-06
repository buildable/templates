/**
 * ----------------------------------------------------------------------------------------------------
 * Update a Check Run [Run]
 *
 * @description - Update a check run using the Github API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://docs.github.com/enterprise-server@3.3/rest/reference/checks#update-a-check-run
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
    owner,
    repo,
    check_run_id,
    name,
    details_url,
    external_id,
    started_at,
    status,
    conclusion,
    completed_at,
    output,
    actions,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "patch",
      url: `https://api.github.com/repos/${owner}/${repo}/check-runs/${check_run_id}`,
      auth: { password: GITHUB_API_TOKEN, username: GITHUB_API_USERNAME },
      data: {
        ...(name ? { name } : {}),
        ...(details_url ? { details_url } : {}),
        ...(external_id ? { external_id } : {}),
        ...(started_at ? { started_at } : {}),
        ...(status ? { status } : {}),
        ...(conclusion ? { conclusion } : {}),
        ...(completed_at ? { completed_at } : {}),
        ...(output ? { output } : {}),
        ...(actions ? { actions } : {}),
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
const verifyInput = ({
  GITHUB_API_TOKEN,
  GITHUB_API_USERNAME,
  owner,
  repo,
  check_run_id,
}) => {
  const ERRORS = {
    INVALID_GITHUB_API_TOKEN:
      "A valid GITHUB_API_TOKEN field (string) was not provided in the input.",
    INVALID_GITHUB_API_USERNAME:
      "A valid GITHUB_API_USERNAME field (string) was not provided in the input.",
    INVALID_OWNER:
      "A valid owner field (string) was not provided in the input.",
    INVALID_REPO: "A valid repo field (string) was not provided in the input.",
    INVALID_CHECK_RUN_ID:
      "A valid check_run_id field (number) was not provided in the input.",
  };

  if (typeof GITHUB_API_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_GITHUB_API_TOKEN);
  if (typeof GITHUB_API_USERNAME !== "string")
    throw new Error(ERRORS.INVALID_GITHUB_API_USERNAME);
  if (typeof owner !== "string") throw new Error(ERRORS.INVALID_OWNER);
  if (typeof repo !== "string") throw new Error(ERRORS.INVALID_REPO);
  if (typeof check_run_id !== "number")
    throw new Error(ERRORS.INVALID_CHECK_RUN_ID);
};
