const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    fromPrivateKey: "842E09EB40D8175979EFB0071B28163E11AED0F14BDD84090A4CEFB936EF5701", // Required
    to: "TYMwiDu22V6XG3yk6W9cTVBz48okKLRczh", // Required
    amount: "100000", // Required
  };
};
