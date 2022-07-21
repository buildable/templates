const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_GITHUB_ACCESS_TOKEN, BUILDABLE_GITHUB_ACCOUNT_ID, maintenance } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.github.com/setup/api/maintenance",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: qs.stringify({ maintenance }),
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
  BUILDABLE_GITHUB_ACCESS_TOKEN,
  BUILDABLE_GITHUB_ACCOUNT_ID,
  maintenance,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_MAINTENANCE: "A valid maintenance field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof maintenance !== "string") throw new Error(ERRORS.INVALID_MAINTENANCE);
};
