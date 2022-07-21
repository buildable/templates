const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    line_items: [
      {
        adjustable_quantity: { enabled: true, maximum: 0, minimum: 0 },
        price: "string",
        quantity: 0,
      },
    ], // Required

    // after_completion: {
    //     hosted_confirmation: { custom_message: "string" },
    //     redirect: { url: "string" },
    //     type: "hosted_confirmation"
    //   },
    // allow_promotion_codes: true,
    // application_fee_amount: 0,
    // application_fee_percent: 0,
    // automatic_tax: { enabled: true },
    // billing_address_collection: "auto",
    // consent_collection: { promotions: "auto" },
    // currency: "string",
    // customer_creation: "always",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // on_behalf_of: "string",
    // payment_intent_data: { capture_method: "automatic", setup_future_usage: "off_session" },
    // payment_method_types: ["affirm"],
    // phone_number_collection: { enabled: true },
    // shipping_address_collection: { allowed_countries: ["AC"] },
    // shipping_options: [{ shipping_rate: "string" }],
    // submit_type: "auto",
    // subscription_data: { trial_period_days: 0 },
    // tax_id_collection: { enabled: true },
    // transfer_data: { amount: 0, destination: "string" },
  };
};
