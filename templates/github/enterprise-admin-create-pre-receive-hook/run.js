const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_ID,
    name,
    script,
    script_repository,
    environment,
    enforcement,
    allow_downstream_configuration,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.github.com/admin/pre-receive-hooks",
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: {
        name,
        script,
        script_repository,
        environment,
        ...(enforcement ? { enforcement } : {}),
        ...(allow_downstream_configuration ? { allow_downstream_configuration } : {}),
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
  name,
  script,
  script_repository,
  environment,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
    INVALID_SCRIPT: "A valid script field (string) was not provided in the input.",
    INVALID_SCRIPT_REPOSITORY:
      "A valid script_repository field (object) was not provided in the input.",
    INVALID_ENVIRONMENT: "A valid environment field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
  if (typeof script !== "string") throw new Error(ERRORS.INVALID_SCRIPT);
  if (typeof script_repository !== "object") throw new Error(ERRORS.INVALID_SCRIPT_REPOSITORY);
  if (typeof environment !== "object") throw new Error(ERRORS.INVALID_ENVIRONMENT);
};
