const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "TVAEYCmc15awaDRAjUZ1kvcHwQQaoPw2CW", // Required
    amount: "100000", // Required
    fromPrivateKey: "e75d702ce00987633f8009fbb1eabb5b187cb5b50fe9179a8d6cee6bab076b66", // Required
    senderAccountId: "5e68c66581f2ee32bc354087", // Required

    // compliant: false,
    // fee: "2.5",
    // paymentId: "1234",
    // senderNote: "Sender note",
  };
};
