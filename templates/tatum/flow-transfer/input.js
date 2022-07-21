const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "61b3bffddfb389cde19c73be", // Required
    account: "0x955cd3f17b2fd8ad", // Required
    address: "0x955cd3f17b2fd8ae", // Required
    amount: "10000", // Required
    mnemonic: "urge pulp usage sister evidence arrest palm math please chief egg abuse", // Required
    index: 0, // Required

    // compliant: false,
    // paymentId: "1234",
    // senderNote: "Sender note",
  };
};
