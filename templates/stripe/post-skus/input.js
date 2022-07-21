const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    currency: "string", // Required
    inventory: { quantity: 0, type: "bucket", value: "" }, // Required
    price: 0, // Required
    product: "string", // Required

    // active: true,
    // attributes: { property1: "string", property2: "string" },
    // expand: ["string"],
    // id: "string",
    // image: "string",
    // metadata: { property1: "string", property2: "string" },
    // package_dimensions: { height: 0, length: 0, weight: 0, width: 0 },
  };
};
