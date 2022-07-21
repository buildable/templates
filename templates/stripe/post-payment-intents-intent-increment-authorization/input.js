const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    intent: "string", // Required
    amount: 0, // Required

    // application_fee_amount: 0,
    // description: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // transfer_data: { amount: 0 },
  };
};
