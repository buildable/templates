const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // evidence: {
    //     canceled: {
    //       additional_documentation: "string",
    //       canceled_at: 0,
    //       cancellation_policy_provided: true,
    //       cancellation_reason: "string",
    //       expected_at: 0,
    //       explanation: "string",
    //       product_description: "string",
    //       product_type: "",
    //       return_status: "",
    //       returned_at: 0
    //     },
    //     duplicate: {
    //       additional_documentation: "string",
    //       card_statement: "string",
    //       cash_receipt: "string",
    //       check_image: "string",
    //       explanation: "string",
    //       original_transaction: "string"
    //     },
    //     fraudulent: { additional_documentation: "string", explanation: "string" },
    //     merchandise_not_as_described: {
    //       additional_documentation: "string",
    //       explanation: "string",
    //       received_at: 0,
    //       return_description: "string",
    //       return_status: "",
    //       returned_at: 0
    //     },
    //     not_received: {
    //       additional_documentation: "string",
    //       expected_at: 0,
    //       explanation: "string",
    //       product_description: "string",
    //       product_type: ""
    //     },
    //     other: {
    //       additional_documentation: "string",
    //       explanation: "string",
    //       product_description: "string",
    //       product_type: ""
    //     },
    //     reason: "canceled",
    //     service_not_as_described: {
    //       additional_documentation: "string",
    //       canceled_at: 0,
    //       cancellation_reason: "string",
    //       explanation: "string",
    //       received_at: 0
    //     }
    //   },
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // transaction: "string",
    // treasury: { received_debit: "string" },
  };
};
