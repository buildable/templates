const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    account: "string", // Required
    id: "string", // Required

    // account_holder_name: "string",
    // account_holder_type: "",
    // account_type: "checking",
    // address_city: "string",
    // address_country: "string",
    // address_line1: "string",
    // address_line2: "string",
    // address_state: "string",
    // address_zip: "string",
    // default_for_currency: true,
    // exp_month: "string",
    // exp_year: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // name: "string",
  };
};
