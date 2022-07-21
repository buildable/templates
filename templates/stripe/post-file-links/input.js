const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    file: "string", // Required

    // expand: ["string"],
    // expires_at: 0,
    // metadata: { property1: "string", property2: "string" },
  };
};
