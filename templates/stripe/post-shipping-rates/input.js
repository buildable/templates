const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    display_name: "string", // Required

    // delivery_estimate: {
    //     maximum: { unit: "business_day", value: 0 },
    //     minimum: { unit: "business_day", value: 0 }
    //   },
    // expand: ["string"],
    // fixed_amount: {
    //     amount: 0,
    //     currency: "string",
    //     currency_options: {
    //       property1: { amount: 0, tax_behavior: "exclusive" },
    //       property2: { amount: 0, tax_behavior: "exclusive" }
    //     }
    //   },
    // metadata: { property1: "string", property2: "string" },
    // tax_behavior: "exclusive",
    // tax_code: "string",
    // type: "fixed_amount",
  };
};
