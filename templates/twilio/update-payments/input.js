const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    callSid: "string", // Required
    sid: "string", // Required
    idempotencyKey: "string", // Required
    statusCallback: "http://example.com", // Required

    // capture: "payment-card-number",
    // status: "complete",
  };
};
