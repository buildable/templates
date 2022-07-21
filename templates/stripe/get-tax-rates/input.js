const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // active: true,
    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // ending_before: "string",
    // expand: ["string"],
    // inclusive: true,
    // limit: 0,
    // starting_after: "string",
  };
};
