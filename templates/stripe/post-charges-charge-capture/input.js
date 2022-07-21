const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    charge: "string", // Required

    // amount: 0,
    // application_fee: 0,
    // application_fee_amount: 0,
    // expand: ["string"],
    // receipt_email: "string",
    // statement_descriptor: "string",
    // statement_descriptor_suffix: "string",
    // transfer_data: { amount: 0 },
    // transfer_group: "string",
  };
};
