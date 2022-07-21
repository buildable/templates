const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    amount: "100000", // Required
    privateKey: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    senderAccountId: "5e68c66581f2ee32bc354087", // Required

    // nonce: 0,
    // compliant: false,
    // paymentId: "1234",
    // senderNote: "Sender note",
    // gasLimit: "40000",
    // gasPrice: "20",
  };
};
