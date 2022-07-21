const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    intent: "string", // Required

    // amounts: [0],
    // client_secret: "string",
    // descriptor_code: "string",
    // expand: ["string"],
  };
};
