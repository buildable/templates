const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required

    // add_invoice_items: [
    //     {
    //       price: "string",
    //       price_data: {
    //         currency: "string",
    //         product: "string",
    //         tax_behavior: "exclusive",
    //         unit_amount: 0,
    //         unit_amount_decimal: "string"
    //       },
    //       quantity: 0,
    //       tax_rates: ["string"]
    //     }
    //   ],
    // application_fee_percent: 0,
    // automatic_tax: { enabled: true },
    // backdate_start_date: 0,
    // billing_cycle_anchor: 0,
    // billing_thresholds: { amount_gte: 0, reset_billing_cycle_anchor: true },
    // cancel_at: 0,
    // cancel_at_period_end: true,
    // collection_method: "charge_automatically",
    // coupon: "string",
    // currency: "string",
    // days_until_due: 0,
    // default_payment_method: "string",
    // default_source: "string",
    // default_tax_rates: ["string"],
    // expand: ["string"],
    // items: [
    //     {
    //       billing_thresholds: { usage_gte: 0 },
    //       metadata: { property1: "string", property2: "string" },
    //       price: "string",
    //       price_data: {
    //         currency: "string",
    //         product: "string",
    //         recurring: { interval: "day", interval_count: 0 },
    //         tax_behavior: "exclusive",
    //         unit_amount: 0,
    //         unit_amount_decimal: "string"
    //       },
    //       quantity: 0,
    //       tax_rates: ["string"]
    //     }
    //   ],
    // metadata: { property1: "string", property2: "string" },
    // off_session: true,
    // payment_behavior: "allow_incomplete",
    // payment_settings: {
    //     payment_method_options: {
    //       acss_debit: {
    //         mandate_options: { transaction_type: "business" },
    //         verification_method: "automatic"
    //       },
    //       bancontact: { preferred_language: "de" },
    //       card: {
    //         mandate_options: { amount: 0, amount_type: "fixed", description: "string" },
    //         request_three_d_secure: "any"
    //       },
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
    //     payment_method_types: ["ach_credit_transfer"],
    //     save_default_payment_method: "off"
    //   },
    // pending_invoice_item_interval: { interval: "day", interval_count: 0 },
    // promotion_code: "string",
    // proration_behavior: "always_invoice",
    // transfer_data: { amount_percent: 0, destination: "string" },
    // trial_end: "now",
    // trial_from_plan: true,
    // trial_period_days: 0,
  };
};
