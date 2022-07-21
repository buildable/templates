const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    amount: 0, // Required
    currency: "string", // Required
    financial_account: "string", // Required

    // customer: "string",
    // description: "string",
    // destination_payment_method: "string",
    // destination_payment_method_data: {
    //     billing_details: {
    //       address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       email: "string",
    //       name: "string",
    //       phone: "string"
    //     },
    //     financial_account: "string",
    //     metadata: { property1: "string", property2: "string" },
    //     type: "financial_account",
    //     us_bank_account: {
    //       account_holder_type: "company",
    //       account_number: "string",
    //       account_type: "checking",
    //       financial_connections_account: "string",
    //       routing_number: "string"
    //     }
    //   },
    // destination_payment_method_options: { us_bank_account: { network: "ach" } },
    // end_user_details: { ip_address: "string", present: true },
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // statement_descriptor: "string",
  };
};
