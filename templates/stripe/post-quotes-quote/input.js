const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    quote: "string", // Required

    // application_fee_amount: 0,
    // application_fee_percent: 0,
    // automatic_tax: { enabled: true },
    // collection_method: "charge_automatically",
    // customer: "string",
    // default_tax_rates: ["string"],
    // description: "string",
    // discounts: [{ coupon: "string", discount: "string" }],
    // expand: ["string"],
    // expires_at: 0,
    // footer: "string",
    // header: "string",
    // invoice_settings: { days_until_due: 0 },
    // line_items: [
    //     {
    //       id: "string",
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
    // on_behalf_of: "string",
    // subscription_data: { effective_date: "current_period_end", trial_period_days: 0 },
    // transfer_data: { amount: 0, amount_percent: 0, destination: "string" },
  };
};
