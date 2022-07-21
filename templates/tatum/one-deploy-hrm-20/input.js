const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    symbol: "MT", // Required
    supply: "10000000", // Required
    description: "My ERC20 Token", // Required
    basePair: "EUR", // Required
    address: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    mnemonic: "urge pulp usage sister evidence arrest palm math please chief egg abuse", // Required
    index: 0, // Required

    // shardID: 0,
    // baseRate: 1,
    // customer: {
    //     accountingCurrency: "USD",
    //     customerCountry: "US",
    //     externalId: "123654",
    //     providerCountry: "US"
    //   },
    // nonce: 0,
  };
};
