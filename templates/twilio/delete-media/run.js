const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN, messageSid, sid } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "delete",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Messages/${messageSid}/Media/${sid}.json`,
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
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
  messageSid,
  sid,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_MESSAGE_SID: "A valid messageSid field (string) was not provided in the input.",
    INVALID_SID: "A valid sid field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof messageSid !== "string") throw new Error(ERRORS.INVALID_MESSAGE_SID);
  if (typeof sid !== "string") throw new Error(ERRORS.INVALID_SID);
};
