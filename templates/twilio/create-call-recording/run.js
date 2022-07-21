const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    callSid,
    recordingChannels,
    recordingStatusCallback,
    recordingStatusCallbackEvent,
    recordingStatusCallbackMethod,
    recordingTrack,
    trim,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Calls/${callSid}/Recordings.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        ...(recordingChannels ? { RecordingChannels: recordingChannels } : {}),
        ...(recordingStatusCallback ? { RecordingStatusCallback: recordingStatusCallback } : {}),
        ...(recordingStatusCallbackEvent
          ? { RecordingStatusCallbackEvent: recordingStatusCallbackEvent }
          : {}),
        ...(recordingStatusCallbackMethod
          ? { RecordingStatusCallbackMethod: recordingStatusCallbackMethod }
          : {}),
        ...(recordingTrack ? { RecordingTrack: recordingTrack } : {}),
        ...(trim ? { Trim: trim } : {}),
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
const verifyInput = ({ BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN, callSid }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_CALL_SID: "A valid callSid field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof callSid !== "string") throw new Error(ERRORS.INVALID_CALL_SID);
};
