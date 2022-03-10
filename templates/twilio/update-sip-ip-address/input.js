/**
 * ----------------------------------------------------------------------------------------------------
 * Update Sip Ip Address [Input]
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://www.twilio.com/docs
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
    TWILIO_ACCOUNT_SID: $trigger.env.TWILIO_ACCOUNT_SID, // Required
    TWILIO_AUTH_TOKEN: $trigger.env.TWILIO_AUTH_TOKEN, // Required
    ipAccessControlListSid: "stringstringstringstringstringstri", // Required
    sid: "stringstringstringstringstringstri", // Required

    // cidrPrefixLength: 0,
    // friendlyName: "string",
    // ipAddress: "string",
  };
};
