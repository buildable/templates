const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    fromUTXO: [
      {
        txHash: "53faa103e8217e1520f5149a4e8c84aeb58e55bdab11164a95e69a8ca50f8fcc",
        index: 0,
        privateKey: "cVX7YtgL5muLTPncHFhP95oitV1mqUUA5VeSn8HeCRJbPqipzobf",
      },
    ], // Required
    to: [{ address: "bitcoincash:qrd9khmeg4nqag3h5gzu8vjt537pm7le85lcauzez", value: 0.02969944 }], // Required
  };
};
