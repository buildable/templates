const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    amount: 0, // Required
    currency: "string", // Required
    financial_account: "string", // Required
    origin_payment_method: "string", // Required

    // description: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // statement_descriptor: "string",
  };
};
