const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    automatic_tax,
    coupon,
    currency,
    customer,
    customer_details,
    discounts,
    ending_before,
    expand,
    invoice_items,
    limit,
    schedule,
    starting_after,
    subscription,
    subscription_billing_cycle_anchor,
    subscription_cancel_at,
    subscription_cancel_at_period_end,
    subscription_cancel_now,
    subscription_default_tax_rates,
    subscription_items,
    subscription_proration_behavior,
    subscription_proration_date,
    subscription_start_date,
    subscription_trial_end,
    subscription_trial_from_plan,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.stripe.com/v1/invoices/upcoming/lines",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(coupon ? { coupon } : {}),
        ...(currency ? { currency } : {}),
        ...(customer ? { customer } : {}),
        ...(customer_details ? { customer_details } : {}),
        ...(discounts ? { discounts } : {}),
        ...(ending_before ? { ending_before } : {}),
        ...(expand ? { expand } : {}),
        ...(invoice_items ? { invoice_items } : {}),
        ...(limit ? { limit } : {}),
        ...(schedule ? { schedule } : {}),
        ...(starting_after ? { starting_after } : {}),
        ...(subscription ? { subscription } : {}),
        ...(subscription_billing_cycle_anchor ? { subscription_billing_cycle_anchor } : {}),
        ...(subscription_cancel_at ? { subscription_cancel_at } : {}),
        ...(subscription_cancel_at_period_end ? { subscription_cancel_at_period_end } : {}),
        ...(subscription_cancel_now ? { subscription_cancel_now } : {}),
        ...(subscription_default_tax_rates ? { subscription_default_tax_rates } : {}),
        ...(subscription_items ? { subscription_items } : {}),
        ...(subscription_proration_behavior ? { subscription_proration_behavior } : {}),
        ...(subscription_proration_date ? { subscription_proration_date } : {}),
        ...(subscription_start_date ? { subscription_start_date } : {}),
        ...(subscription_trial_end ? { subscription_trial_end } : {}),
        ...(subscription_trial_from_plan ? { subscription_trial_from_plan } : {}),
      },
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
