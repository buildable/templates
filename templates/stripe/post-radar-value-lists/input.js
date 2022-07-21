const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    alias: "string", // Required
    name: "string", // Required

    // expand: ["string"],
    // item_type: "card_bin",
    // metadata: { property1: "string", property2: "string" },
  };
};
