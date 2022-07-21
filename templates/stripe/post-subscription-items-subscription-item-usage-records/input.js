const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    subscription_item: "string", // Required
    quantity: 0, // Required

    // action: "increment",
    // expand: ["string"],
    // timestamp: "now",
  };
};
