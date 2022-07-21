const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    account_token,
    bank_account,
    business_profile,
    business_type,
    capabilities,
    company,
    default_currency,
    documents,
    email,
    expand,
    external_account,
    individual,
    metadata,
    settings,
    tos_acceptance,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/account",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(account_token ? { account_token } : {}),
        ...(bank_account ? { bank_account } : {}),
        ...(business_profile ? { business_profile } : {}),
        ...(business_type ? { business_type } : {}),
        ...(capabilities ? { capabilities } : {}),
        ...(company ? { company } : {}),
        ...(default_currency ? { default_currency } : {}),
        ...(documents ? { documents } : {}),
        ...(email ? { email } : {}),
        ...(expand ? { expand } : {}),
        ...(external_account ? { external_account } : {}),
        ...(individual ? { individual } : {}),
        ...(metadata ? { metadata } : {}),
        ...(settings ? { settings } : {}),
        ...(tos_acceptance ? { tos_acceptance } : {}),
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
