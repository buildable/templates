const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    payment_link: "string", // Required

    // active: true,
    // after_completion: {
    //     hosted_confirmation: { custom_message: "string" },
    //     redirect: { url: "string" },
    //     type: "hosted_confirmation"
    //   },
    // allow_promotion_codes: true,
    // automatic_tax: { enabled: true },
    // billing_address_collection: "auto",
    // customer_creation: "always",
    // expand: ["string"],
    // line_items: [
    //     { adjustable_quantity: { enabled: true, maximum: 0, minimum: 0 }, id: "string", quantity: 0 }
    //   ],
    // metadata: { property1: "string", property2: "string" },
    // payment_method_types: ["affirm"],
    // shipping_address_collection: { allowed_countries: ["AC"] },
  };
};
