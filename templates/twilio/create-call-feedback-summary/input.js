const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    endDate: "2019-08-24", // Required
    startDate: "2019-08-24", // Required

    // includeSubaccounts: true,
    // statusCallback: "http://example.com",
    // statusCallbackMethod: "HEAD",
  };
};
