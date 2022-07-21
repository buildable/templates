const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    account_holder: { account: "string", customer: "string", type: "account" }, // Required
    permissions: ["balances"], // Required

    // expand: ["string"],
    // filters: { countries: ["string"] },
    // return_url: "string",
  };
};
