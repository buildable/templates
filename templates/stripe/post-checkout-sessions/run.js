const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    cancel_url,
    success_url,
    after_expiration,
    allow_promotion_codes,
    automatic_tax,
    billing_address_collection,
    client_reference_id,
    consent_collection,
    currency,
    customer,
    customer_creation,
    customer_email,
    customer_update,
    discounts,
    expand,
    expires_at,
    line_items,
    locale,
    metadata,
    mode,
    payment_intent_data,
    payment_method_options,
    payment_method_types,
    phone_number_collection,
    setup_intent_data,
    shipping_address_collection,
    shipping_options,
    submit_type,
    subscription_data,
    tax_id_collection,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/checkout/sessions",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        cancel_url,
        success_url,
        ...(after_expiration ? { after_expiration } : {}),
        ...(allow_promotion_codes ? { allow_promotion_codes } : {}),
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(billing_address_collection ? { billing_address_collection } : {}),
        ...(client_reference_id ? { client_reference_id } : {}),
        ...(consent_collection ? { consent_collection } : {}),
        ...(currency ? { currency } : {}),
        ...(customer ? { customer } : {}),
        ...(customer_creation ? { customer_creation } : {}),
        ...(customer_email ? { customer_email } : {}),
        ...(customer_update ? { customer_update } : {}),
        ...(discounts ? { discounts } : {}),
        ...(expand ? { expand } : {}),
        ...(expires_at ? { expires_at } : {}),
        ...(line_items ? { line_items } : {}),
        ...(locale ? { locale } : {}),
        ...(metadata ? { metadata } : {}),
        ...(mode ? { mode } : {}),
        ...(payment_intent_data ? { payment_intent_data } : {}),
        ...(payment_method_options ? { payment_method_options } : {}),
        ...(payment_method_types ? { payment_method_types } : {}),
        ...(phone_number_collection ? { phone_number_collection } : {}),
        ...(setup_intent_data ? { setup_intent_data } : {}),
        ...(shipping_address_collection ? { shipping_address_collection } : {}),
        ...(shipping_options ? { shipping_options } : {}),
        ...(submit_type ? { submit_type } : {}),
        ...(subscription_data ? { subscription_data } : {}),
        ...(tax_id_collection ? { tax_id_collection } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, cancel_url, success_url }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CANCEL_URL: "A valid cancel_url field (string) was not provided in the input.",
    INVALID_SUCCESS_URL: "A valid success_url field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof cancel_url !== "string") throw new Error(ERRORS.INVALID_CANCEL_URL);
  if (typeof success_url !== "string") throw new Error(ERRORS.INVALID_SUCCESS_URL);
};
