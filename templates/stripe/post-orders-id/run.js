const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    id,
    automatic_tax,
    billing_details,
    currency,
    customer,
    description,
    discounts,
    expand,
    ip_address,
    line_items,
    metadata,
    payment,
    shipping_cost,
    shipping_details,
    tax_details,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/orders/${id}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(billing_details ? { billing_details } : {}),
        ...(currency ? { currency } : {}),
        ...(customer ? { customer } : {}),
        ...(description ? { description } : {}),
        ...(discounts ? { discounts } : {}),
        ...(expand ? { expand } : {}),
        ...(ip_address ? { ip_address } : {}),
        ...(line_items ? { line_items } : {}),
        ...(metadata ? { metadata } : {}),
        ...(payment ? { payment } : {}),
        ...(shipping_cost ? { shipping_cost } : {}),
        ...(shipping_details ? { shipping_details } : {}),
        ...(tax_details ? { tax_details } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_ID: "A valid id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof id !== "string") throw new Error(ERRORS.INVALID_ID);
};
