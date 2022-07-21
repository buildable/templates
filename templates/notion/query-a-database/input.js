const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    notionVersion: "2022-02-22", // Required
    BUILDABLE_NOTION_API_TOKEN: $env.BUILDABLE_NOTION_API_TOKEN, // Required
    id: "string", // Required

    // filter: { property: "Status", select: { equals: "Reading" } },
  };
};
