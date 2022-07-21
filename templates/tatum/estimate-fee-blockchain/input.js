const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
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
