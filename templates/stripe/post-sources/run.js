const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    amount,
    currency,
    customer,
    expand,
    flow,
    mandate,
    metadata,
    original_source,
    owner,
    receiver,
    redirect,
    source_order,
    statement_descriptor,
    token,
    type,
    usage,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/sources",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(amount ? { amount } : {}),
        ...(currency ? { currency } : {}),
        ...(customer ? { customer } : {}),
        ...(expand ? { expand } : {}),
        ...(flow ? { flow } : {}),
        ...(mandate ? { mandate } : {}),
        ...(metadata ? { metadata } : {}),
        ...(original_source ? { original_source } : {}),
        ...(owner ? { owner } : {}),
        ...(receiver ? { receiver } : {}),
        ...(redirect ? { redirect } : {}),
        ...(source_order ? { source_order } : {}),
        ...(statement_descriptor ? { statement_descriptor } : {}),
        ...(token ? { token } : {}),
        ...(type ? { type } : {}),
        ...(usage ? { usage } : {}),
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