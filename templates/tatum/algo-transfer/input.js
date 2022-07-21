const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "61b3bffddfb389cde19c73be", // Required
    account: "0xee82856bf20e2aa6", // Required
    address: "0xee82856bf20e2aa6", // Required
    amount: "10000", // Required
    privateKey:
      "NBYMCVEEDFYV3TPWVRE6APE7PKHUJD4XAKXCKNCLKGUXOC3LFNJGZQCJCRA53HB7ZAHF6NFJH2QIVQ5USQNWG35QCJLD4KZ5IWMB24Q", // Required

    // compliant: false,
    // paymentId: "1234",
    // senderNote: "Sendernote",
  };
};
