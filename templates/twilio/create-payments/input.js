const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    callSid: "string", // Required
    idempotencyKey: "string", // Required
    statusCallback: "http://example.com", // Required

    // bankAccountType: "consumer-checking",
    // chargeAmount: 0,
    // currency: "string",
    // description: "string",
    // input: "string",
    // minPostalCodeLength: 0,
    // parameter: {},
    // paymentConnector: "string",
    // paymentMethod: "credit-card",
    // postalCode: true,
    // securityCode: true,
    // timeout: 0,
    // tokenType: "one-time",
    // validCardTypes: "string",
  };
};
