const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ETH", // Required
    contractAddress: "0x94Ce79B9F001E25BBEbE7C01998A78F7B27D1326", // Required
    tokenId: "1,2,3", // Required
    address:
      "0x3223AEB8404C7525FcAA6C512f91e287AE9FfE7B,0x3223AEB8404C7525FcAA6C512f91e287AE9FfE7B,0x3223AEB8404C7525FcAA6C512f91e287AE9FfE7B", // Required

    // testnetType: "ethereum-ropsten",
  };
};
