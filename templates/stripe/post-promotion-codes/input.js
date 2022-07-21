const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    coupon: "string", // Required

    // active: true,
    // code: "string",
    // customer: "string",
    // expand: ["string"],
    // expires_at: 0,
    // max_redemptions: 0,
    // metadata: { property1: "string", property2: "string" },
    // restrictions: {
    //     currency_options: { property1: { minimum_amount: 0 }, property2: { minimum_amount: 0 } },
    //     first_time_transaction: true,
    //     minimum_amount: 0,
    //     minimum_amount_currency: "string"
    //   },
  };
};
