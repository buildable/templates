/**
 * ----------------------------------------------------------------------------------------------------
 * List All User Groups for a Team [Run]
 *
 * @author    LaunchUp Technology Ltd.
 * @access    open
 * @license   MIT
 * @docs      https://clickup.com/api
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
  const { CLICKUP_API_TOKEN, CLICKUP_API_URL } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: `${CLICKUP_API_URL}/team`,
      headers: { Authorization: `${CLICKUP_API_TOKEN}` },
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
const verifyInput = ({ CLICKUP_API_TOKEN }) => {
  const ERRORS = {
    INVALID_CLICKUP_API_TOKEN:
      "A valid CLICKUP_API_TOKEN field (string) was not provided in the input.",
  };

  if (typeof CLICKUP_API_TOKEN !== "string") throw new Error(ERRORS.INVALID_CLICKUP_API_TOKEN);
};
