const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    intent: "string", // Required

    // amount_to_capture: 0,
    // application_fee_amount: 0,
    // expand: ["string"],
    // statement_descriptor: "string",
    // statement_descriptor_suffix: "string",
    // transfer_data: { amount: 0 },
  };
};
