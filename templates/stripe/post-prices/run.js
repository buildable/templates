const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    currency,
    active,
    billing_scheme,
    currency_options,
    custom_unit_amount,
    expand,
    lookup_key,
    metadata,
    nickname,
    product,
    product_data,
    recurring,
    tax_behavior,
    tiers,
    tiers_mode,
    transfer_lookup_key,
    transform_quantity,
    unit_amount,
    unit_amount_decimal,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/prices",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        currency,
        ...(active ? { active } : {}),
        ...(billing_scheme ? { billing_scheme } : {}),
        ...(currency_options ? { currency_options } : {}),
        ...(custom_unit_amount ? { custom_unit_amount } : {}),
        ...(expand ? { expand } : {}),
        ...(lookup_key ? { lookup_key } : {}),
        ...(metadata ? { metadata } : {}),
        ...(nickname ? { nickname } : {}),
        ...(product ? { product } : {}),
        ...(product_data ? { product_data } : {}),
        ...(recurring ? { recurring } : {}),
        ...(tax_behavior ? { tax_behavior } : {}),
        ...(tiers ? { tiers } : {}),
        ...(tiers_mode ? { tiers_mode } : {}),
        ...(transfer_lookup_key ? { transfer_lookup_key } : {}),
        ...(transform_quantity ? { transform_quantity } : {}),
        ...(unit_amount ? { unit_amount } : {}),
        ...(unit_amount_decimal ? { unit_amount_decimal } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, currency }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
};
