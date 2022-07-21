const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // account_tax_ids: ["string"],
    // application_fee_amount: 0,
    // auto_advance: true,
    // automatic_tax: { enabled: true },
    // collection_method: "charge_automatically",
    // custom_fields: [{ name: "string", value: "string" }],
    // customer: "string",
    // days_until_due: 0,
    // default_payment_method: "string",
    // default_source: "string",
    // default_tax_rates: ["string"],
    // description: "string",
    // discounts: [{ coupon: "string", discount: "string" }],
    // due_date: 0,
    // expand: ["string"],
    // footer: "string",
    // metadata: { property1: "string", property2: "string" },
    // on_behalf_of: "string",
    // payment_settings: {
    //     payment_method_options: {
    //       acss_debit: {
    //         mandate_options: { transaction_type: "business" },
    //         verification_method: "automatic"
    //       },
    //       bancontact: { preferred_language: "de" },
    //       card: { request_three_d_secure: "any" },
    //       customer_balance: {
    //         bank_transfer: { eu_bank_transfer: { country: "string" }, type: "string" },
    //         funding_type: "string"
    //       },
    //       konbini: {},
    //       us_bank_account: {
    //         financial_connections: { permissions: ["balances"] },
    //         verification_method: "automatic"
    //       }
    //     },
    //     payment_method_types: ["ach_credit_transfer"]
    //   },
    // pending_invoice_items_behavior: "exclude",
    // rendering_options: { amount_tax_display: "" },
    // statement_descriptor: "string",
    // subscription: "string",
    // transfer_data: { amount: 0, destination: "string" },
  };
};
