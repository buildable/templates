const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // acss_debit: { account_number: "string", institution_number: "string", transit_number: "string" },
    // affirm: {},
    // afterpay_clearpay: {},
    // alipay: {},
    // au_becs_debit: { account_number: "string", bsb_number: "string" },
    // bacs_debit: { account_number: "string", sort_code: "string" },
    // bancontact: {},
    // billing_details: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     email: "string",
    //     name: "string",
    //     phone: "string"
    //   },
    // blik: {},
    // boleto: { tax_id: "string" },
    // card: { cvc: "string", exp_month: 0, exp_year: 0, number: "string" },
    // customer: "string",
    // customer_balance: {},
    // eps: { bank: "arzte_und_apotheker_bank" },
    // expand: ["string"],
    // fpx: { bank: "affin_bank" },
    // giropay: {},
    // grabpay: {},
    // ideal: { bank: "abn_amro" },
    // interac_present: {},
    // klarna: { dob: { day: 0, month: 0, year: 0 } },
    // konbini: {},
    // link: {},
    // metadata: { property1: "string", property2: "string" },
    // oxxo: {},
    // p24: { bank: "alior_bank" },
    // payment_method: "string",
    // paynow: {},
    // promptpay: {},
    // radar_options: { session: "string" },
    // sepa_debit: { iban: "string" },
    // sofort: { country: "AT" },
    // type: "acss_debit",
    // us_bank_account: {
    //     account_holder_type: "company",
    //     account_number: "string",
    //     account_type: "checking",
    //     financial_connections_account: "string",
    //     routing_number: "string"
    //   },
    // wechat_pay: {},
  };
};
