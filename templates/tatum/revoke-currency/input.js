const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    accountId: "5e68c66581f2ee32bc354087", // Required
    amount: "1.5", // Required

    // paymentId: "My Payment",
    // reference: "akjsndakjsdn-asd-kjasnd-asdkn-asdjnasjkdn",
    // transactionCode: "1_01_EXTERNAL_CODE",
    // recipientNote: "Private note",
    // counterAccount: "5e6645712b55823de7ea82f1",
    // senderNote: "Sender note",
  };
};
