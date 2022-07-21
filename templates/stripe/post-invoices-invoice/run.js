const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    invoice,
    account_tax_ids,
    application_fee_amount,
    auto_advance,
    automatic_tax,
    collection_method,
    custom_fields,
    days_until_due,
    default_payment_method,
    default_source,
    default_tax_rates,
    description,
    discounts,
    due_date,
    expand,
    footer,
    metadata,
    on_behalf_of,
    payment_settings,
    rendering_options,
    statement_descriptor,
    transfer_data,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/invoices/${invoice}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(account_tax_ids ? { account_tax_ids } : {}),
        ...(application_fee_amount ? { application_fee_amount } : {}),
        ...(auto_advance ? { auto_advance } : {}),
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(collection_method ? { collection_method } : {}),
        ...(custom_fields ? { custom_fields } : {}),
        ...(days_until_due ? { days_until_due } : {}),
        ...(default_payment_method ? { default_payment_method } : {}),
        ...(default_source ? { default_source } : {}),
        ...(default_tax_rates ? { default_tax_rates } : {}),
        ...(description ? { description } : {}),
        ...(discounts ? { discounts } : {}),
        ...(due_date ? { due_date } : {}),
        ...(expand ? { expand } : {}),
        ...(footer ? { footer } : {}),
        ...(metadata ? { metadata } : {}),
        ...(on_behalf_of ? { on_behalf_of } : {}),
        ...(payment_settings ? { payment_settings } : {}),
        ...(rendering_options ? { rendering_options } : {}),
        ...(statement_descriptor ? { statement_descriptor } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, invoice }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_INVOICE: "A valid invoice field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof invoice !== "string") throw new Error(ERRORS.INVALID_INVOICE);
};
