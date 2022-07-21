const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    source: "string", // Required

    // amount: 0,
    // expand: ["string"],
    // mandate: {
    //     acceptance: {
    //       date: 0,
    //       ip: "string",
    //       offline: { contact_email: "string" },
    //       online: { date: 0, ip: "string", user_agent: "string" },
    //       status: "accepted",
    //       type: "offline",
    //       user_agent: "string"
    //     },
    //     amount: 0,
    //     currency: "string",
    //     interval: "one_time",
    //     notification_method: "deprecated_none"
    //   },
    // metadata: { property1: "string", property2: "string" },
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
    // source_order: {
    //     items: [
    //       {
    //         amount: 0,
    //         currency: "string",
    //         description: "string",
    //         parent: "string",
    //         quantity: 0,
    //         type: "discount"
    //       }
    //     ],
    //     shipping: {
    //       address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       carrier: "string",
    //       name: "string",
    //       phone: "string",
    //       tracking_number: "string"
    //     }
    //   },
  };
};
