const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    to,
    addressRetention,
    applicationSid,
    attempt,
    body,
    contentRetention,
    forceDelivery,
    from,
    maxPrice,
    mediaUrl,
    messagingServiceSid,
    persistentAction,
    provideFeedback,
    scheduleType,
    sendAsMms,
    sendAt,
    smartEncoded,
    statusCallback,
    validityPeriod,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Messages.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        To: to,
        ...(addressRetention ? { AddressRetention: addressRetention } : {}),
        ...(applicationSid ? { ApplicationSid: applicationSid } : {}),
        ...(attempt ? { Attempt: attempt } : {}),
        ...(body ? { Body: body } : {}),
        ...(contentRetention ? { ContentRetention: contentRetention } : {}),
        ...(forceDelivery ? { ForceDelivery: forceDelivery } : {}),
        ...(from ? { From: from } : {}),
        ...(maxPrice ? { MaxPrice: maxPrice } : {}),
        ...(mediaUrl ? { MediaUrl: mediaUrl } : {}),
        ...(messagingServiceSid ? { MessagingServiceSid: messagingServiceSid } : {}),
        ...(persistentAction ? { PersistentAction: persistentAction } : {}),
        ...(provideFeedback ? { ProvideFeedback: provideFeedback } : {}),
        ...(scheduleType ? { ScheduleType: scheduleType } : {}),
        ...(sendAsMms ? { SendAsMms: sendAsMms } : {}),
        ...(sendAt ? { SendAt: sendAt } : {}),
        ...(smartEncoded ? { SmartEncoded: smartEncoded } : {}),
        ...(statusCallback ? { StatusCallback: statusCallback } : {}),
        ...(validityPeriod ? { ValidityPeriod: validityPeriod } : {}),
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
const verifyInput = ({ BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN, to }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
};
