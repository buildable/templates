const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    sid: "string", // Required

    // apiVersion: "string",
    // friendlyName: "string",
    // messageStatusCallback: "http://example.com",
    // smsFallbackMethod: "HEAD",
    // smsFallbackUrl: "http://example.com",
    // smsMethod: "HEAD",
    // smsStatusCallback: "http://example.com",
    // smsUrl: "http://example.com",
    // statusCallback: "http://example.com",
    // statusCallbackMethod: "HEAD",
    // voiceCallerIdLookup: true,
    // voiceFallbackMethod: "HEAD",
    // voiceFallbackUrl: "http://example.com",
    // voiceMethod: "HEAD",
    // voiceUrl: "http://example.com",
  };
};
