const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    invoice: "string", // Required

    // expand: ["string"],
    // forgive: true,
    // off_session: true,
    // paid_out_of_band: true,
    // payment_method: "string",
    // source: "string",
  };
};
