const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    report_type: "string", // Required

    // expand: ["string"],
    // parameters: {
    //     columns: ["string"],
    //     connected_account: "string",
    //     currency: "string",
    //     interval_end: 0,
    //     interval_start: 0,
    //     payout: "string",
    //     reporting_category: "advance",
    //     timezone: "Africa/Abidjan"
    //   },
  };
};
