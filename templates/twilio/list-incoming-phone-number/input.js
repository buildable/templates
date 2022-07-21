const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required

    // beta: true,
    // friendlyName: "string",
    // phoneNumber: "string",
    // origin: "string",
    // pageSize: 1,
  };
};
