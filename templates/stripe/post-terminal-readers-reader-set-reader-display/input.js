const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    reader: "string", // Required
    type: "cart", // Required

    // cart: {
    //     currency: "string",
    //     line_items: [{ amount: 0, description: "string", quantity: 0 }],
    //     tax: 0,
    //     total: 0
    //   },
    // expand: ["string"],
  };
};
