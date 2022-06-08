/**
 * ----------------------------------------------------------------------------------------------------
 * Sellix GET Blacklist [Input]
 *
 * @author    Finn Lancaster
 * @access    open
 * @license   MIT
 * @docs      https://dev-openapi.sellix.io/#operation/getBlacklists
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
    method: "GET", // Required
    url: ($trigger.env.SELLIX_API_BASE || "https://dev.sellix.io/v1")+"/blacklists", // Required
    headers: {
      "Authorization": `Bearer ${$trigger.env.SELLIX_API_KEY}` // Required
    },
  };
};
