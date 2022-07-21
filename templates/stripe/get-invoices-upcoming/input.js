const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // automatic_tax: { enabled: true },
    // coupon: "string",
    // currency: "string",
    // customer: "string",
    // customer_details: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     shipping: {
    //       address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       name: "string",
    //       phone: "string"
    //     },
    //     tax: { ip_address: "string" },
    //     tax_exempt: "",
    //     tax_ids: [{ type: "ae_trn", value: "string" }]
    //   },
    // discounts: [{ coupon: "string", discount: "string" }],
    // expand: ["string"],
    // invoice_items: [
    //     {
    //       amount: 0,
    //       currency: "string",
    //       description: "string",
    //       discountable: true,
    //       discounts: [{ coupon: "string", discount: "string" }],
    //       invoiceitem: "string",
    //       metadata: { property1: "string", property2: "string" },
    //       period: { end: 0, start: 0 },
    //       price: "string",
    //       price_data: {
    //         currency: "string",
    //         product: "string",
    //         tax_behavior: "exclusive",
    //         unit_amount: 0,
    //         unit_amount_decimal: "string"
    //       },
    //       quantity: 0,
    //       tax_rates: ["string"],
    //       unit_amount: 0,
    //       unit_amount_decimal: "string"
    //     }
    //   ],
    // schedule: "string",
    // subscription: "string",
    // subscription_billing_cycle_anchor: "now",
    // subscription_cancel_at: 0,
    // subscription_cancel_at_period_end: true,
    // subscription_cancel_now: true,
    // subscription_default_tax_rates: ["string"],
    // subscription_items: [
    //     {
    //       billing_thresholds: { usage_gte: 0 },
    //       clear_usage: true,
    //       deleted: true,
    //       id: "string",
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
    // subscription_proration_behavior: "always_invoice",
    // subscription_proration_date: 0,
    // subscription_start_date: 0,
    // subscription_trial_end: "now",
    // subscription_trial_from_plan: true,
  };
};
