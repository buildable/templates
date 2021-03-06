/**
 * ----------------------------------------------------------------------------------------------------
 * Update a Pre-Receive Hook [Input]
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://docs.github.com/enterprise-server@3.3/rest/reference/enterprise-admin#update-a-pre-receive-hook
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
    pre_receive_hook_id: 0, // Required

    // name: "string",
    // script: "string",
    // script_repository: {},
    // environment: {},
    // enforcement: "string",
    // allow_downstream_configuration: true,
  };
};
