const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    customer,
    address,
    balance,
    bank_account,
    card,
    cash_balance,
    coupon,
    default_alipay_account,
    default_bank_account,
    default_card,
    default_source,
    description,
    email,
    expand,
    invoice_prefix,
    invoice_settings,
    metadata,
    name,
    next_invoice_sequence,
    phone,
    preferred_locales,
    promotion_code,
    shipping,
    source,
    tax,
    tax_exempt,
    trial_end,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/customers/${customer}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(address ? { address } : {}),
        ...(balance ? { balance } : {}),
        ...(bank_account ? { bank_account } : {}),
        ...(card ? { card } : {}),
        ...(cash_balance ? { cash_balance } : {}),
        ...(coupon ? { coupon } : {}),
        ...(default_alipay_account ? { default_alipay_account } : {}),
        ...(default_bank_account ? { default_bank_account } : {}),
        ...(default_card ? { default_card } : {}),
        ...(default_source ? { default_source } : {}),
        ...(description ? { description } : {}),
        ...(email ? { email } : {}),
        ...(expand ? { expand } : {}),
        ...(invoice_prefix ? { invoice_prefix } : {}),
        ...(invoice_settings ? { invoice_settings } : {}),
        ...(metadata ? { metadata } : {}),
        ...(name ? { name } : {}),
        ...(next_invoice_sequence ? { next_invoice_sequence } : {}),
        ...(phone ? { phone } : {}),
        ...(preferred_locales ? { preferred_locales } : {}),
        ...(promotion_code ? { promotion_code } : {}),
        ...(shipping ? { shipping } : {}),
        ...(source ? { source } : {}),
        ...(tax ? { tax } : {}),
        ...(tax_exempt ? { tax_exempt } : {}),
        ...(trial_end ? { trial_end } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, customer }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CUSTOMER: "A valid customer field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof customer !== "string") throw new Error(ERRORS.INVALID_CUSTOMER);
};
