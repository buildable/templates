const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    invoiceitem: "string", // Required

    // amount: 0,
    // description: "string",
    // discountable: true,
    // discounts: [{ coupon: "string", discount: "string" }],
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // period: { end: 0, start: 0 },
    // price: "string",
    // price_data: {
    //     currency: "string",
    //     product: "string",
    //     tax_behavior: "exclusive",
    //     unit_amount: 0,
    //     unit_amount_decimal: "string"
    //   },
    // quantity: 0,
    // tax_rates: ["string"],
    // unit_amount: 0,
    // unit_amount_decimal: "string",
  };
};
