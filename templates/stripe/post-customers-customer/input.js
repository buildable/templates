const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required

    // address: {
    //     city: "string",
    //     country: "string",
    //     line1: "string",
    //     line2: "string",
    //     postal_code: "string",
    //     state: "string"
    //   },
    // balance: 0,
    // bank_account: {
    //     account_holder_name: "string",
    //     account_holder_type: "company",
    //     account_number: "string",
    //     country: "string",
    //     currency: "string",
    //     object: "bank_account",
    //     routing_number: "string"
    //   },
    // card: {
    //     address_city: "string",
    //     address_country: "string",
    //     address_line1: "string",
    //     address_line2: "string",
    //     address_state: "string",
    //     address_zip: "string",
    //     cvc: "string",
    //     exp_month: 0,
    //     exp_year: 0,
    //     metadata: { property1: "string", property2: "string" },
    //     name: "string",
    //     number: "string",
    //     object: "card"
    //   },
    // cash_balance: { settings: { reconciliation_mode: "automatic" } },
    // coupon: "string",
    // default_alipay_account: "string",
    // default_bank_account: "string",
    // default_card: "string",
    // default_source: "string",
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
    // trial_end: "now",
  };
};
