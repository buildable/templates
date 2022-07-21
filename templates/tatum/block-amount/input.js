const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    id: "5e6be89ee6aa436299950c3f", // Required
    amount: "5", // Required
    type: "DEBIT_CARD_OP", // Required

    // description: "Card payment in the shop.",
  };
};
