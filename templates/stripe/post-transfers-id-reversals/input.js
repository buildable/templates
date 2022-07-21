const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    id: "string", // Required

    // amount: 0,
    // description: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // refund_application_fee: true,
  };
};
