const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    city,
    customerName,
    isoCountry,
    postalCode,
    region,
    street,
    autoCorrectAddress,
    emergencyEnabled,
    friendlyName,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Addresses.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        City: city,
        CustomerName: customerName,
        IsoCountry: isoCountry,
        PostalCode: postalCode,
        Region: region,
        Street: street,
        ...(autoCorrectAddress ? { AutoCorrectAddress: autoCorrectAddress } : {}),
        ...(emergencyEnabled ? { EmergencyEnabled: emergencyEnabled } : {}),
        ...(friendlyName ? { FriendlyName: friendlyName } : {}),
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
  city,
  customerName,
  isoCountry,
  postalCode,
  region,
  street,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_CITY: "A valid city field (string) was not provided in the input.",
    INVALID_CUSTOMER_NAME: "A valid customerName field (string) was not provided in the input.",
    INVALID_ISO_COUNTRY: "A valid isoCountry field (string) was not provided in the input.",
    INVALID_POSTAL_CODE: "A valid postalCode field (string) was not provided in the input.",
    INVALID_REGION: "A valid region field (string) was not provided in the input.",
    INVALID_STREET: "A valid street field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof city !== "string") throw new Error(ERRORS.INVALID_CITY);
  if (typeof customerName !== "string") throw new Error(ERRORS.INVALID_CUSTOMER_NAME);
  if (typeof isoCountry !== "string") throw new Error(ERRORS.INVALID_ISO_COUNTRY);
  if (typeof postalCode !== "string") throw new Error(ERRORS.INVALID_POSTAL_CODE);
  if (typeof region !== "string") throw new Error(ERRORS.INVALID_REGION);
  if (typeof street !== "string") throw new Error(ERRORS.INVALID_STREET);
};
