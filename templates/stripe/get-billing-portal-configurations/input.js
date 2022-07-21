const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // active: true,
    // ending_before: "string",
    // expand: ["string"],
    // is_default: true,
    // limit: 0,
    // starting_after: "string",
  };
};
