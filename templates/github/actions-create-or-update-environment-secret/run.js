const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_ID,
    repository_id,
    environment_name,
    secret_name,
    encrypted_value,
    key_id,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "put",
      url: `https://api.github.com/repositories/${repository_id}/environments/${environment_name}/secrets/${secret_name}`,
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: { encrypted_value, key_id },
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
  repository_id,
  environment_name,
  secret_name,
  encrypted_value,
  key_id,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_REPOSITORY_ID: "A valid repository_id field (number) was not provided in the input.",
    INVALID_ENVIRONMENT_NAME:
      "A valid environment_name field (string) was not provided in the input.",
    INVALID_SECRET_NAME: "A valid secret_name field (string) was not provided in the input.",
    INVALID_ENCRYPTED_VALUE:
      "A valid encrypted_value field (string) was not provided in the input.",
    INVALID_KEY_ID: "A valid key_id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof repository_id !== "number") throw new Error(ERRORS.INVALID_REPOSITORY_ID);
  if (typeof environment_name !== "string") throw new Error(ERRORS.INVALID_ENVIRONMENT_NAME);
  if (typeof secret_name !== "string") throw new Error(ERRORS.INVALID_SECRET_NAME);
  if (typeof encrypted_value !== "string") throw new Error(ERRORS.INVALID_ENCRYPTED_VALUE);
  if (typeof key_id !== "string") throw new Error(ERRORS.INVALID_KEY_ID);
};
