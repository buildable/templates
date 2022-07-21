const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    to: "string", // Required

    // addressRetention: "retain",
    // applicationSid: "string",
    // attempt: 0,
    // body: "string",
    // contentRetention: "retain",
    // forceDelivery: true,
    // from: "string",
    // maxPrice: 0,
    // mediaUrl: ["http://example.com"],
    // messagingServiceSid: "string",
    // persistentAction: ["string"],
    // provideFeedback: true,
    // scheduleType: "fixed",
    // sendAsMms: true,
    // sendAt: "2019-08-24T14:15:22Z",
    // smartEncoded: true,
    // statusCallback: "http://example.com",
    // validityPeriod: 0,
  };
};
