const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    countryCode,
    areaCode,
    contains,
    smsEnabled,
    mmsEnabled,
    voiceEnabled,
    excludeAllAddressRequired,
    excludeLocalAddressRequired,
    excludeForeignAddressRequired,
    beta,
    nearNumber,
    nearLatLong,
    distance,
    inPostalCode,
    inRegion,
    inRateCenter,
    inLata,
    inLocality,
    faxEnabled,
    pageSize,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/AvailablePhoneNumbers/${countryCode}/Local.json`,
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      params: {
        ...(areaCode ? { AreaCode: areaCode } : {}),
        ...(contains ? { Contains: contains } : {}),
        ...(smsEnabled ? { SmsEnabled: smsEnabled } : {}),
        ...(mmsEnabled ? { MmsEnabled: mmsEnabled } : {}),
        ...(voiceEnabled ? { VoiceEnabled: voiceEnabled } : {}),
        ...(excludeAllAddressRequired
          ? { ExcludeAllAddressRequired: excludeAllAddressRequired }
          : {}),
        ...(excludeLocalAddressRequired
          ? { ExcludeLocalAddressRequired: excludeLocalAddressRequired }
          : {}),
        ...(excludeForeignAddressRequired
          ? { ExcludeForeignAddressRequired: excludeForeignAddressRequired }
          : {}),
        ...(beta ? { Beta: beta } : {}),
        ...(nearNumber ? { NearNumber: nearNumber } : {}),
        ...(nearLatLong ? { NearLatLong: nearLatLong } : {}),
        ...(distance ? { Distance: distance } : {}),
        ...(inPostalCode ? { InPostalCode: inPostalCode } : {}),
        ...(inRegion ? { InRegion: inRegion } : {}),
        ...(inRateCenter ? { InRateCenter: inRateCenter } : {}),
        ...(inLata ? { InLata: inLata } : {}),
        ...(inLocality ? { InLocality: inLocality } : {}),
        ...(faxEnabled ? { FaxEnabled: faxEnabled } : {}),
        ...(pageSize ? { PageSize: pageSize } : {}),
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "comma" });
      },
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
  countryCode,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input.",
    INVALID_COUNTRY_CODE: "A valid countryCode field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof countryCode !== "string") throw new Error(ERRORS.INVALID_COUNTRY_CODE);
};
