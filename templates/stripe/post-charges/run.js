const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    amount,
    application_fee,
    application_fee_amount,
    capture,
    card,
    currency,
    customer,
    description,
    destination,
    expand,
    metadata,
    on_behalf_of,
    radar_options,
    receipt_email,
    shipping,
    source,
    statement_descriptor,
    statement_descriptor_suffix,
    transfer_data,
    transfer_group,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/charges",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(amount ? { amount } : {}),
        ...(application_fee ? { application_fee } : {}),
        ...(application_fee_amount ? { application_fee_amount } : {}),
        ...(capture ? { capture } : {}),
        ...(card ? { card } : {}),
        ...(currency ? { currency } : {}),
        ...(customer ? { customer } : {}),
        ...(description ? { description } : {}),
        ...(destination ? { destination } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(on_behalf_of ? { on_behalf_of } : {}),
        ...(radar_options ? { radar_options } : {}),
        ...(receipt_email ? { receipt_email } : {}),
        ...(shipping ? { shipping } : {}),
        ...(source ? { source } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
};
