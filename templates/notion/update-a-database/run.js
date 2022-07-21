const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_NOTION_API_TOKEN, notionVersion, id, title, properties } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "patch",
      url: `https://api.notion.com/v1/databases/${id}`,
      headers: {
        "Notion-Version": notionVersion,
        Authorization: `Bearer ${BUILDABLE_NOTION_API_TOKEN}`,
      },
      data: { ...(title ? { title } : {}), ...(properties ? { properties } : {}) },
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
const verifyInput = ({ BUILDABLE_NOTION_API_TOKEN, notionVersion, id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_NOTION_API_TOKEN:
      "A valid BUILDABLE_NOTION_API_TOKEN field (string) was not provided in the input.",
    INVALID_NOTION_VERSION: "A valid notionVersion field (string) was not provided in the input.",
    INVALID_ID: "A valid id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_NOTION_API_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_NOTION_API_TOKEN);
  if (typeof notionVersion !== "string") throw new Error(ERRORS.INVALID_NOTION_VERSION);
  if (typeof id !== "string") throw new Error(ERRORS.INVALID_ID);
};
