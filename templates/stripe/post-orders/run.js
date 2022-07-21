const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    currency,
    line_items,
    automatic_tax,
    billing_details,
    customer,
    description,
    discounts,
    expand,
    ip_address,
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
      url: "https://api.stripe.com/v1/orders",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        currency,
        line_items,
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(billing_details ? { billing_details } : {}),
        ...(customer ? { customer } : {}),
        ...(description ? { description } : {}),
        ...(discounts ? { discounts } : {}),
        ...(expand ? { expand } : {}),
        ...(ip_address ? { ip_address } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, currency, line_items }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
    INVALID_LINE_ITEMS: "A valid line_items field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
  if (typeof line_items !== "object") throw new Error(ERRORS.INVALID_LINE_ITEMS);
};
