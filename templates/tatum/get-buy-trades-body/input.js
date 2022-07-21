const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    pageSize: 10, // Required

    // id: "5e68c66581f2ee32bc354087",
    // customerId: "5e68c66581f2ee32bc354087",
    // offset: 0,
    // pair: "BTC/EUR",
    // count: true,
    // tradeType: "BUY",
    // amount: [{ op: "gte", value: "1.5" }],
    // fill: [{ op: "gte", value: "1.5" }],
    // price: [{ op: "gte", value: "1.5" }],
    // created: [{ op: "gte", value: "1.5" }],
    // sort: {},
  };
};
