const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    card: "string", // Required

    // cancellation_reason: "lost",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // pin: { encrypted_number: "string" },
    // spending_controls: {
    //     allowed_categories: ["ac_refrigeration_repair"],
    //     blocked_categories: ["ac_refrigeration_repair"],
    //     spending_limits: [{ amount: 0, categories: ["ac_refrigeration_repair"], interval: "all_time" }]
    //   },
    // status: "active",
  };
};
