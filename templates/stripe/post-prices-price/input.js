const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    price: "string", // Required

    // active: true,
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
    // expand: ["string"],
    // lookup_key: "string",
    // metadata: { property1: "string", property2: "string" },
    // nickname: "string",
    // tax_behavior: "exclusive",
    // transfer_lookup_key: true,
  };
};
