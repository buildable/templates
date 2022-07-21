const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    name: "VC_VIRTUAL", // Required
    supply: "1000000", // Required
    basePair: "BTC", // Required

    // baseRate: 1,
    // customer: {
    //     accountingCurrency: "USD",
    //     customerCountry: "US",
    //     externalId: "123654",
    //     providerCountry: "US"
    //   },
    // description: "My Virtual Token description.",
    // accountCode: "AC_1011_B",
    // accountNumber: "1234567890",
    // accountingCurrency: "USD",
  };
};
