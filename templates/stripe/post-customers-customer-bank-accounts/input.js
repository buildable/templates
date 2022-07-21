const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required

    // alipay_account: "string",
    // bank_account: {
    //     account_holder_name: "string",
    //     account_holder_type: "company",
    //     account_number: "string",
    //     country: "string",
    //     currency: "string",
    //     object: "bank_account",
    //     routing_number: "string"
    //   },
    // card: {
    //     address_city: "string",
    //     address_country: "string",
    //     address_line1: "string",
    //     address_line2: "string",
    //     address_state: "string",
    //     address_zip: "string",
    //     cvc: "string",
    //     exp_month: 0,
    //     exp_year: 0,
    //     metadata: { property1: "string", property2: "string" },
    //     name: "string",
    //     number: "string",
    //     object: "card"
    //   },
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // source: "string",
  };
};
