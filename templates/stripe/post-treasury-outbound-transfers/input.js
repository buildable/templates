const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    amount: 0, // Required
    currency: "string", // Required
    destination_payment_method: "string", // Required
    financial_account: "string", // Required

    // description: "string",
    // destination_payment_method_options: { us_bank_account: { network: "ach" } },
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // statement_descriptor: "string",
  };
};
