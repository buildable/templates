const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // email: "string",
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // phone_number: "string",
    // starting_after: "string",
    // status: "active",
    // type: "company",
  };
};
