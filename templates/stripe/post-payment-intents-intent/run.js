const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    intent,
    amount,
    application_fee_amount,
    capture_method,
    currency,
    customer,
    description,
    expand,
    metadata,
    payment_method,
    payment_method_data,
    payment_method_options,
    payment_method_types,
    receipt_email,
    setup_future_usage,
    shipping,
    statement_descriptor,
    statement_descriptor_suffix,
    transfer_data,
    transfer_group,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/payment_intents/${intent}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(amount ? { amount } : {}),
        ...(application_fee_amount ? { application_fee_amount } : {}),
        ...(capture_method ? { capture_method } : {}),
        ...(currency ? { currency } : {}),
        ...(customer ? { customer } : {}),
        ...(description ? { description } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(payment_method_data ? { payment_method_data } : {}),
        ...(payment_method_options ? { payment_method_options } : {}),
        ...(payment_method_types ? { payment_method_types } : {}),
        ...(receipt_email ? { receipt_email } : {}),
        ...(setup_future_usage ? { setup_future_usage } : {}),
        ...(shipping ? { shipping } : {}),
        ...(statement_descriptor ? { statement_descriptor } : {}),
        ...(statement_descriptor_suffix ? { statement_descriptor_suffix } : {}),
        ...(transfer_data ? { transfer_data } : {}),
        ...(transfer_group ? { transfer_group } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, intent }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_INTENT: "A valid intent field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof intent !== "string") throw new Error(ERRORS.INVALID_INTENT);
};
