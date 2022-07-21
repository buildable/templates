const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    currency: "string", // Required
    interval: "day", // Required

    // active: true,
    // aggregate_usage: "last_during_period",
    // amount: 0,
    // amount_decimal: "string",
    // billing_scheme: "per_unit",
    // expand: ["string"],
    // id: "string",
    // interval_count: 0,
    // metadata: { property1: "string", property2: "string" },
    // nickname: "string",
    // product: {
    //     active: true,
    //     id: "string",
    //     metadata: { property1: "string", property2: "string" },
    //     name: "string",
    //     statement_descriptor: "string",
    //     tax_code: "string",
    //     unit_label: "string"
    //   },
    // tiers: [
    //     {
    //       flat_amount: 0,
    //       flat_amount_decimal: "string",
    //       unit_amount: 0,
    //       unit_amount_decimal: "string",
    //       up_to: "inf"
    //     }
    //   ],
    // tiers_mode: "graduated",
    // transform_usage: { divide_by: 0, round: "down" },
    // trial_period_days: 0,
    // usage_type: "licensed",
  };
};
