const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    amount,
    currency,
    application_fee_amount,
    automatic_payment_methods,
    capture_method,
    confirm,
    confirmation_method,
    customer,
    description,
    error_on_requires_action,
    expand,
    mandate,
    mandate_data,
    metadata,
    off_session,
    on_behalf_of,
    payment_method,
    payment_method_data,
    payment_method_options,
    payment_method_types,
    radar_options,
    receipt_email,
    return_url,
    setup_future_usage,
    shipping,
    statement_descriptor,
    statement_descriptor_suffix,
    transfer_data,
    transfer_group,
    use_stripe_sdk,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/payment_intents",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        amount,
        currency,
        ...(application_fee_amount ? { application_fee_amount } : {}),
        ...(automatic_payment_methods ? { automatic_payment_methods } : {}),
        ...(capture_method ? { capture_method } : {}),
        ...(confirm ? { confirm } : {}),
        ...(confirmation_method ? { confirmation_method } : {}),
        ...(customer ? { customer } : {}),
        ...(description ? { description } : {}),
        ...(error_on_requires_action ? { error_on_requires_action } : {}),
        ...(expand ? { expand } : {}),
        ...(mandate ? { mandate } : {}),
        ...(mandate_data ? { mandate_data } : {}),
        ...(metadata ? { metadata } : {}),
        ...(off_session ? { off_session } : {}),
        ...(on_behalf_of ? { on_behalf_of } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(payment_method_data ? { payment_method_data } : {}),
        ...(payment_method_options ? { payment_method_options } : {}),
        ...(payment_method_types ? { payment_method_types } : {}),
        ...(radar_options ? { radar_options } : {}),
        ...(receipt_email ? { receipt_email } : {}),
        ...(return_url ? { return_url } : {}),
        ...(setup_future_usage ? { setup_future_usage } : {}),
        ...(shipping ? { shipping } : {}),
        ...(statement_descriptor ? { statement_descriptor } : {}),
        ...(statement_descriptor_suffix ? { statement_descriptor_suffix } : {}),
        ...(transfer_data ? { transfer_data } : {}),
        ...(transfer_group ? { transfer_group } : {}),
        ...(use_stripe_sdk ? { use_stripe_sdk } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, amount, currency }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_AMOUNT: "A valid amount field (number) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof amount !== "number") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
};
