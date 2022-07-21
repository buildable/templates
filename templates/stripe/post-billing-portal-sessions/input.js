const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required

    // configuration: "string",
    // expand: ["string"],
    // locale: "auto",
    // on_behalf_of: "string",
    // return_url: "string",
  };
};
