const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    intent: "string", // Required

    // amount: 0,
    // application_fee_amount: 0,
    // capture_method: "automatic",
    // currency: "string",
    // customer: "string",
    // description: "string",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
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
    //       mandate_options: {
    //         custom_mandate_url: "string",
    //         interval_description: "string",
    //         payment_schedule: "combined",
    //         transaction_type: "business"
    //       },
    //       setup_future_usage: "",
    //       verification_method: "automatic"
    //     },
    //     affirm: { capture_method: "", setup_future_usage: "none" },
    //     afterpay_clearpay: { capture_method: "", reference: "string", setup_future_usage: "none" },
    //     alipay: { setup_future_usage: "" },
    //     au_becs_debit: { setup_future_usage: "" },
    //     bacs_debit: { setup_future_usage: "" },
    //     bancontact: { preferred_language: "de", setup_future_usage: "" },
    //     blik: { code: "string" },
    //     boleto: { expires_after_days: 0, setup_future_usage: "" },
    //     card: {
    //       capture_method: "",
    //       cvc_token: "string",
    //       installments: { enabled: true, plan: { count: 0, interval: "month", type: "fixed_count" } },
    //       mandate_options: {
    //         amount: 0,
    //         amount_type: "fixed",
    //         description: "string",
    //         end_date: 0,
    //         interval: "day",
    //         interval_count: 0,
    //         reference: "string",
    //         start_date: 0,
    //         supported_types: ["india"]
    //       },
    //       network: "amex",
    //       request_three_d_secure: "any",
    //       setup_future_usage: "",
    //       statement_descriptor_suffix_kana: "string",
    //       statement_descriptor_suffix_kanji: "string"
    //     },
    //     card_present: {
    //       request_extended_authorization: true,
    //       request_incremental_authorization_support: true
    //     },
    //     customer_balance: {
    //       bank_transfer: {
    //         eu_bank_transfer: { country: "string" },
    //         requested_address_types: ["iban"],
    //         type: "eu_bank_transfer"
    //       },
    //       funding_type: "bank_transfer",
    //       setup_future_usage: "none"
    //     },
    //     eps: { setup_future_usage: "none" },
    //     fpx: { setup_future_usage: "none" },
    //     giropay: { setup_future_usage: "none" },
    //     grabpay: { setup_future_usage: "none" },
    //     ideal: { setup_future_usage: "" },
    //     interac_present: {},
    //     klarna: { capture_method: "", preferred_locale: "da-DK", setup_future_usage: "none" },
    //     konbini: {
    //       confirmation_number: "string",
    //       expires_after_days: 0,
    //       expires_at: 0,
    //       product_description: "string",
    //       setup_future_usage: "none"
    //     },
    //     link: { capture_method: "", persistent_token: "string", setup_future_usage: "" },
    //     oxxo: { expires_after_days: 0, setup_future_usage: "none" },
    //     p24: { setup_future_usage: "none", tos_shown_and_accepted: true },
    //     paynow: { setup_future_usage: "none" },
    //     promptpay: { setup_future_usage: "none" },
    //     sepa_debit: { mandate_options: {}, setup_future_usage: "" },
    //     sofort: { preferred_language: "", setup_future_usage: "" },
    //     us_bank_account: {
    //       financial_connections: { permissions: ["balances"], return_url: "string" },
    //       networks: { requested: ["ach"] },
    //       setup_future_usage: "",
    //       verification_method: "automatic"
    //     },
    //     wechat_pay: { app_id: "string", client: "android", setup_future_usage: "none" }
    //   },
    // payment_method_types: ["string"],
    // receipt_email: "string",
    // setup_future_usage: "",
    // shipping: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     carrier: "string",
    //     name: "string",
    //     phone: "string",
    //     tracking_number: "string"
    //   },
    // statement_descriptor: "string",
    // statement_descriptor_suffix: "string",
    // transfer_data: { amount: 0 },
    // transfer_group: "string",
  };
};
