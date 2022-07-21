const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    id: "string", // Required

    // active: true,
    // attributes: { property1: "string", property2: "string" },
    // currency: "string",
    // expand: ["string"],
    // image: "string",
    // inventory: { quantity: 0, type: "bucket", value: "" },
    // metadata: { property1: "string", property2: "string" },
    // package_dimensions: { height: 0, length: 0, weight: 0, width: 0 },
    // price: 0,
    // product: "string",
  };
};
