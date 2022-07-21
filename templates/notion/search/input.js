const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    notionVersion: "2022-02-22", // Required
    BUILDABLE_NOTION_API_TOKEN: $env.BUILDABLE_NOTION_API_TOKEN, // Required

    // query: "Media Article",
    // sort: { direction: "ascending", timestamp: "last_edited_time" },
  };
};
