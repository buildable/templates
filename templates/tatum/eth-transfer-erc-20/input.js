const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "5e68c66581f2ee32bc354087", // Required
    address: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    amount: "100000", // Required
    privateKey: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required

    // compliant: false,
    // currency: "MY_SYMBOL",
    // gasLimit: "40000",
    // gasPrice: "20",
    // nonce: 0,
    // paymentId: "1234",
    // senderNote: "Sender note",
  };
};
