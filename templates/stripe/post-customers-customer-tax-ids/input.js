const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required
    type: "ae_trn", // Required
    value: "string", // Required

    // expand: ["string"],
  };
};
