const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    configuration: "string", // Required

    // active: true,
    // business_profile: {
    //     headline: "string",
    //     privacy_policy_url: "string",
    //     terms_of_service_url: "string"
    //   },
    // default_return_url: "string",
    // expand: ["string"],
    // features: {
    //     customer_update: { allowed_updates: ["address"], enabled: true },
    //     invoice_history: { enabled: true },
    //     payment_method_update: { enabled: true },
    //     subscription_cancel: {
    //       cancellation_reason: { enabled: true, options: ["customer_service"] },
    //       enabled: true,
    //       mode: "at_period_end",
    //       proration_behavior: "always_invoice"
    //     },
    //     subscription_pause: { enabled: true },
    //     subscription_update: {
    //       default_allowed_updates: ["price"],
    //       enabled: true,
    //       products: [{ prices: ["string"], product: "string" }],
    //       proration_behavior: "always_invoice"
    //     }
    //   },
    // metadata: { property1: "string", property2: "string" },
  };
};
