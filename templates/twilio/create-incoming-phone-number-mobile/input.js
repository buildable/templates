const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    phoneNumber: "string", // Required

    // addressSid: "string",
    // apiVersion: "string",
    // bundleSid: "string",
    // emergencyAddressSid: "string",
    // emergencyStatus: "Active",
    // friendlyName: "string",
    // identitySid: "string",
    // smsApplicationSid: "string",
    // smsFallbackMethod: "HEAD",
    // smsFallbackUrl: "http://example.com",
    // smsMethod: "HEAD",
    // smsUrl: "http://example.com",
    // statusCallback: "http://example.com",
    // statusCallbackMethod: "HEAD",
    // trunkSid: "string",
    // voiceApplicationSid: "string",
    // voiceCallerIdLookup: true,
    // voiceFallbackMethod: "HEAD",
    // voiceFallbackUrl: "http://example.com",
    // voiceMethod: "HEAD",
    // voiceReceiveMode: "voice",
    // voiceUrl: "http://example.com",
  };
};
