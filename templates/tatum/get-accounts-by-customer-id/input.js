const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    pageSize: 10, // Required
    id: "5e68c66581f2ee32bc354087", // Required

    // offset: 0,
    // accountCode: "AC_1011_B",
  };
};
