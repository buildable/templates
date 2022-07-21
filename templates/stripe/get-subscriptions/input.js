const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // collection_method: "charge_automatically",
    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // current_period_end: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // current_period_start: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // customer: "string",
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // price: "string",
    // starting_after: "string",
    // status: "active",
    // test_clock: "string",
  };
};
