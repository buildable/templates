const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    id: "string", // Required

    // active: true,
    // default_price: "string",
    // description: "string",
    // expand: ["string"],
    // images: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // name: "string",
    // package_dimensions: { height: 0, length: 0, weight: 0, width: 0 },
    // shippable: true,
    // statement_descriptor: "string",
    // tax_code: "string",
    // unit_label: "string",
    // url: "string",
  };
};
