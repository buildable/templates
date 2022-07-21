const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    promotion_code: "string", // Required

    // active: true,
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // restrictions: {
    //     currency_options: { property1: { minimum_amount: 0 }, property2: { minimum_amount: 0 } }
    //   },
  };
};
