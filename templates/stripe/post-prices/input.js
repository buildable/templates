const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    currency: "string", // Required

    // active: true,
    // billing_scheme: "per_unit",
    // currency_options: {
    //     property1: {
    //       custom_unit_amount: { enabled: true, maximum: 0, minimum: 0, preset: 0 },
    //       tax_behavior: "exclusive",
    //       tiers: [
    //         {
    //           flat_amount: 0,
    //           flat_amount_decimal: "string",
    //           unit_amount: 0,
    //           unit_amount_decimal: "string",
    //           up_to: "inf"
    //         }
    //       ],
    //       unit_amount: 0,
    //       unit_amount_decimal: "string"
    //     },
    //     property2: {
    //       custom_unit_amount: { enabled: true, maximum: 0, minimum: 0, preset: 0 },
    //       tax_behavior: "exclusive",
    //       tiers: [
    //         {
    //           flat_amount: 0,
    //           flat_amount_decimal: "string",
    //           unit_amount: 0,
    //           unit_amount_decimal: "string",
    //           up_to: "inf"
    //         }
    //       ],
    //       unit_amount: 0,
    //       unit_amount_decimal: "string"
    //     }
    //   },
    // custom_unit_amount: { enabled: true, maximum: 0, minimum: 0, preset: 0 },
    // expand: ["string"],
    // lookup_key: "string",
    // metadata: { property1: "string", property2: "string" },
    // nickname: "string",
    // product: "string",
    // product_data: {
    //     active: true,
    //     id: "string",
    //     metadata: { property1: "string", property2: "string" },
    //     name: "string",
    //     statement_descriptor: "string",
    //     tax_code: "string",
    //     unit_label: "string"
    //   },
    // recurring: {
    //     aggregate_usage: "last_during_period",
    //     interval: "day",
    //     interval_count: 0,
    //     usage_type: "licensed"
    //   },
    // tax_behavior: "exclusive",
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
    // transfer_lookup_key: true,
    // transform_quantity: { divide_by: 0, round: "down" },
    // unit_amount: 0,
    // unit_amount_decimal: "string",
  };
};
