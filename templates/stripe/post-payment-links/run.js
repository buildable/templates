const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    line_items,
    after_completion,
    allow_promotion_codes,
    application_fee_amount,
    application_fee_percent,
    automatic_tax,
    billing_address_collection,
    consent_collection,
    currency,
    customer_creation,
    expand,
    metadata,
    on_behalf_of,
    payment_intent_data,
    payment_method_types,
    phone_number_collection,
    shipping_address_collection,
    shipping_options,
    submit_type,
    subscription_data,
    tax_id_collection,
    transfer_data,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/payment_links",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        line_items,
        ...(after_completion ? { after_completion } : {}),
        ...(allow_promotion_codes ? { allow_promotion_codes } : {}),
        ...(application_fee_amount ? { application_fee_amount } : {}),
        ...(application_fee_percent ? { application_fee_percent } : {}),
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(billing_address_collection ? { billing_address_collection } : {}),
        ...(consent_collection ? { consent_collection } : {}),
        ...(currency ? { currency } : {}),
        ...(customer_creation ? { customer_creation } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(on_behalf_of ? { on_behalf_of } : {}),
        ...(payment_intent_data ? { payment_intent_data } : {}),
        ...(payment_method_types ? { payment_method_types } : {}),
        ...(phone_number_collection ? { phone_number_collection } : {}),
        ...(shipping_address_collection ? { shipping_address_collection } : {}),
        ...(shipping_options ? { shipping_options } : {}),
        ...(submit_type ? { submit_type } : {}),
        ...(subscription_data ? { subscription_data } : {}),
        ...(tax_id_collection ? { tax_id_collection } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, line_items }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_LINE_ITEMS: "A valid line_items field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof line_items !== "object") throw new Error(ERRORS.INVALID_LINE_ITEMS);
};
