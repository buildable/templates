const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    conferenceSid: "string", // Required
    callSid: "string", // Required

    // announceMethod: "HEAD",
    // announceUrl: "http://example.com",
    // beepOnExit: true,
    // callSidToCoach: "string",
    // coaching: true,
    // endConferenceOnExit: true,
    // hold: true,
    // holdMethod: "HEAD",
    // holdUrl: "http://example.com",
    // muted: true,
    // waitMethod: "HEAD",
    // waitUrl: "http://example.com",
  };
};
