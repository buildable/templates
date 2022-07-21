const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    financial_account: "string", // Required

    // card_issuing: { requested: true },
    // deposit_insurance: { requested: true },
    // expand: ["string"],
    // financial_addresses: { aba: { requested: true } },
    // inbound_transfers: { ach: { requested: true } },
    // intra_stripe_flows: { requested: true },
    // outbound_payments: { ach: { requested: true }, us_domestic_wire: { requested: true } },
    // outbound_transfers: { ach: { requested: true }, us_domestic_wire: { requested: true } },
  };
};
