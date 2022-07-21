const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    invoice,
    expand,
    forgive,
    off_session,
    paid_out_of_band,
    payment_method,
    source,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/invoices/${invoice}/pay`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(expand ? { expand } : {}),
        ...(forgive ? { forgive } : {}),
        ...(off_session ? { off_session } : {}),
        ...(paid_out_of_band ? { paid_out_of_band } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(source ? { source } : {}),
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
