const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    asset: "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7", // Required
  };
};
