const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    currency: "string", // Required
    type: "physical", // Required

    // cardholder: "string",
    // expand: ["string"],
    // financial_account: "string",
    // metadata: { property1: "string", property2: "string" },
    // replacement_for: "string",
    // replacement_reason: "damaged",
    // shipping: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     name: "string",
    //     service: "express",
    //     type: "bulk"
    //   },
    // spending_controls: {
    //     allowed_categories: ["ac_refrigeration_repair"],
    //     blocked_categories: ["ac_refrigeration_repair"],
    //     spending_limits: [{ amount: 0, categories: ["ac_refrigeration_repair"], interval: "all_time" }]
    //   },
    // status: "active",
  };
};
