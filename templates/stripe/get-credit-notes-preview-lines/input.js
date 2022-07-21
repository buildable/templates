const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    invoice: "string", // Required

    // amount: 0,
    // credit_amount: 0,
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // lines: [
    //     {
    //       amount: 0,
    //       description: "string",
    //       invoice_line_item: "string",
    //       quantity: 0,
    //       tax_rates: ["string"],
    //       type: "custom_line_item",
    //       unit_amount: 0,
    //       unit_amount_decimal: "string"
    //     }
    //   ],
    // memo: "string",
    // metadata: { property1: "string", property2: "string" },
    // out_of_band_amount: 0,
    // reason: "duplicate",
    // refund: "string",
    // refund_amount: 0,
    // starting_after: "string",
  };
};
