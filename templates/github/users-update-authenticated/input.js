/**
 * ----------------------------------------------------------------------------------------------------
 * Update the Authenticated User [Input]
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://docs.github.com/enterprise-server@3.3/rest/reference/users/#update-the-authenticated-user
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

    // name: "Omar Jahandar",
    // email: "omar@example.com",
    // blog: "blog.example.com",
    // twitter_username: "therealomarj",
    // company: "Acme corporation",
    // location: "Berlin, Germany",
    // hireable: true,
    // bio: "string",
  };
};
