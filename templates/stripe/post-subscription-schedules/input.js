const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // customer: "string",
    // default_settings: {
    //     application_fee_percent: 0,
    //     automatic_tax: { enabled: true },
    //     billing_cycle_anchor: "automatic",
    //     billing_thresholds: { amount_gte: 0, reset_billing_cycle_anchor: true },
    //     collection_method: "charge_automatically",
    //     default_payment_method: "string",
    //     invoice_settings: { days_until_due: 0 },
    //     transfer_data: { amount_percent: 0, destination: "string" }
    //   },
    // end_behavior: "cancel",
    // expand: ["string"],
    // from_subscription: "string",
    // metadata: { property1: "string", property2: "string" },
    // phases: [
    //     {
    //       add_invoice_items: [
    //         {
    //           price: "string",
    //           price_data: {
    //             currency: "string",
    //             product: "string",
    //             tax_behavior: "exclusive",
    //             unit_amount: 0,
    //             unit_amount_decimal: "string"
    //           },
    //           quantity: 0,
    //           tax_rates: ["string"]
    //         }
    //       ],
    //       application_fee_percent: 0,
    //       automatic_tax: { enabled: true },
    //       billing_cycle_anchor: "automatic",
    //       billing_thresholds: { amount_gte: 0, reset_billing_cycle_anchor: true },
    //       collection_method: "charge_automatically",
    //       coupon: "string",
    //       currency: "string",
    //       default_payment_method: "string",
    //       default_tax_rates: ["string"],
    //       end_date: 0,
    //       invoice_settings: { days_until_due: 0 },
    //       items: [
    //         {
    //           billing_thresholds: { usage_gte: 0 },
    //           price: "string",
    //           price_data: {
    //             currency: "string",
    //             product: "string",
    //             recurring: { interval: "day", interval_count: 0 },
    //             tax_behavior: "exclusive",
    //             unit_amount: 0,
    //             unit_amount_decimal: "string"
    //           },
    //           quantity: 0,
    //           tax_rates: ["string"]
    //         }
    //       ],
    //       iterations: 0,
    //       metadata: { property1: "string", property2: "string" },
    //       proration_behavior: "always_invoice",
    //       transfer_data: { amount_percent: 0, destination: "string" },
    //       trial: true,
    //       trial_end: 0
    //     }
    //   ],
    // start_date: 0,
  };
};
