const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    txid: "LXEBXIBDAIF72NRI76SU252QSOGFCKEHTG7AI4P6W25V35PETU3Q", // Required
  };
};
