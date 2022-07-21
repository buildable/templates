const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    customer,
    add_invoice_items,
    application_fee_percent,
    automatic_tax,
    backdate_start_date,
    billing_cycle_anchor,
    billing_thresholds,
    cancel_at,
    cancel_at_period_end,
    collection_method,
    coupon,
    currency,
    days_until_due,
    default_payment_method,
    default_source,
    default_tax_rates,
    expand,
    items,
    metadata,
    off_session,
    payment_behavior,
    payment_settings,
    pending_invoice_item_interval,
    promotion_code,
    proration_behavior,
    transfer_data,
    trial_end,
    trial_from_plan,
    trial_period_days,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/customers/${customer}/subscriptions`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(add_invoice_items ? { add_invoice_items } : {}),
        ...(application_fee_percent ? { application_fee_percent } : {}),
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(backdate_start_date ? { backdate_start_date } : {}),
        ...(billing_cycle_anchor ? { billing_cycle_anchor } : {}),
        ...(billing_thresholds ? { billing_thresholds } : {}),
        ...(cancel_at ? { cancel_at } : {}),
        ...(cancel_at_period_end ? { cancel_at_period_end } : {}),
        ...(collection_method ? { collection_method } : {}),
        ...(coupon ? { coupon } : {}),
        ...(currency ? { currency } : {}),
        ...(days_until_due ? { days_until_due } : {}),
        ...(default_payment_method ? { default_payment_method } : {}),
        ...(default_source ? { default_source } : {}),
        ...(default_tax_rates ? { default_tax_rates } : {}),
        ...(expand ? { expand } : {}),
        ...(items ? { items } : {}),
        ...(metadata ? { metadata } : {}),
        ...(off_session ? { off_session } : {}),
        ...(payment_behavior ? { payment_behavior } : {}),
        ...(payment_settings ? { payment_settings } : {}),
        ...(pending_invoice_item_interval ? { pending_invoice_item_interval } : {}),
        ...(promotion_code ? { promotion_code } : {}),
        ...(proration_behavior ? { proration_behavior } : {}),
        ...(transfer_data ? { transfer_data } : {}),
        ...(trial_end ? { trial_end } : {}),
        ...(trial_from_plan ? { trial_from_plan } : {}),
        ...(trial_period_days ? { trial_period_days } : {}),
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
