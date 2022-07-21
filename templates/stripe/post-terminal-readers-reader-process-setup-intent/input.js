const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    reader: "string", // Required
    customer_consent_collected: true, // Required
    setup_intent: "string", // Required

    // expand: ["string"],
  };
};
