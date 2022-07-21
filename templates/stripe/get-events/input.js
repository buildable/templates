const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // delivery_success: true,
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // starting_after: "string",
    // type: "string",
    // types: ["string"],
  };
};
