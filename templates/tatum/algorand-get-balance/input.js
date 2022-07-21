const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "TMETT6BXL3QUH7AH5TS6IONU7LVTLKIGG54CFCNPMQXWGRIZFIESZBYWP4", // Required
  };
};
