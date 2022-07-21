const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    plan: "string", // Required

    // active: true,
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // nickname: "string",
    // product: "string",
    // trial_period_days: 0,
  };
};
