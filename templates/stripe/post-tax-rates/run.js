const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    display_name,
    inclusive,
    percentage,
    active,
    country,
    description,
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
      url: "https://api.stripe.com/v1/tax_rates",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        display_name,
        inclusive,
        percentage,
        ...(active ? { active } : {}),
        ...(country ? { country } : {}),
        ...(description ? { description } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, display_name, inclusive, percentage }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_DISPLAY_NAME: "A valid display_name field (string) was not provided in the input.",
    INVALID_INCLUSIVE: "A valid inclusive field (boolean) was not provided in the input.",
    INVALID_PERCENTAGE: "A valid percentage field (number) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof display_name !== "string") throw new Error(ERRORS.INVALID_DISPLAY_NAME);
  if (typeof inclusive !== "boolean") throw new Error(ERRORS.INVALID_INCLUSIVE);
  if (typeof percentage !== "number") throw new Error(ERRORS.INVALID_PERCENTAGE);
};
