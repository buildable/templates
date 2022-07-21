const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // address: {
    //     city: "string",
    //     country: "string",
    //     line1: "string",
    //     line2: "string",
    //     postal_code: "string",
    //     state: "string"
    //   },
    // balance: 0,
    // cash_balance: { settings: { reconciliation_mode: "automatic" } },
    // coupon: "string",
    // description: "string",
    // email: "string",
    // expand: ["string"],
    // invoice_prefix: "string",
    // invoice_settings: {
    //     custom_fields: [{ name: "string", value: "string" }],
    //     default_payment_method: "string",
    //     footer: "string",
    //     rendering_options: { amount_tax_display: "" }
    //   },
    // metadata: { property1: "string", property2: "string" },
    // name: "string",
    // next_invoice_sequence: 0,
    // payment_method: "string",
    // phone: "string",
    // preferred_locales: ["string"],
    // promotion_code: "string",
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
    //     phone: "string"
    //   },
    // source: "string",
    // tax: { ip_address: "string" },
    // tax_exempt: "",
    // tax_id_data: [{ type: "ae_trn", value: "string" }],
    // test_clock: "string",
  };
};
