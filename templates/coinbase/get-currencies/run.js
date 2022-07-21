const axios = require("axios");

const run = async (input) => {
  const { baseURL } = input;

  verifyInput(input);

  try {
    const result = await axios({
      url: `${baseURL}/currencies`,
    });

    return result.data;
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
const verifyInput = ({ baseURL }) => {
  const ERRORS = {
    INVALID_URL: "A valid baseURL field (string) was not provided in the input.",
  };

  if (typeof baseURL !== "string") throw new Error(ERRORS.INVALID_URL);
};
