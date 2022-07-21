const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    intent: "string", // Required

    // client_secret: "string",
    // expand: ["string"],
    // mandate_data: {
    //     customer_acceptance: {
    //       accepted_at: 0,
    //       offline: {},
    //       online: { ip_address: "string", user_agent: "string" },
    //       type: "offline"
    //     }
    //   },
    // payment_method: "string",
    // payment_method_data: {
    //     acss_debit: {
    //       account_number: "string",
    //       institution_number: "string",
    //       transit_number: "string"
    //     },
    //     affirm: {},
    //     afterpay_clearpay: {},
    //     alipay: {},
    //     au_becs_debit: { account_number: "string", bsb_number: "string" },
    //     bacs_debit: { account_number: "string", sort_code: "string" },
    //     bancontact: {},
    //     billing_details: {
    //       address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       email: "string",
    //       name: "string",
    //       phone: "string"
    //     },
    //     blik: {},
    //     boleto: { tax_id: "string" },
    //     customer_balance: {},
    //     eps: { bank: "arzte_und_apotheker_bank" },
    //     fpx: { bank: "affin_bank" },
    //     giropay: {},
    //     grabpay: {},
    //     ideal: { bank: "abn_amro" },
    //     interac_present: {},
    //     klarna: { dob: { day: 0, month: 0, year: 0 } },
    //     konbini: {},
    //     link: {},
    //     metadata: { property1: "string", property2: "string" },
    //     oxxo: {},
    //     p24: { bank: "alior_bank" },
    //     paynow: {},
    //     promptpay: {},
    //     radar_options: { session: "string" },
    //     sepa_debit: { iban: "string" },
    //     sofort: { country: "AT" },
    //     type: "acss_debit",
    //     us_bank_account: {
    //       account_holder_type: "company",
    //       account_number: "string",
    //       account_type: "checking",
    //       financial_connections_account: "string",
    //       routing_number: "string"
    //     },
    //     wechat_pay: {}
    //   },
    // payment_method_options: {
    //     acss_debit: {
    //       currency: "cad",
    //       mandate_options: {
    //         custom_mandate_url: "string",
    //         default_for: ["invoice"],
    //         interval_description: "string",
    //         payment_schedule: "combined",
    //         transaction_type: "business"
    //       },
    //       verification_method: "automatic"
    //     },
    //     blik: { code: "string" },
    //     card: {
    //       mandate_options: {
    //         amount: 0,
    //         amount_type: "fixed",
    //         currency: "string",
    //         description: "string",
    //         end_date: 0,
    //         interval: "day",
    //         interval_count: 0,
    //         reference: "string",
    //         start_date: 0,
    //         supported_types: ["india"]
    //       },
    //       request_three_d_secure: "any"
    //     },
    //     link: { persistent_token: "string" },
    //     sepa_debit: { mandate_options: {} },
    //     us_bank_account: {
    //       financial_connections: { permissions: ["balances"], return_url: "string" },
    //       networks: { requested: ["ach"] },
    //       verification_method: "automatic"
    //     }
    //   },
    // return_url: "string",
  };
};
