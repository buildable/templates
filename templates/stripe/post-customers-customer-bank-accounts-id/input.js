const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required
    id: "string", // Required

    // account_holder_name: "string",
    // account_holder_type: "company",
    // address_city: "string",
    // address_country: "string",
    // address_line1: "string",
    // address_line2: "string",
    // address_state: "string",
    // address_zip: "string",
    // exp_month: "string",
    // exp_year: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // name: "string",
    // owner: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     email: "string",
    //     name: "string",
    //     phone: "string"
    //   },
  };
};
