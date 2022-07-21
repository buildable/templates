const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    location: "string", // Required

    // address: {
    //     city: "string",
    //     country: "string",
    //     line1: "string",
    //     line2: "string",
    //     postal_code: "string",
    //     state: "string"
    //   },
    // configuration_overrides: "string",
    // display_name: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
  };
};
