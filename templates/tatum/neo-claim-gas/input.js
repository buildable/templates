const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    privateKey: "0ee69b443c740982e31ac64f8ab06006c24b7aab9e6ebe81b4663eafc72e13c9", // Required
  };
};
