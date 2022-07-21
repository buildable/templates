const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    reader: "string", // Required
    payment_intent: "string", // Required

    // expand: ["string"],
    // process_config: { skip_tipping: true },
  };
};
