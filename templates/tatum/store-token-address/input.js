const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    name: "MY_TOKEN", // Required
  };
};
