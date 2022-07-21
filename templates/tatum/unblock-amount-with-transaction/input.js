const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    id: "5e6be89ee6aa436299950c3f", // Required
    recipientAccountId: "5e6645712b55823de7ea82f2", // Required
    amount: "5", // Required

    // anonymous: false,
    // compliant: false,
    // transactionCode: "1_01_EXTERNAL_CODE",
    // paymentId: "9625",
    // recipientNote: "Private note",
    // baseRate: 1,
    // senderNote: "Sender note",
  };
};
