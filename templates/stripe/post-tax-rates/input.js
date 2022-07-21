const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    display_name: "string", // Required
    inclusive: true, // Required
    percentage: 0, // Required

    // active: true,
    // country: "string",
    // description: "string",
    // expand: ["string"],
    // jurisdiction: "string",
    // metadata: { property1: "string", property2: "string" },
    // state: "string",
    // tax_type: "gst",
  };
};
