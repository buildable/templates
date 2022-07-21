const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    payment_link,
    active,
    after_completion,
    allow_promotion_codes,
    automatic_tax,
    billing_address_collection,
    customer_creation,
    expand,
    line_items,
    metadata,
    payment_method_types,
    shipping_address_collection,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/payment_links/${payment_link}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(active ? { active } : {}),
        ...(after_completion ? { after_completion } : {}),
        ...(allow_promotion_codes ? { allow_promotion_codes } : {}),
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(billing_address_collection ? { billing_address_collection } : {}),
        ...(customer_creation ? { customer_creation } : {}),
        ...(expand ? { expand } : {}),
        ...(line_items ? { line_items } : {}),
        ...(metadata ? { metadata } : {}),
        ...(payment_method_types ? { payment_method_types } : {}),
        ...(shipping_address_collection ? { shipping_address_collection } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, payment_link }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_PAYMENT_LINK: "A valid payment_link field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof payment_link !== "string") throw new Error(ERRORS.INVALID_PAYMENT_LINK);
};
