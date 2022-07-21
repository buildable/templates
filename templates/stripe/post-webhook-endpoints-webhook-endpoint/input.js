const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    webhook_endpoint: "string", // Required

    // description: "string",
    // disabled: true,
    // enabled_events: ["*"],
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // url: "string",
  };
};
