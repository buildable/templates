const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    account,
    address,
    address_kana,
    address_kanji,
    dob,
    documents,
    email,
    expand,
    first_name,
    first_name_kana,
    first_name_kanji,
    full_name_aliases,
    gender,
    id_number,
    id_number_secondary,
    last_name,
    last_name_kana,
    last_name_kanji,
    maiden_name,
    metadata,
    nationality,
    person_token,
    phone,
    political_exposure,
    registered_address,
    relationship,
    ssn_last_4,
    verification,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/account/people",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(account ? { account } : {}),
        ...(address ? { address } : {}),
        ...(address_kana ? { address_kana } : {}),
        ...(address_kanji ? { address_kanji } : {}),
        ...(dob ? { dob } : {}),
        ...(documents ? { documents } : {}),
        ...(email ? { email } : {}),
        ...(expand ? { expand } : {}),
        ...(first_name ? { first_name } : {}),
        ...(first_name_kana ? { first_name_kana } : {}),
        ...(first_name_kanji ? { first_name_kanji } : {}),
        ...(full_name_aliases ? { full_name_aliases } : {}),
        ...(gender ? { gender } : {}),
        ...(id_number ? { id_number } : {}),
        ...(id_number_secondary ? { id_number_secondary } : {}),
        ...(last_name ? { last_name } : {}),
        ...(last_name_kana ? { last_name_kana } : {}),
        ...(last_name_kanji ? { last_name_kanji } : {}),
        ...(maiden_name ? { maiden_name } : {}),
        ...(metadata ? { metadata } : {}),
        ...(nationality ? { nationality } : {}),
        ...(person_token ? { person_token } : {}),
        ...(phone ? { phone } : {}),
        ...(political_exposure ? { political_exposure } : {}),
        ...(registered_address ? { registered_address } : {}),
        ...(relationship ? { relationship } : {}),
        ...(ssn_last_4 ? { ssn_last_4 } : {}),
        ...(verification ? { verification } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
};
