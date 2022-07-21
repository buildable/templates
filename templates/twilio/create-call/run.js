const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    from,
    to,
    applicationSid,
    asyncAmd,
    asyncAmdStatusCallback,
    asyncAmdStatusCallbackMethod,
    byoc,
    callReason,
    callToken,
    callerId,
    fallbackMethod,
    fallbackUrl,
    machineDetection,
    machineDetectionSilenceTimeout,
    machineDetectionSpeechEndThreshold,
    machineDetectionSpeechThreshold,
    machineDetectionTimeout,
    method,
    record,
    recordingChannels,
    recordingStatusCallback,
    recordingStatusCallbackEvent,
    recordingStatusCallbackMethod,
    recordingTrack,
    sendDigits,
    sipAuthPassword,
    sipAuthUsername,
    statusCallback,
    statusCallbackEvent,
    statusCallbackMethod,
    timeLimit,
    timeout,
    trim,
    twiml,
    url,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Calls.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        From: from,
        To: to,
        ...(applicationSid ? { ApplicationSid: applicationSid } : {}),
        ...(asyncAmd ? { AsyncAmd: asyncAmd } : {}),
        ...(asyncAmdStatusCallback ? { AsyncAmdStatusCallback: asyncAmdStatusCallback } : {}),
        ...(asyncAmdStatusCallbackMethod
          ? { AsyncAmdStatusCallbackMethod: asyncAmdStatusCallbackMethod }
          : {}),
        ...(byoc ? { Byoc: byoc } : {}),
        ...(callReason ? { CallReason: callReason } : {}),
        ...(callToken ? { CallToken: callToken } : {}),
        ...(callerId ? { CallerId: callerId } : {}),
        ...(fallbackMethod ? { FallbackMethod: fallbackMethod } : {}),
        ...(fallbackUrl ? { FallbackUrl: fallbackUrl } : {}),
        ...(machineDetection ? { MachineDetection: machineDetection } : {}),
        ...(machineDetectionSilenceTimeout
          ? { MachineDetectionSilenceTimeout: machineDetectionSilenceTimeout }
          : {}),
        ...(machineDetectionSpeechEndThreshold
          ? { MachineDetectionSpeechEndThreshold: machineDetectionSpeechEndThreshold }
          : {}),
        ...(machineDetectionSpeechThreshold
          ? { MachineDetectionSpeechThreshold: machineDetectionSpeechThreshold }
          : {}),
        ...(machineDetectionTimeout ? { MachineDetectionTimeout: machineDetectionTimeout } : {}),
        ...(method ? { Method: method } : {}),
        ...(record ? { Record: record } : {}),
        ...(recordingChannels ? { RecordingChannels: recordingChannels } : {}),
        ...(recordingStatusCallback ? { RecordingStatusCallback: recordingStatusCallback } : {}),
        ...(recordingStatusCallbackEvent
          ? { RecordingStatusCallbackEvent: recordingStatusCallbackEvent }
          : {}),
        ...(recordingStatusCallbackMethod
          ? { RecordingStatusCallbackMethod: recordingStatusCallbackMethod }
          : {}),
        ...(recordingTrack ? { RecordingTrack: recordingTrack } : {}),
        ...(sendDigits ? { SendDigits: sendDigits } : {}),
        ...(sipAuthPassword ? { SipAuthPassword: sipAuthPassword } : {}),
        ...(sipAuthUsername ? { SipAuthUsername: sipAuthUsername } : {}),
        ...(statusCallback ? { StatusCallback: statusCallback } : {}),
        ...(statusCallbackEvent ? { StatusCallbackEvent: statusCallbackEvent } : {}),
        ...(statusCallbackMethod ? { StatusCallbackMethod: statusCallbackMethod } : {}),
        ...(timeLimit ? { TimeLimit: timeLimit } : {}),
        ...(timeout ? { Timeout: timeout } : {}),
        ...(trim ? { Trim: trim } : {}),
        ...(twiml ? { Twiml: twiml } : {}),
        ...(url ? { Url: url } : {}),
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
const verifyInput = ({ BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN, from, to }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_FROM: "A valid from field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof from !== "string") throw new Error(ERRORS.INVALID_FROM);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
};
