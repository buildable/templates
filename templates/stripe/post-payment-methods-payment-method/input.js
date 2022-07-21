const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    payment_method: "string", // Required

    // billing_details: {
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
    // card: { exp_month: 0, exp_year: 0 },
    // expand: ["string"],
    // link: {},
    // metadata: { property1: "string", property2: "string" },
    // us_bank_account: { account_holder_type: "company" },
  };
};
