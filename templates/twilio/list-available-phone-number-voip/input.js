const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    countryCode: "string", // Required

    // areaCode: 0,
    // contains: "string",
    // smsEnabled: true,
    // mmsEnabled: true,
    // voiceEnabled: true,
    // excludeAllAddressRequired: true,
    // excludeLocalAddressRequired: true,
    // excludeForeignAddressRequired: true,
    // beta: true,
    // nearNumber: "string",
    // nearLatLong: "string",
    // distance: 0,
    // inPostalCode: "string",
    // inRegion: "string",
    // inRateCenter: "string",
    // inLata: "string",
    // inLocality: "string",
    // faxEnabled: true,
    // pageSize: 1,
  };
};
