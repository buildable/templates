const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    amount: 0, // Required
    currency: "string", // Required

    // description: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // source: "string",
    // statement_descriptor: "string",
    // transfer_group: "string",
  };
};
