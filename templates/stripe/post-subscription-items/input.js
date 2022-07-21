const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    subscription: "string", // Required

    // billing_thresholds: { usage_gte: 0 },
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // payment_behavior: "allow_incomplete",
    // price: "string",
    // price_data: {
    //     currency: "string",
    //     product: "string",
    //     recurring: { interval: "day", interval_count: 0 },
    //     tax_behavior: "exclusive",
    //     unit_amount: 0,
    //     unit_amount_decimal: "string"
    //   },
    // proration_behavior: "always_invoice",
    // proration_date: 0,
    // quantity: 0,
    // tax_rates: ["string"],
  };
};
