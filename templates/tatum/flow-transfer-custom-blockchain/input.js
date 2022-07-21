const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    account: "0x955cd3f17b2fd8ad", // Required
    transaction: `transaction(publicKey: String) {
  prepare(signer: AuthAccount) {
    signer.addPublicKey(publicKey.decodeHex())
  }
}
`, // Required
    args: [{ value: "string", type: "Identity", subType: "Identity" }], // Required
    mnemonic: "urge pulp usage sister evidence arrest palm math please chief egg abuse", // Required
    index: 0, // Required
  };
};
