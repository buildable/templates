const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // cardholder: "string",
    // created: { gt: 0, gte: 0, lt: 0, lte: 0 },
    // ending_before: "string",
    // exp_month: 0,
    // exp_year: 0,
    // expand: ["string"],
    // last4: "string",
    // limit: 0,
    // starting_after: "string",
    // status: "active",
    // type: "physical",
  };
};
