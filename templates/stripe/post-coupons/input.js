const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // amount_off: 0,
    // applies_to: { products: ["string"] },
    // currency: "string",
    // currency_options: { property1: { amount_off: 0 }, property2: { amount_off: 0 } },
    // duration: "forever",
    // duration_in_months: 0,
    // expand: ["string"],
    // id: "string",
    // max_redemptions: 0,
    // metadata: { property1: "string", property2: "string" },
    // name: "string",
    // percent_off: 0,
    // redeem_by: 0,
  };
};
