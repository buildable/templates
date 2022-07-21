const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    charge,
    amount,
    application_fee,
    application_fee_amount,
    expand,
    receipt_email,
    statement_descriptor,
    statement_descriptor_suffix,
    transfer_data,
    transfer_group,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/charges/${charge}/capture`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(amount ? { amount } : {}),
        ...(application_fee ? { application_fee } : {}),
        ...(application_fee_amount ? { application_fee_amount } : {}),
        ...(expand ? { expand } : {}),
        ...(receipt_email ? { receipt_email } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, charge }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CHARGE: "A valid charge field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof charge !== "string") throw new Error(ERRORS.INVALID_CHARGE);
};
