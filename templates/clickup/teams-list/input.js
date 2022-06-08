/**
 * ----------------------------------------------------------------------------------------------------
 * List All Teams in Workspace [Input]
 *
 * @author    LaunchUp Technology Ltd.
 * @access    open
 * @license   MIT
 * @docs      https://clickup.com/api
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
const nodeInput = ({ $trigger, $nodes }) => {
  return {
    CLICKUP_API_TOKEN: $trigger.env.CLICKUP_API_TOKEN, // Required
    CLICKUP_API_URL: $trigger.env.CLICKUP_API_URL, // Required
  };
};
