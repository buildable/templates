const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    account: "string", // Required
    type: "account_onboarding", // Required

    // collect: "currently_due",
    // expand: ["string"],
    // refresh_url: "string",
    // return_url: "string",
  };
};
