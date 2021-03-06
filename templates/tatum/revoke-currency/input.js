/**
 * ----------------------------------------------------------------------------------------------------
 * Destroy Supply of Virtual Currency [Input]
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/revokeCurrency
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
    TATUM_API_KEY: $trigger.env.TATUM_API_KEY, // Required
    TATUM_API_URL: $trigger.env.TATUM_API_URL, // Required
    accountId: "5e68c66581f2ee32bc354087", // Required
    amount: "1.5", // Required

    // paymentId: "My Payment",
    // reference: "akjsndakjsdn-asd-kjasnd-asdkn-asdjnasjkdn",
    // transactionCode: "1_01_EXTERNAL_CODE",
    // recipientNote: "Private note",
    // counterAccount: "5e6645712b55823de7ea82f1",
    // senderNote: "Sender note",
  };
};
