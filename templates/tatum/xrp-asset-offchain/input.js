const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    issuerAccount: "rsCZjvenhxsFycrb33gPSfXdrTNAS5uiR1", // Required
    token: "DA39A3EE5E6B4B0D3255BFEF95601890AFD80709", // Required
    basePair: "EUR", // Required
  };
};
