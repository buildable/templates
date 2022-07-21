const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    price,
    active,
    currency_options,
    expand,
    lookup_key,
    metadata,
    nickname,
    tax_behavior,
    transfer_lookup_key,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/prices/${price}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(active ? { active } : {}),
        ...(currency_options ? { currency_options } : {}),
        ...(expand ? { expand } : {}),
        ...(lookup_key ? { lookup_key } : {}),
        ...(metadata ? { metadata } : {}),
        ...(nickname ? { nickname } : {}),
        ...(tax_behavior ? { tax_behavior } : {}),
        ...(transfer_lookup_key ? { transfer_lookup_key } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, price }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_PRICE: "A valid price field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof price !== "string") throw new Error(ERRORS.INVALID_PRICE);
};
