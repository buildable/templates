const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    tax_rate,
    active,
    country,
    description,
    display_name,
    expand,
    jurisdiction,
    metadata,
    state,
    tax_type,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/tax_rates/${tax_rate}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(active ? { active } : {}),
        ...(country ? { country } : {}),
        ...(description ? { description } : {}),
        ...(display_name ? { display_name } : {}),
        ...(expand ? { expand } : {}),
        ...(jurisdiction ? { jurisdiction } : {}),
        ...(metadata ? { metadata } : {}),
        ...(state ? { state } : {}),
        ...(tax_type ? { tax_type } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, tax_rate }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_TAX_RATE: "A valid tax_rate field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof tax_rate !== "string") throw new Error(ERRORS.INVALID_TAX_RATE);
};
