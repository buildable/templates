const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    id: "5e68c66581f2ee32bc354087", // Required

    // accountCode: "AC_1011_B",
    // accountNumber: "123456",
  };
};
