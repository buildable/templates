const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // active: true,
    // attributes: { property1: "string", property2: "string" },
    // ending_before: "string",
    // expand: ["string"],
    // ids: ["string"],
    // in_stock: true,
    // limit: 0,
    // product: "string",
    // starting_after: "string",
  };
};
