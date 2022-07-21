const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    currency: "string", // Required
    destination: "string", // Required

    // amount: 0,
    // description: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // source_transaction: "string",
    // source_type: "bank_account",
    // transfer_group: "string",
  };
};
