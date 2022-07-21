const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_NOTION_API_TOKEN, notionVersion, parent, properties, children } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.notion.com/v1/pages/",
      headers: {
        "Content-Type": "application/json",
        "Notion-Version": notionVersion,
        Authorization: `Bearer ${BUILDABLE_NOTION_API_TOKEN}`,
      },
      data: { parent, properties, ...(children ? { children } : {}) },
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
const verifyInput = ({ BUILDABLE_NOTION_API_TOKEN, notionVersion, parent, properties }) => {
  const ERRORS = {
    INVALID_BUILDABLE_NOTION_API_TOKEN:
      "A valid BUILDABLE_NOTION_API_TOKEN field (string) was not provided in the input.",
    INVALID_NOTION_VERSION: "A valid notionVersion field (string) was not provided in the input.",
    INVALID_PARENT: "A valid parent field (object) was not provided in the input.",
    INVALID_PROPERTIES: "A valid properties field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_NOTION_API_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_NOTION_API_TOKEN);
  if (typeof notionVersion !== "string") throw new Error(ERRORS.INVALID_NOTION_VERSION);
  if (typeof parent !== "object") throw new Error(ERRORS.INVALID_PARENT);
  if (typeof properties !== "object") throw new Error(ERRORS.INVALID_PROPERTIES);
};
