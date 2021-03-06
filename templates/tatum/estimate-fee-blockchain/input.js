/**
 * ----------------------------------------------------------------------------------------------------
 * Estimate Fee for Transaction [Input]
 *
 * @author    Buildable Technologies Inc.
 * @access    open
 * @license   MIT
 * @docs      https://tatum.io/apidoc.php#operation/EstimateFeeBlockchain
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
    chain: "CELO", // Required
    type: "DEPLOY_ERC20", // Required

    // sender: "0xfb99f8ae9b70a0c8cd96ae665bbaf85a7e01a2ef",
    // recipient: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    // contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    // amount: "100000",
    // enableFungibleTokens: false,
    // enableNonFungibleTokens: false,
    // enableSemiFungibleTokens: false,
    // enableBatchTransactions: false,
  };
};
