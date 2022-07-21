const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    apiVersion,
    friendlyName,
    messageStatusCallback,
    smsFallbackMethod,
    smsFallbackUrl,
    smsMethod,
    smsStatusCallback,
    smsUrl,
    statusCallback,
    statusCallbackMethod,
    voiceCallerIdLookup,
    voiceFallbackMethod,
    voiceFallbackUrl,
    voiceMethod,
    voiceUrl,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Applications.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        ...(apiVersion ? { ApiVersion: apiVersion } : {}),
        ...(friendlyName ? { FriendlyName: friendlyName } : {}),
        ...(messageStatusCallback ? { MessageStatusCallback: messageStatusCallback } : {}),
        ...(smsFallbackMethod ? { SmsFallbackMethod: smsFallbackMethod } : {}),
        ...(smsFallbackUrl ? { SmsFallbackUrl: smsFallbackUrl } : {}),
        ...(smsMethod ? { SmsMethod: smsMethod } : {}),
        ...(smsStatusCallback ? { SmsStatusCallback: smsStatusCallback } : {}),
        ...(smsUrl ? { SmsUrl: smsUrl } : {}),
        ...(statusCallback ? { StatusCallback: statusCallback } : {}),
        ...(statusCallbackMethod ? { StatusCallbackMethod: statusCallbackMethod } : {}),
        ...(voiceCallerIdLookup ? { VoiceCallerIdLookup: voiceCallerIdLookup } : {}),
        ...(voiceFallbackMethod ? { VoiceFallbackMethod: voiceFallbackMethod } : {}),
        ...(voiceFallbackUrl ? { VoiceFallbackUrl: voiceFallbackUrl } : {}),
        ...(voiceMethod ? { VoiceMethod: voiceMethod } : {}),
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
const verifyInput = ({ BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
};
