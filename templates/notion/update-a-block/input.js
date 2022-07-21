const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    notionVersion: "2022-02-22", // Required
    BUILDABLE_NOTION_API_TOKEN: $env.BUILDABLE_NOTION_API_TOKEN, // Required
    id: "string", // Required

    // paragraph: { rich_text: [{ type: "text", text: { content: "hello to you" } }] },
  };
};
