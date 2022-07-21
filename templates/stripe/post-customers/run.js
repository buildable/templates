const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    address,
    balance,
    cash_balance,
    coupon,
    description,
    email,
    expand,
    invoice_prefix,
    invoice_settings,
    metadata,
    name,
    next_invoice_sequence,
    payment_method,
    phone,
    preferred_locales,
    promotion_code,
    shipping,
    source,
    tax,
    tax_exempt,
    tax_id_data,
    test_clock,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/customers",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(address ? { address } : {}),
        ...(balance ? { balance } : {}),
        ...(cash_balance ? { cash_balance } : {}),
        ...(coupon ? { coupon } : {}),
        ...(description ? { description } : {}),
        ...(email ? { email } : {}),
        ...(expand ? { expand } : {}),
        ...(invoice_prefix ? { invoice_prefix } : {}),
        ...(invoice_settings ? { invoice_settings } : {}),
        ...(metadata ? { metadata } : {}),
        ...(name ? { name } : {}),
        ...(next_invoice_sequence ? { next_invoice_sequence } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(phone ? { phone } : {}),
        ...(preferred_locales ? { preferred_locales } : {}),
        ...(promotion_code ? { promotion_code } : {}),
        ...(shipping ? { shipping } : {}),
        ...(source ? { source } : {}),
        ...(tax ? { tax } : {}),
        ...(tax_exempt ? { tax_exempt } : {}),
        ...(tax_id_data ? { tax_id_data } : {}),
        ...(test_clock ? { test_clock } : {}),
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
