const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "BNB", // Required

    // signatures:
    //     "6d78dad2-518f-4e76-8255-8f1df0de6884,6d78dad2-518f-4e76-8255-8f1df0de6885,6d78dad2-518f-4e76-8255-8f1df0de6886",
  };
};
