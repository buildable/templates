const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    accounts: [
      {
        currency: "BTC",
        xpub: "xpub6EsCk1uU6cJzqvP9CdsTiJwT2rF748YkPnhv5Qo8q44DG7nn2vbyt48YRsNSUYS44jFCW9gwvD9kLQu9AuqXpTpM1c5hgg9PsuBLdeNncid",
        customer: {
          accountingCurrency: "USD",
          customerCountry: "US",
          externalId: "123654",
          providerCountry: "US",
        },
        compliant: false,
        accountCode: "AC_1011_B",
        accountingCurrency: "USD",
        accountNumber: "123456",
      },
    ], // Required
  };
};
