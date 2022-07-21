const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    enabled_events: ["*"], // Required
    url: "string", // Required

    // api_version: "2011-01-01",
    // connect: true,
    // description: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
  };
};
