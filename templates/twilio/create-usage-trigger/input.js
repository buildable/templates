const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    callbackUrl: "http://example.com", // Required
    triggerValue: "string", // Required
    usageCategory: "a2p-registration-fees", // Required

    // callbackMethod: "HEAD",
    // friendlyName: "string",
    // recurring: "daily",
    // triggerBy: "count",
  };
};
