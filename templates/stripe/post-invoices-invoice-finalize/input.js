const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    invoice: "string", // Required

    // auto_advance: true,
    // expand: ["string"],
  };
};
