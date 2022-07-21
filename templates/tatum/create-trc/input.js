const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    symbol: "MY_TOKEN", // Required
    supply: "1000000.0", // Required
    decimals: 6, // Required
    type: "TRC10", // Required
    description: "My Public Token", // Required
    basePair: "EUR", // Required

    // url: "https://mytoken.com",
    // baseRate: 1,
    // customer: {
    //     accountingCurrency: "USD",
    //     customerCountry: "US",
    //     externalId: "123654",
    //     providerCountry: "US"
    //   },
    // accountingCurrency: "USD",
    // derivationIndex: 0,
    // xpub: "xpub6EsCk1uU6cJzqvP9CdsTiJwT2rF748YkPnhv5Qo8q44DG7nn2vbyt48YRsNSUYS44jFCW9gwvD9kLQu9AuqXpTpM1c5hgg9PsuBLdeNncid",
    // address: "TVAEYCmc15awaDRAjUZ1kvcHwQQaoPw2CW",
  };
};
