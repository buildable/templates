const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    phoneNumber,
    addressSid,
    apiVersion,
    bundleSid,
    emergencyAddressSid,
    emergencyStatus,
    friendlyName,
    identitySid,
    smsApplicationSid,
    smsFallbackMethod,
    smsFallbackUrl,
    smsMethod,
    smsUrl,
    statusCallback,
    statusCallbackMethod,
    trunkSid,
    voiceApplicationSid,
    voiceCallerIdLookup,
    voiceFallbackMethod,
    voiceFallbackUrl,
    voiceMethod,
    voiceReceiveMode,
    voiceUrl,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/IncomingPhoneNumbers/Local.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        PhoneNumber: phoneNumber,
        ...(addressSid ? { AddressSid: addressSid } : {}),
        ...(apiVersion ? { ApiVersion: apiVersion } : {}),
        ...(bundleSid ? { BundleSid: bundleSid } : {}),
        ...(emergencyAddressSid ? { EmergencyAddressSid: emergencyAddressSid } : {}),
        ...(emergencyStatus ? { EmergencyStatus: emergencyStatus } : {}),
        ...(friendlyName ? { FriendlyName: friendlyName } : {}),
        ...(identitySid ? { IdentitySid: identitySid } : {}),
        ...(smsApplicationSid ? { SmsApplicationSid: smsApplicationSid } : {}),
        ...(smsFallbackMethod ? { SmsFallbackMethod: smsFallbackMethod } : {}),
        ...(smsFallbackUrl ? { SmsFallbackUrl: smsFallbackUrl } : {}),
        ...(smsMethod ? { SmsMethod: smsMethod } : {}),
        ...(smsUrl ? { SmsUrl: smsUrl } : {}),
        ...(statusCallback ? { StatusCallback: statusCallback } : {}),
        ...(statusCallbackMethod ? { StatusCallbackMethod: statusCallbackMethod } : {}),
        ...(trunkSid ? { TrunkSid: trunkSid } : {}),
        ...(voiceApplicationSid ? { VoiceApplicationSid: voiceApplicationSid } : {}),
        ...(voiceCallerIdLookup ? { VoiceCallerIdLookup: voiceCallerIdLookup } : {}),
        ...(voiceFallbackMethod ? { VoiceFallbackMethod: voiceFallbackMethod } : {}),
        ...(voiceFallbackUrl ? { VoiceFallbackUrl: voiceFallbackUrl } : {}),
        ...(voiceMethod ? { VoiceMethod: voiceMethod } : {}),
        ...(voiceReceiveMode ? { VoiceReceiveMode: voiceReceiveMode } : {}),
        ...(voiceUrl ? { VoiceUrl: voiceUrl } : {}),
      }),
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({
  BUILDABLE_TWILIO_ACCOUNT_SID,
  BUILDABLE_TWILIO_AUTH_TOKEN,
  phoneNumber,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_PHONE_NUMBER: "A valid phoneNumber field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof phoneNumber !== "string") throw new Error(ERRORS.INVALID_PHONE_NUMBER);
};
