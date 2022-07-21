const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // collection_method: "charge_automatically",
    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // customer: "string",
    // due_date: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // starting_after: "string",
    // status: "draft",
    // subscription: "string",
  };
};
