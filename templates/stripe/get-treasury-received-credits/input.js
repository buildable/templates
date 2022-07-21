const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    financial_account: "string", // Required

    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // linked_flows: { source_flow_type: "credit_reversal" },
    // starting_after: "string",
    // status: "failed",
  };
};
