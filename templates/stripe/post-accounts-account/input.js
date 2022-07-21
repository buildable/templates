const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    account: "string", // Required

    // account_token: "string",
    // bank_account: {
    //     account_holder_name: "string",
    //     account_holder_type: "company",
    //     account_number: "string",
    //     account_type: "checking",
    //     country: "string",
    //     currency: "string",
    //     object: "bank_account",
    //     routing_number: "string"
    //   },
    // business_profile: {
    //     mcc: "string",
    //     name: "string",
    //     product_description: "string",
    //     support_address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     support_email: "string",
    //     support_phone: "string",
    //     support_url: "string",
    //     url: "string"
    //   },
    // business_type: "company",
    // capabilities: {
    //     acss_debit_payments: { requested: true },
    //     affirm_payments: { requested: true },
    //     afterpay_clearpay_payments: { requested: true },
    //     au_becs_debit_payments: { requested: true },
    //     bacs_debit_payments: { requested: true },
    //     bancontact_payments: { requested: true },
    //     bank_transfer_payments: { requested: true },
    //     blik_payments: { requested: true },
    //     boleto_payments: { requested: true },
    //     card_issuing: { requested: true },
    //     card_payments: { requested: true },
    //     cartes_bancaires_payments: { requested: true },
    //     eps_payments: { requested: true },
    //     fpx_payments: { requested: true },
    //     giropay_payments: { requested: true },
    //     grabpay_payments: { requested: true },
    //     ideal_payments: { requested: true },
    //     jcb_payments: { requested: true },
    //     klarna_payments: { requested: true },
    //     konbini_payments: { requested: true },
    //     legacy_payments: { requested: true },
    //     link_payments: { requested: true },
    //     oxxo_payments: { requested: true },
    //     p24_payments: { requested: true },
    //     paynow_payments: { requested: true },
    //     promptpay_payments: { requested: true },
    //     sepa_debit_payments: { requested: true },
    //     sofort_payments: { requested: true },
    //     tax_reporting_us_1099_k: { requested: true },
    //     tax_reporting_us_1099_misc: { requested: true },
    //     transfers: { requested: true },
    //     treasury: { requested: true },
    //     us_bank_account_ach_payments: { requested: true }
    //   },
    // company: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     address_kana: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string",
    //       town: "string"
    //     },
    //     address_kanji: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string",
    //       town: "string"
    //     },
    //     directors_provided: true,
    //     executives_provided: true,
    //     name: "string",
    //     name_kana: "string",
    //     name_kanji: "string",
    //     owners_provided: true,
    //     ownership_declaration: { date: 0, ip: "string", user_agent: "string" },
    //     phone: "string",
    //     registration_number: "string",
    //     structure: "",
    //     tax_id: "string",
    //     tax_id_registrar: "string",
    //     vat_id: "string",
    //     verification: { document: { back: "string", front: "string" } }
    //   },
    // default_currency: "string",
    // documents: {
    //     bank_account_ownership_verification: { files: ["string"] },
    //     company_license: { files: ["string"] },
    //     company_memorandum_of_association: { files: ["string"] },
    //     company_ministerial_decree: { files: ["string"] },
    //     company_registration_verification: { files: ["string"] },
    //     company_tax_id_verification: { files: ["string"] },
    //     proof_of_registration: { files: ["string"] }
    //   },
    // email: "string",
    // expand: ["string"],
    // external_account: "string",
    // individual: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     address_kana: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string",
    //       town: "string"
    //     },
    //     address_kanji: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string",
    //       town: "string"
    //     },
    //     dob: { day: 0, month: 0, year: 0 },
    //     email: "string",
    //     first_name: "string",
    //     first_name_kana: "string",
    //     first_name_kanji: "string",
    //     full_name_aliases: ["string"],
    //     gender: "string",
    //     id_number: "string",
    //     id_number_secondary: "string",
    //     last_name: "string",
    //     last_name_kana: "string",
    //     last_name_kanji: "string",
    //     maiden_name: "string",
    //     metadata: { property1: "string", property2: "string" },
    //     phone: "string",
    //     political_exposure: "existing",
    //     registered_address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     ssn_last_4: "string",
    //     verification: {
    //       additional_document: { back: "string", front: "string" },
    //       document: { back: "string", front: "string" }
    //     }
    //   },
    // metadata: { property1: "string", property2: "string" },
    // settings: {
    //     branding: {
    //       icon: "string",
    //       logo: "string",
    //       primary_color: "string",
    //       secondary_color: "string"
    //     },
    //     card_issuing: { tos_acceptance: { date: 0, ip: "string", user_agent: "string" } },
    //     card_payments: {
    //       decline_on: { avs_failure: true, cvc_failure: true },
    //       statement_descriptor_prefix: "string",
    //       statement_descriptor_prefix_kana: "string",
    //       statement_descriptor_prefix_kanji: "string"
    //     },
    //     payments: {
    //       statement_descriptor: "string",
    //       statement_descriptor_kana: "string",
    //       statement_descriptor_kanji: "string"
    //     },
    //     payouts: {
    //       debit_negative_balances: true,
    //       schedule: {
    //         delay_days: "minimum",
    //         interval: "daily",
    //         monthly_anchor: 0,
    //         weekly_anchor: "friday"
    //       },
    //       statement_descriptor: "string"
    //     },
    //     treasury: { tos_acceptance: { date: 0, ip: "string", user_agent: "string" } }
    //   },
    // tos_acceptance: { date: 0, ip: "string", service_agreement: "string", user_agent: "string" },
  };
};
