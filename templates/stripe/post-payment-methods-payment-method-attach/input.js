const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    payment_method: "string", // Required
    customer: "string", // Required

    // expand: ["string"],
  };
};
