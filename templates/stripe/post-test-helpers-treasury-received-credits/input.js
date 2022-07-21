const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    amount: 0, // Required
    currency: "string", // Required
    financial_account: "string", // Required
    network: "ach", // Required

    // description: "string",
    // expand: ["string"],
    // initiating_payment_method_details: {
    //     type: "us_bank_account",
    //     us_bank_account: {
    //       account_holder_name: "string",
    //       account_number: "string",
    //       routing_number: "string"
    //     }
    //   },
  };
};
