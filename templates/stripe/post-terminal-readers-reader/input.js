const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    reader: "string", // Required

    // expand: ["string"],
    // label: "string",
    // metadata: { property1: "string", property2: "string" },
  };
};
