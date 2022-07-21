const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    intent: "string", // Required

    // amount: 0,
    // currency: "string",
    // expand: ["string"],
  };
};
