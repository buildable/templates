const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_ID,
    owner,
    repo,
    deployment_id,
    state,
    target_url,
    log_url,
    description,
    environment,
    environment_url,
    auto_inactive,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.github.com/repos/${owner}/${repo}/deployments/${deployment_id}/statuses`,
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: {
        state,
        ...(target_url ? { target_url } : {}),
        ...(log_url ? { log_url } : {}),
        ...(description ? { description } : {}),
        ...(environment ? { environment } : {}),
        ...(environment_url ? { environment_url } : {}),
        ...(auto_inactive ? { auto_inactive } : {}),
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
  owner,
  repo,
  deployment_id,
  state,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_OWNER: "A valid owner field (string) was not provided in the input.",
    INVALID_REPO: "A valid repo field (string) was not provided in the input.",
    INVALID_DEPLOYMENT_ID: "A valid deployment_id field (number) was not provided in the input.",
    INVALID_STATE: "A valid state field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof owner !== "string") throw new Error(ERRORS.INVALID_OWNER);
  if (typeof repo !== "string") throw new Error(ERRORS.INVALID_REPO);
  if (typeof deployment_id !== "number") throw new Error(ERRORS.INVALID_DEPLOYMENT_ID);
  if (typeof state !== "string") throw new Error(ERRORS.INVALID_STATE);
};
