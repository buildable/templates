const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    reader: "string", // Required

    // card_present: { number: "string" },
    // expand: ["string"],
    // type: "card_present",
  };
};
