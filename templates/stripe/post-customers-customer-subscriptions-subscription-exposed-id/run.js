const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    customer,
    subscription_exposed_id,
    add_invoice_items,
    application_fee_percent,
    automatic_tax,
    billing_cycle_anchor,
    billing_thresholds,
    cancel_at,
    cancel_at_period_end,
    collection_method,
    coupon,
    days_until_due,
    default_payment_method,
    default_source,
    default_tax_rates,
    expand,
    items,
    metadata,
    off_session,
    pause_collection,
    payment_behavior,
    payment_settings,
    pending_invoice_item_interval,
    promotion_code,
    proration_behavior,
    proration_date,
    transfer_data,
    trial_end,
    trial_from_plan,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/customers/${customer}/subscriptions/${subscription_exposed_id}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(add_invoice_items ? { add_invoice_items } : {}),
        ...(application_fee_percent ? { application_fee_percent } : {}),
        ...(automatic_tax ? { automatic_tax } : {}),
        ...(billing_cycle_anchor ? { billing_cycle_anchor } : {}),
        ...(billing_thresholds ? { billing_thresholds } : {}),
        ...(cancel_at ? { cancel_at } : {}),
        ...(cancel_at_period_end ? { cancel_at_period_end } : {}),
        ...(collection_method ? { collection_method } : {}),
        ...(coupon ? { coupon } : {}),
        ...(days_until_due ? { days_until_due } : {}),
        ...(default_payment_method ? { default_payment_method } : {}),
        ...(default_source ? { default_source } : {}),
        ...(default_tax_rates ? { default_tax_rates } : {}),
        ...(expand ? { expand } : {}),
        ...(items ? { items } : {}),
        ...(metadata ? { metadata } : {}),
        ...(off_session ? { off_session } : {}),
        ...(pause_collection ? { pause_collection } : {}),
        ...(payment_behavior ? { payment_behavior } : {}),
        ...(payment_settings ? { payment_settings } : {}),
        ...(pending_invoice_item_interval ? { pending_invoice_item_interval } : {}),
        ...(promotion_code ? { promotion_code } : {}),
        ...(proration_behavior ? { proration_behavior } : {}),
        ...(proration_date ? { proration_date } : {}),
        ...(transfer_data ? { transfer_data } : {}),
        ...(trial_end ? { trial_end } : {}),
        ...(trial_from_plan ? { trial_from_plan } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, customer, subscription_exposed_id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CUSTOMER: "A valid customer field (string) was not provided in the input.",
    INVALID_SUBSCRIPTION_EXPOSED_ID:
      "A valid subscription_exposed_id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof customer !== "string") throw new Error(ERRORS.INVALID_CUSTOMER);
  if (typeof subscription_exposed_id !== "string")
    throw new Error(ERRORS.INVALID_SUBSCRIPTION_EXPOSED_ID);
};
