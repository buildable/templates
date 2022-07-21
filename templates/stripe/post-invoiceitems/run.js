const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    customer,
    amount,
    currency,
    description,
    discountable,
    discounts,
    expand,
    invoice,
    metadata,
    period,
    price,
    price_data,
    quantity,
    subscription,
    tax_rates,
    unit_amount,
    unit_amount_decimal,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/invoiceitems",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        customer,
        ...(amount ? { amount } : {}),
        ...(currency ? { currency } : {}),
        ...(description ? { description } : {}),
        ...(discountable ? { discountable } : {}),
        ...(discounts ? { discounts } : {}),
        ...(expand ? { expand } : {}),
        ...(invoice ? { invoice } : {}),
        ...(metadata ? { metadata } : {}),
        ...(period ? { period } : {}),
        ...(price ? { price } : {}),
        ...(price_data ? { price_data } : {}),
        ...(quantity ? { quantity } : {}),
        ...(subscription ? { subscription } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, customer }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CUSTOMER: "A valid customer field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof customer !== "string") throw new Error(ERRORS.INVALID_CUSTOMER);
};
