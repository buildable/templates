const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // canceled_at: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // completed_at: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // customer: "string",
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // released_at: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // scheduled: true,
    // starting_after: "string",
  };
};
