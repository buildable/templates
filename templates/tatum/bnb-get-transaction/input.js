const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    hash: "4B944BBF78F3ADE3A377551B5EA7AD0FEDBDA13165D932F94B106EF7A8E16C1A", // Required
  };
};
