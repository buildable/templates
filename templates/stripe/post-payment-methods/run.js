const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    acss_debit,
    affirm,
    afterpay_clearpay,
    alipay,
    au_becs_debit,
    bacs_debit,
    bancontact,
    billing_details,
    blik,
    boleto,
    card,
    customer,
    customer_balance,
    eps,
    expand,
    fpx,
    giropay,
    grabpay,
    ideal,
    interac_present,
    klarna,
    konbini,
    link,
    metadata,
    oxxo,
    p24,
    payment_method,
    paynow,
    promptpay,
    radar_options,
    sepa_debit,
    sofort,
    type,
    us_bank_account,
    wechat_pay,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/payment_methods",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(acss_debit ? { acss_debit } : {}),
        ...(affirm ? { affirm } : {}),
        ...(afterpay_clearpay ? { afterpay_clearpay } : {}),
        ...(alipay ? { alipay } : {}),
        ...(au_becs_debit ? { au_becs_debit } : {}),
        ...(bacs_debit ? { bacs_debit } : {}),
        ...(bancontact ? { bancontact } : {}),
        ...(billing_details ? { billing_details } : {}),
        ...(blik ? { blik } : {}),
        ...(boleto ? { boleto } : {}),
        ...(card ? { card } : {}),
        ...(customer ? { customer } : {}),
        ...(customer_balance ? { customer_balance } : {}),
        ...(eps ? { eps } : {}),
        ...(expand ? { expand } : {}),
        ...(fpx ? { fpx } : {}),
        ...(giropay ? { giropay } : {}),
        ...(grabpay ? { grabpay } : {}),
        ...(ideal ? { ideal } : {}),
        ...(interac_present ? { interac_present } : {}),
        ...(klarna ? { klarna } : {}),
        ...(konbini ? { konbini } : {}),
        ...(link ? { link } : {}),
        ...(metadata ? { metadata } : {}),
        ...(oxxo ? { oxxo } : {}),
        ...(p24 ? { p24 } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(paynow ? { paynow } : {}),
        ...(promptpay ? { promptpay } : {}),
        ...(radar_options ? { radar_options } : {}),
        ...(sepa_debit ? { sepa_debit } : {}),
        ...(sofort ? { sofort } : {}),
        ...(type ? { type } : {}),
        ...(us_bank_account ? { us_bank_account } : {}),
        ...(wechat_pay ? { wechat_pay } : {}),
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
