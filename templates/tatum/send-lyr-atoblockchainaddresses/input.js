const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    to: [{ address: "2MzNGwuKvMEvKMQogtgzSqJcH2UW3Tc5oc7", value: 0.02969944 }], // Required

    // fromAddress: [
    //     {
    //       signatureId: "1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6",
    //       address: "2N9bBiH2qrTDrPCzrNhaFGdkNKS86PJAAAS",
    //       privateKey: "cVX7YtgL5muLTPncHFhP95oitV1mqUUA5VeSn8HeCRJbPqipzobf"
    //     }
    //   ],
    // fromUTXO: [
    //     {
    //       txHash: "53faa103e8217e1520f5149a4e8c84aeb58e55bdab11164a95e69a8ca50f8fcc",
    //       index: "0",
    //       privateKey: "cVX7YtgL5muLTPncHFhP95oitV1mqUUA5VeSn8HeCRJbPqipzobf",
    //       signatureId: "1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6"
    //     }
    //   ],
  };
};
