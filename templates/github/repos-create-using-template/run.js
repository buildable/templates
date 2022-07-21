const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_ID,
    template_owner,
    template_repo,
    name,
    owner,
    description,
    include_all_branches,
    private,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.github.com/repos/${template_owner}/${template_repo}/generate`,
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: {
        name,
        ...(owner ? { owner } : {}),
        ...(description ? { description } : {}),
        ...(include_all_branches ? { include_all_branches } : {}),
        ...(private ? { private } : {}),
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
  BUILDABLE_GITHUB_ACCESS_TOKEN,
  BUILDABLE_GITHUB_ACCOUNT_ID,
  template_owner,
  template_repo,
  name,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_TEMPLATE_OWNER: "A valid template_owner field (string) was not provided in the input.",
    INVALID_TEMPLATE_REPO: "A valid template_repo field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof template_owner !== "string") throw new Error(ERRORS.INVALID_TEMPLATE_OWNER);
  if (typeof template_repo !== "string") throw new Error(ERRORS.INVALID_TEMPLATE_REPO);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
};
