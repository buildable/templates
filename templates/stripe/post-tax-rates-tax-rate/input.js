const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    tax_rate: "string", // Required

    // active: true,
    // country: "string",
    // description: "string",
    // display_name: "string",
    // expand: ["string"],
    // jurisdiction: "string",
    // metadata: { property1: "string", property2: "string" },
    // state: "string",
    // tax_type: "gst",
  };
};
