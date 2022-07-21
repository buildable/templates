const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    id: "string", // Required

    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // starting_after: "string",
  };
};
