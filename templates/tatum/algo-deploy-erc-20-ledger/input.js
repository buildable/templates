const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    symbol: "MT", // Required
    supply: "10000000", // Required
    description: "My ERC20 Token", // Required
    basePair: "EUR", // Required
    address: "NTAESFCB3WOD7SAOL42KSPVARLB3JFA3MNX3AESWHYVT2RMYDVZI6YLG4Y", // Required
    mnemonic:
      "artist alarm clerk obscure timber firm reopen provide ankle vicious exhibit waste math toilet believe puppy lucky coast post kind black suspect mule able market", // Required

    // baseRate: 1,
    // customer: {
    //     accountingCurrency: "USD",
    //     customerCountry: "US",
    //     externalId: "123654",
    //     providerCountry: "US"
    //   },
  };
};
