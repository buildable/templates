const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    callSid: "string", // Required

    // recordingChannels: "string",
    // recordingStatusCallback: "http://example.com",
    // recordingStatusCallbackEvent: ["string"],
    // recordingStatusCallbackMethod: "HEAD",
    // recordingTrack: "string",
    // trim: "string",
  };
};
