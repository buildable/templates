const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_GITHUB_ACCESS_TOKEN, BUILDABLE_GITHUB_ACCOUNT_ID, announcement, expires_at } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "patch",
      url: "https://api.github.com/enterprise/announcement",
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: { announcement, ...(expires_at ? { expires_at } : {}) },
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
  announcement,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_ANNOUNCEMENT: "A valid announcement field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof announcement !== "string") throw new Error(ERRORS.INVALID_ANNOUNCEMENT);
};
