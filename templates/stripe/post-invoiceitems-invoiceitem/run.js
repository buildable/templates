const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    invoiceitem,
    amount,
    description,
    discountable,
    discounts,
    expand,
    metadata,
    period,
    price,
    price_data,
    quantity,
    tax_rates,
    unit_amount,
    unit_amount_decimal,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/invoiceitems/${invoiceitem}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(amount ? { amount } : {}),
        ...(description ? { description } : {}),
        ...(discountable ? { discountable } : {}),
        ...(discounts ? { discounts } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(period ? { period } : {}),
        ...(price ? { price } : {}),
        ...(price_data ? { price_data } : {}),
        ...(quantity ? { quantity } : {}),
        ...(tax_rates ? { tax_rates } : {}),
        ...(unit_amount ? { unit_amount } : {}),
        ...(unit_amount_decimal ? { unit_amount_decimal } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, invoiceitem }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_INVOICEITEM: "A valid invoiceitem field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof invoiceitem !== "string") throw new Error(ERRORS.INVALID_INVOICEITEM);
};
