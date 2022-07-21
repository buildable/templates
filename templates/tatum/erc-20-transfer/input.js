const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ALGO", // Required
    to: "NTAESFCB3WOD7SAOL42KSPVARLB3JFA3MNX3AESWHYVT2RMYDVZI6YLG4Y", // Required
    amount: "100000", // Required
    contractAddress: "1", // Required
    fromPrivateKey:
      "72TCV5BRQPBMSAFPYO3CPWVDBYWNGAYNMTW5QHENOMQF7I6QLNMJWCJZ7A3V5YKD7QD6ZZPEHG2PV2ZVVEDDO6BCRGXWIL3DIUMSUCI", // Required

    // testnetType: "ethereum-ropsten",
  };
};
