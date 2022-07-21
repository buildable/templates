const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "5e6645712b55823de7ea82f1", // Required

    // transaction: [
    //     {
    //       recipientAccountId: "5e6645712b55823de7ea82f2",
    //       amount: "5",
    //       anonymous: false,
    //       compliant: false,
    //       transactionCode: "1_01_EXTERNAL_CODE",
    //       paymentId: "9625",
    //       recipientNote: "Private note",
    //       baseRate: 1,
    //       senderNote: "Sender note"
    //     }
    //   ],
  };
};
