const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    sid: "string", // Required

    // byocTrunkSid: "string",
    // domainName: "string",
    // emergencyCallerSid: "string",
    // emergencyCallingEnabled: true,
    // friendlyName: "string",
    // secure: true,
    // sipRegistration: true,
    // voiceFallbackMethod: "HEAD",
    // voiceFallbackUrl: "http://example.com",
    // voiceMethod: "HEAD",
    // voiceStatusCallbackMethod: "HEAD",
    // voiceStatusCallbackUrl: "http://example.com",
    // voiceUrl: "http://example.com",
  };
};
