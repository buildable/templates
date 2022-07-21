const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // charge: "string",
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // payment_intent: "string",
    // starting_after: "string",
  };
};
