const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required

    // to: "string",
    // from: "string",
    // parentCallSid: "string",
    // status: "queued",
    // startTime: "2019-08-24T14:15:22Z",
    // endTime: "2019-08-24T14:15:22Z",
    // pageSize: 1,
  };
};
