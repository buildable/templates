const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    sid: "string", // Required

    // fallbackMethod: "HEAD",
    // fallbackUrl: "http://example.com",
    // method: "HEAD",
    // status: "canceled",
    // statusCallback: "http://example.com",
    // statusCallbackMethod: "HEAD",
    // timeLimit: 0,
    // twiml: "string",
    // url: "http://example.com",
  };
};
