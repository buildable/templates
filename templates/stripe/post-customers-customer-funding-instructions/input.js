const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required
    bank_transfer: {
      eu_bank_transfer: { country: "string" },
      requested_address_types: ["iban"],
      type: "eu_bank_transfer",
    }, // Required
    currency: "string", // Required
    funding_type: "bank_transfer", // Required

    // expand: ["string"],
  };
};
