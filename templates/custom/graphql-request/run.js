const { request } = require("graphql-request");

const run = async (input) => {
  const { endpoint, query, variables = {}, requestHeaders = {} } = input;

  verifyInput(input);

  try {
    const data = await request(endpoint, query, variables, requestHeaders);

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: {
        ...error,
      },
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({ endpoint, query }) => {
  const ERRORS = {
    INVALID_ENDPOINT: "A valid endpoint field (string) must be provided",
    INVALID_QUERY: "A valid query field (string) must be provided",
  };

  if (typeof endpoint !== "string") throw new Error(ERRORS.INVALID_ENDPOINT);
  if (typeof query !== "string") throw new Error(ERRORS.INVALID_QUERY);
};
