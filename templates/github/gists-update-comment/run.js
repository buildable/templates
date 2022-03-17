/**
 * ----------------------------------------------------------------------------------------------------
 * Update a Gist Comment [Run]
 *
 * @description - Update a gist comment using the Github API
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://docs.github.com/enterprise-server@3.3/rest/reference/gists#update-a-gist-comment
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
  const { GITHUB_API_TOKEN, GITHUB_API_USERNAME, gist_id, comment_id, body } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "patch",
      url: `https://api.github.com/gists/${gist_id}/comments/${comment_id}`,
      auth: { password: GITHUB_API_TOKEN, username: GITHUB_API_USERNAME },
      data: { body },
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
  gist_id,
  comment_id,
  body,
}) => {
  const ERRORS = {
    INVALID_GITHUB_API_TOKEN:
      "A valid GITHUB_API_TOKEN field (string) was not provided in the input.",
    INVALID_GITHUB_API_USERNAME:
      "A valid GITHUB_API_USERNAME field (string) was not provided in the input.",
    INVALID_GIST_ID:
      "A valid gist_id field (string) was not provided in the input.",
    INVALID_COMMENT_ID:
      "A valid comment_id field (number) was not provided in the input.",
    INVALID_BODY: "A valid body field (string) was not provided in the input.",
  };

  if (typeof GITHUB_API_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_GITHUB_API_TOKEN);
  if (typeof GITHUB_API_USERNAME !== "string")
    throw new Error(ERRORS.INVALID_GITHUB_API_USERNAME);
  if (typeof gist_id !== "string") throw new Error(ERRORS.INVALID_GIST_ID);
  if (typeof comment_id !== "number")
    throw new Error(ERRORS.INVALID_COMMENT_ID);
  if (typeof body !== "string") throw new Error(ERRORS.INVALID_BODY);
};