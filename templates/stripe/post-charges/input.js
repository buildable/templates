const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // amount: 0,
    // application_fee: 0,
    // application_fee_amount: 0,
    // capture: true,
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
    // currency: "string",
    // customer: "string",
    // description: "string",
    // destination: { account: "string", amount: 0 },
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // on_behalf_of: "string",
    // radar_options: { session: "string" },
    // receipt_email: "string",
    // shipping: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     carrier: "string",
    //     name: "string",
    //     phone: "string",
    //     tracking_number: "string"
    //   },
    // source: "string",
    // statement_descriptor: "string",
    // statement_descriptor_suffix: "string",
    // transfer_data: { amount: 0, destination: "string" },
    // transfer_group: "string",
  };
};
