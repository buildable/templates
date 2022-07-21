const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    account: "0x955cd3f17b2fd8ad", // Required
    publicKey:
      "968c3ce11e871cb2b7161b282655ee5fcb051f3c04894705d771bf11c6fbebfc6556ab8a0c04f45ea56281312336d0668529077c9d66891a6cad3db877acbe90", // Required
    mnemonic: "urge pulp usage sister evidence arrest palm math please chief egg abuse", // Required
    index: 0, // Required

    // weight: 1000,
  };
};
