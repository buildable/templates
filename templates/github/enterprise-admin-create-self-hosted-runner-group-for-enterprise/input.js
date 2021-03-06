/**
 * ----------------------------------------------------------------------------------------------------
 * Create a Self-Hosted Runner Group for an Enterprise [Input]
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://docs.github.com/enterprise-server@3.3/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise
 * ----------------------------------------------------------------------------------------------------
 */

/**
 * Lets you select the input for your Node's run function
 *
 * @param {Params} params
 * @param {Object} $trigger - This Flow's request object
 * @param {Object} $nodes - Data from above Nodes
 */
const nodeInput = ({ $trigger, $nodes }) => {
  return {
    GITHUB_API_TOKEN: $trigger.env.GITHUB_API_TOKEN, // Required
    GITHUB_API_USERNAME: $trigger.env.GITHUB_API_USERNAME, // Required
    enterprise: "string", // Required
    name: "string", // Required

    // visibility: "selected",
    // selected_organization_ids: [0],
    // runners: [0],
    // allows_public_repositories: false,
  };
};
