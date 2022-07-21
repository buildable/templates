const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    symbol: "MT", // Required
    supply: "10000000", // Required
    decimals: 6, // Required
    type: "TRC10", // Required
    description: "My TRC Token", // Required
    basePair: "EUR", // Required
    address: "TVAEYCmc15awaDRAjUZ1kvcHwQQaoPw2CW", // Required
    mnemonic: "urge pulp usage sister evidence arrest palm math please chief egg abuse", // Required
    index: 0, // Required

    // url: "https://mytoken.com",
    // baseRate: 1,
    // customer: {
    //     accountingCurrency: "USD",
    //     customerCountry: "US",
    //     externalId: "123654",
    //     providerCountry: "US"
    //   },
  };
};
