const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    sid: "string", // Required

    // authorizeRedirectUrl: "http://example.com",
    // companyName: "string",
    // deauthorizeCallbackMethod: "HEAD",
    // deauthorizeCallbackUrl: "http://example.com",
    // description: "string",
    // friendlyName: "string",
    // homepageUrl: "http://example.com",
    // permissions: ["get-all"],
  };
};
