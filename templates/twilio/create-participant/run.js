const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    conferenceSid,
    from,
    to,
    beep,
    byoc,
    callReason,
    callSidToCoach,
    callerId,
    coaching,
    conferenceRecord,
    conferenceRecordingStatusCallback,
    conferenceRecordingStatusCallbackEvent,
    conferenceRecordingStatusCallbackMethod,
    conferenceStatusCallback,
    conferenceStatusCallbackEvent,
    conferenceStatusCallbackMethod,
    conferenceTrim,
    earlyMedia,
    endConferenceOnExit,
    jitterBufferSize,
    label,
    maxParticipants,
    muted,
    record,
    recordingChannels,
    recordingStatusCallback,
    recordingStatusCallbackEvent,
    recordingStatusCallbackMethod,
    recordingTrack,
    region,
    sipAuthPassword,
    sipAuthUsername,
    startConferenceOnEnter,
    statusCallback,
    statusCallbackEvent,
    statusCallbackMethod,
    timeLimit,
    timeout,
    waitMethod,
    waitUrl,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Conferences/${conferenceSid}/Participants.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        From: from,
        To: to,
        ...(beep ? { Beep: beep } : {}),
        ...(byoc ? { Byoc: byoc } : {}),
        ...(callReason ? { CallReason: callReason } : {}),
        ...(callSidToCoach ? { CallSidToCoach: callSidToCoach } : {}),
        ...(callerId ? { CallerId: callerId } : {}),
        ...(coaching ? { Coaching: coaching } : {}),
        ...(conferenceRecord ? { ConferenceRecord: conferenceRecord } : {}),
        ...(conferenceRecordingStatusCallback
          ? { ConferenceRecordingStatusCallback: conferenceRecordingStatusCallback }
          : {}),
        ...(conferenceRecordingStatusCallbackEvent
          ? { ConferenceRecordingStatusCallbackEvent: conferenceRecordingStatusCallbackEvent }
          : {}),
        ...(conferenceRecordingStatusCallbackMethod
          ? { ConferenceRecordingStatusCallbackMethod: conferenceRecordingStatusCallbackMethod }
          : {}),
        ...(conferenceStatusCallback ? { ConferenceStatusCallback: conferenceStatusCallback } : {}),
        ...(conferenceStatusCallbackEvent
          ? { ConferenceStatusCallbackEvent: conferenceStatusCallbackEvent }
          : {}),
        ...(conferenceStatusCallbackMethod
          ? { ConferenceStatusCallbackMethod: conferenceStatusCallbackMethod }
          : {}),
        ...(conferenceTrim ? { ConferenceTrim: conferenceTrim } : {}),
        ...(earlyMedia ? { EarlyMedia: earlyMedia } : {}),
        ...(endConferenceOnExit ? { EndConferenceOnExit: endConferenceOnExit } : {}),
        ...(jitterBufferSize ? { JitterBufferSize: jitterBufferSize } : {}),
        ...(label ? { Label: label } : {}),
        ...(maxParticipants ? { MaxParticipants: maxParticipants } : {}),
        ...(muted ? { Muted: muted } : {}),
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
        ...(region ? { Region: region } : {}),
        ...(sipAuthPassword ? { SipAuthPassword: sipAuthPassword } : {}),
        ...(sipAuthUsername ? { SipAuthUsername: sipAuthUsername } : {}),
        ...(startConferenceOnEnter ? { StartConferenceOnEnter: startConferenceOnEnter } : {}),
        ...(statusCallback ? { StatusCallback: statusCallback } : {}),
        ...(statusCallbackEvent ? { StatusCallbackEvent: statusCallbackEvent } : {}),
        ...(statusCallbackMethod ? { StatusCallbackMethod: statusCallbackMethod } : {}),
        ...(timeLimit ? { TimeLimit: timeLimit } : {}),
        ...(timeout ? { Timeout: timeout } : {}),
        ...(waitMethod ? { WaitMethod: waitMethod } : {}),
        ...(waitUrl ? { WaitUrl: waitUrl } : {}),
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
  conferenceSid,
  from,
  to,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_CONFERENCE_SID: "A valid conferenceSid field (string) was not provided in the input.",
    INVALID_FROM: "A valid from field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof conferenceSid !== "string") throw new Error(ERRORS.INVALID_CONFERENCE_SID);
  if (typeof from !== "string") throw new Error(ERRORS.INVALID_FROM);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
};
