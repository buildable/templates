const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // attach_to_self: true,
    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // customer: "string",
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // payment_method: "string",
    // starting_after: "string",
  };
};
