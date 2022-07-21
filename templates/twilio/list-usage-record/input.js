const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required

    // category: "a2p-registration-fees",
    // startDate: "2019-08-24",
    // endDate: "2019-08-24",
    // includeSubaccounts: true,
    // pageSize: 1,
  };
};
