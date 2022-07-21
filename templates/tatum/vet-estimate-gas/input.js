const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    from: "0x5034aa590125b64023a0262112b98d72e3c8e40e", // Required
    to: "0x5034aa590125b64023a0262112b98d72e3c8e40e", // Required
    value: "140", // Required

    // data: "string",
    // nonce: 12345,
  };
};
