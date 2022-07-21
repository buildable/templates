const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    invoice,
    amount,
    credit_amount,
    expand,
    lines,
    memo,
    metadata,
    out_of_band_amount,
    reason,
    refund,
    refund_amount,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/credit_notes",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        invoice,
        ...(amount ? { amount } : {}),
        ...(credit_amount ? { credit_amount } : {}),
        ...(expand ? { expand } : {}),
        ...(lines ? { lines } : {}),
        ...(memo ? { memo } : {}),
        ...(metadata ? { metadata } : {}),
        ...(out_of_band_amount ? { out_of_band_amount } : {}),
        ...(reason ? { reason } : {}),
        ...(refund ? { refund } : {}),
        ...(refund_amount ? { refund_amount } : {}),
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
