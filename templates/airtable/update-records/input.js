/**
 * ----------------------------------------------------------------------------------------------------
 * Update Records [Input]
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://airtable.com/api
 *
 * ----------------------------------------------------------------------------------------------------
 */

/**
 * Lets you select the input for your Node's run function
 *
 * @param {Params} params
 * @param {Object} $trigger - This Flow's request object
 * @param {Object} $nodes - Data from above Nodes
 */
const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_AIRTABLE_API_KEY: $env.BUILDABLE_AIRTABLE_API_KEY, // Required
    BUILDABLE_AIRTABLE_BASE_ID: $env.BUILDABLE_AIRTABLE_BASE_ID, // Required
    endpoint: "https://api.airtable.com/v0", // Required
    tableName: "Table 1", // Required

    // Required - Array of objects to insert
    records: [
      {
        id: "recZ3d3YqKJ0OKdxv",
        fields: {
          Name: "Fred",
        },
      },
    ],
  };
};
