const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    id: "string", // Required

    // expand: ["string"],
    // memo: "string",
    // metadata: { property1: "string", property2: "string" },
  };
};
