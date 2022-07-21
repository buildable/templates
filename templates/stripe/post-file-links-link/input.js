const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    link: "string", // Required

    // expand: ["string"],
    // expires_at: "now",
    // metadata: { property1: "string", property2: "string" },
  };
};
