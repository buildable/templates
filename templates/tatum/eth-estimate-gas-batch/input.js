const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required

    // testnetType: "ethereum-ropsten",
    // estimations: [
    //     {
    //       from: "0xfb99f8ae9b70a0c8cd96ae665bbaf85a7e01a2ef",
    //       to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    //       contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    //       amount: "100000",
    //       data: "My note to recipient."
    //     }
    //   ],
  };
};
