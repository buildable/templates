const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    shipping_rate_token: "string", // Required

    // active: true,
    // expand: ["string"],
    // fixed_amount: {
    //     currency_options: {
    //       property1: { amount: 0, tax_behavior: "exclusive" },
    //       property2: { amount: 0, tax_behavior: "exclusive" }
    //     }
    //   },
    // metadata: { property1: "string", property2: "string" },
    // tax_behavior: "exclusive",
  };
};
