const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_AIRTABLE_API_KEY: $env.BUILDABLE_AIRTABLE_API_KEY, // Required
    BUILDABLE_AIRTABLE_BASE_ID: $env.BUILDABLE_AIRTABLE_BASE_ID, // Required
    endpoint: "https://api.airtable.com/v0", // Required
    tableName: "Table 1", // Required

    // Required - Array of objects to insert
    records: [
      {
        fields: {
          Name: "Bob",
        },
      },
      {
        fields: {
          Name: "Fred",
        },
      },
    ],
  };
};
