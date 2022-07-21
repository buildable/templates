const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    application_fee_amount,
    application_fee_percent,
    automatic_tax,
    collection_method,
    customer,
    default_tax_rates,
    description,
    discounts,
    expand,
    expires_at,
    footer,
    from_quote,
    header,
    invoice_settings,
    line_items,
    metadata,
    on_behalf_of,
    subscription_data,
    test_clock,
    transfer_data,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/quotes",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(application_fee_amount ? { application_fee_amount } : {}),
        ...(application_fee_percent ? { application_fee_percent } : {}),
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(collection_method ? { collection_method } : {}),
        ...(customer ? { customer } : {}),
        ...(default_tax_rates ? { default_tax_rates } : {}),
        ...(description ? { description } : {}),
        ...(discounts ? { discounts } : {}),
        ...(expand ? { expand } : {}),
        ...(expires_at ? { expires_at } : {}),
        ...(footer ? { footer } : {}),
        ...(from_quote ? { from_quote } : {}),
        ...(header ? { header } : {}),
        ...(invoice_settings ? { invoice_settings } : {}),
        ...(line_items ? { line_items } : {}),
        ...(metadata ? { metadata } : {}),
        ...(on_behalf_of ? { on_behalf_of } : {}),
        ...(subscription_data ? { subscription_data } : {}),
        ...(test_clock ? { test_clock } : {}),
        ...(transfer_data ? { transfer_data } : {}),
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
