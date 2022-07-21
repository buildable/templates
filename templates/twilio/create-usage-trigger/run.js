const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    callbackUrl,
    triggerValue,
    usageCategory,
    callbackMethod,
    friendlyName,
    recurring,
    triggerBy,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Usage/Triggers.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        CallbackUrl: callbackUrl,
        TriggerValue: triggerValue,
        UsageCategory: usageCategory,
        ...(callbackMethod ? { CallbackMethod: callbackMethod } : {}),
        ...(friendlyName ? { FriendlyName: friendlyName } : {}),
        ...(recurring ? { Recurring: recurring } : {}),
        ...(triggerBy ? { TriggerBy: triggerBy } : {}),
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
  callbackUrl,
  triggerValue,
  usageCategory,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_CALLBACK_URL: "A valid callbackUrl field (string) was not provided in the input.",
    INVALID_TRIGGER_VALUE: "A valid triggerValue field (string) was not provided in the input.",
    INVALID_USAGE_CATEGORY: "A valid usageCategory field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof callbackUrl !== "string") throw new Error(ERRORS.INVALID_CALLBACK_URL);
  if (typeof triggerValue !== "string") throw new Error(ERRORS.INVALID_TRIGGER_VALUE);
  if (typeof usageCategory !== "string") throw new Error(ERRORS.INVALID_USAGE_CATEGORY);
};
