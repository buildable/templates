const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required

    // dateCreated: "2019-08-24",
    // dateUpdated: "2019-08-24",
    // friendlyName: "string",
    // status: "init",
    // pageSize: 1,
  };
};
