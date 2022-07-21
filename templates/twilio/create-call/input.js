const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    from: "string", // Required
    to: "string", // Required

    // applicationSid: "string",
    // asyncAmd: "string",
    // asyncAmdStatusCallback: "http://example.com",
    // asyncAmdStatusCallbackMethod: "HEAD",
    // byoc: "string",
    // callReason: "string",
    // callToken: "string",
    // callerId: "string",
    // fallbackMethod: "HEAD",
    // fallbackUrl: "http://example.com",
    // machineDetection: "string",
    // machineDetectionSilenceTimeout: 0,
    // machineDetectionSpeechEndThreshold: 0,
    // machineDetectionSpeechThreshold: 0,
    // machineDetectionTimeout: 0,
    // method: "HEAD",
    // record: true,
    // recordingChannels: "string",
    // recordingStatusCallback: "string",
    // recordingStatusCallbackEvent: ["string"],
    // recordingStatusCallbackMethod: "HEAD",
    // recordingTrack: "string",
    // sendDigits: "string",
    // sipAuthPassword: "string",
    // sipAuthUsername: "string",
    // statusCallback: "http://example.com",
    // statusCallbackEvent: ["string"],
    // statusCallbackMethod: "HEAD",
    // timeLimit: 0,
    // timeout: 0,
    // trim: "string",
    // twiml: "string",
    // url: "http://example.com",
  };
};
