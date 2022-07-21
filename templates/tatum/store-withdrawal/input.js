const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "5e68c66581f2ee32bc354087", // Required
    address: "mpTwPdF8up9kidgcAStriUPwRdnE9MRAg7", // Required
    amount: "0.001", // Required
    fee: "0.0005", // Required

    // attr: "12345",
    // compliant: false,
    // multipleAmounts: ["0.1"],
    // paymentId: "12345",
    // senderNote: "Sender note",
  };
};
