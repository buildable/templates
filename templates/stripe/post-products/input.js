const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    name: "string", // Required

    // active: true,
    // default_price_data: {
    //     currency: "string",
    //     currency_options: {
    //       property1: {
    //         custom_unit_amount: { enabled: true, maximum: 0, minimum: 0, preset: 0 },
    //         tax_behavior: "exclusive",
    //         tiers: [
    //           {
    //             flat_amount: 0,
    //             flat_amount_decimal: "string",
    //             unit_amount: 0,
    //             unit_amount_decimal: "string",
    //             up_to: "inf"
    //           }
    //         ],
    //         unit_amount: 0,
    //         unit_amount_decimal: "string"
    //       },
    //       property2: {
    //         custom_unit_amount: { enabled: true, maximum: 0, minimum: 0, preset: 0 },
    //         tax_behavior: "exclusive",
    //         tiers: [
    //           {
    //             flat_amount: 0,
    //             flat_amount_decimal: "string",
    //             unit_amount: 0,
    //             unit_amount_decimal: "string",
    //             up_to: "inf"
    //           }
    //         ],
    //         unit_amount: 0,
    //         unit_amount_decimal: "string"
    //       }
    //     },
    //     recurring: { interval: "day", interval_count: 0 },
    //     tax_behavior: "exclusive",
    //     unit_amount: 0,
    //     unit_amount_decimal: "string"
    //   },
    // description: "string",
    // expand: ["string"],
    // id: "string",
    // images: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // package_dimensions: { height: 0, length: 0, weight: 0, width: 0 },
    // shippable: true,
    // statement_descriptor: "string",
    // tax_code: "string",
    // unit_label: "string",
    // url: "string",
  };
};
