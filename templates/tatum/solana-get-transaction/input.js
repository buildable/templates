const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "5oSXZkPregqGhHrTcbWhgHQJETvBHtBYssuuCMJ3qroAgHsHndsr8fyY8kY76AgwmMaZBZW8ThHAXwjDaUSweApS", // Required
  };
};
