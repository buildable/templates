const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    cardholder: "string", // Required

    // billing: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     }
    //   },
    // company: { tax_id: "string" },
    // email: "string",
    // expand: ["string"],
    // individual: {
    //     dob: { day: 0, month: 0, year: 0 },
    //     first_name: "string",
    //     last_name: "string",
    //     verification: { document: { back: "string", front: "string" } }
    //   },
    // metadata: { property1: "string", property2: "string" },
    // phone_number: "string",
    // spending_controls: {
    //     allowed_categories: ["ac_refrigeration_repair"],
    //     blocked_categories: ["ac_refrigeration_repair"],
    //     spending_limits: [{ amount: 0, categories: ["ac_refrigeration_repair"], interval: "all_time" }],
    //     spending_limits_currency: "string"
    //   },
    // status: "active",
  };
};
