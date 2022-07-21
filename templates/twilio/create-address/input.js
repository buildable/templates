const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    city: "string", // Required
    customerName: "string", // Required
    isoCountry: "string", // Required
    postalCode: "string", // Required
    region: "string", // Required
    street: "string", // Required

    // autoCorrectAddress: true,
    // emergencyEnabled: true,
    // friendlyName: "string",
  };
};
