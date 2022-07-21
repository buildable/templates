const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    conferenceSid: "string", // Required
    from: "string", // Required
    to: "string", // Required

    // beep: "string",
    // byoc: "string",
    // callReason: "string",
    // callSidToCoach: "string",
    // callerId: "string",
    // coaching: true,
    // conferenceRecord: "string",
    // conferenceRecordingStatusCallback: "http://example.com",
    // conferenceRecordingStatusCallbackEvent: ["string"],
    // conferenceRecordingStatusCallbackMethod: "HEAD",
    // conferenceStatusCallback: "http://example.com",
    // conferenceStatusCallbackEvent: ["string"],
    // conferenceStatusCallbackMethod: "HEAD",
    // conferenceTrim: "string",
    // earlyMedia: true,
    // endConferenceOnExit: true,
    // jitterBufferSize: "string",
    // label: "string",
    // maxParticipants: 0,
    // muted: true,
    // record: true,
    // recordingChannels: "string",
    // recordingStatusCallback: "http://example.com",
    // recordingStatusCallbackEvent: ["string"],
    // recordingStatusCallbackMethod: "HEAD",
    // recordingTrack: "string",
    // region: "string",
    // sipAuthPassword: "string",
    // sipAuthUsername: "string",
    // startConferenceOnEnter: true,
    // statusCallback: "http://example.com",
    // statusCallbackEvent: ["string"],
    // statusCallbackMethod: "HEAD",
    // timeLimit: 0,
    // timeout: 0,
    // waitMethod: "HEAD",
    // waitUrl: "http://example.com",
  };
};
