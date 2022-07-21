const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    cancel_url: "string", // Required
    success_url: "string", // Required

    // after_expiration: { recovery: { allow_promotion_codes: true, enabled: true } },
    // allow_promotion_codes: true,
    // automatic_tax: { enabled: true },
    // billing_address_collection: "auto",
    // client_reference_id: "string",
    // consent_collection: { promotions: "auto" },
    // currency: "string",
    // customer: "string",
    // customer_creation: "always",
    // customer_email: "string",
    // customer_update: { address: "auto", name: "auto", shipping: "auto" },
    // discounts: [{ coupon: "string", promotion_code: "string" }],
    // expand: ["string"],
    // expires_at: 0,
    // line_items: [
    //     {
    //       adjustable_quantity: { enabled: true, maximum: 0, minimum: 0 },
    //       dynamic_tax_rates: ["string"],
    //       price: "string",
    //       price_data: {
    //         currency: "string",
    //         product: "string",
    //         product_data: {
    //           description: "string",
    //           images: ["string"],
    //           metadata: { property1: "string", property2: "string" },
    //           name: "string",
    //           tax_code: "string"
    //         },
    //         recurring: { interval: "day", interval_count: 0 },
    //         tax_behavior: "exclusive",
    //         unit_amount: 0,
    //         unit_amount_decimal: "string"
    //       },
    //       quantity: 0,
    //       tax_rates: ["string"]
    //     }
    //   ],
    // locale: "auto",
    // metadata: { property1: "string", property2: "string" },
    // mode: "payment",
    // payment_intent_data: {
    //     application_fee_amount: 0,
    //     capture_method: "automatic",
    //     description: "string",
    //     metadata: { property1: "string", property2: "string" },
    //     on_behalf_of: "string",
    //     receipt_email: "string",
    //     setup_future_usage: "off_session",
    //     shipping: {
    //       address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       carrier: "string",
    //       name: "string",
    //       phone: "string",
    //       tracking_number: "string"
    //     },
    //     statement_descriptor: "string",
    //     statement_descriptor_suffix: "string",
    //     transfer_data: { amount: 0, destination: "string" },
    //     transfer_group: "string"
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
    //       setup_future_usage: "none",
    //       verification_method: "automatic"
    //     },
    //     affirm: { setup_future_usage: "none" },
    //     afterpay_clearpay: { setup_future_usage: "none" },
    //     alipay: { setup_future_usage: "none" },
    //     au_becs_debit: { setup_future_usage: "none" },
    //     bacs_debit: { setup_future_usage: "none" },
    //     bancontact: { setup_future_usage: "none" },
    //     boleto: { expires_after_days: 0, setup_future_usage: "none" },
    //     card: {
    //       setup_future_usage: "off_session",
    //       statement_descriptor_suffix_kana: "string",
    //       statement_descriptor_suffix_kanji: "string"
    //     },
    //     eps: { setup_future_usage: "none" },
    //     fpx: { setup_future_usage: "none" },
    //     giropay: { setup_future_usage: "none" },
    //     grabpay: { setup_future_usage: "none" },
    //     ideal: { setup_future_usage: "none" },
    //     klarna: { setup_future_usage: "none" },
    //     konbini: { expires_after_days: 0, setup_future_usage: "none" },
    //     oxxo: { expires_after_days: 0, setup_future_usage: "none" },
    //     p24: { setup_future_usage: "none", tos_shown_and_accepted: true },
    //     paynow: { setup_future_usage: "none", tos_shown_and_accepted: true },
    //     sepa_debit: { setup_future_usage: "none" },
    //     sofort: { setup_future_usage: "none" },
    //     us_bank_account: {
    //       financial_connections: { permissions: ["balances"] },
    //       setup_future_usage: "none",
    //       verification_method: "automatic"
    //     },
    //     wechat_pay: { app_id: "string", client: "android", setup_future_usage: "none" }
    //   },
    // payment_method_types: ["acss_debit"],
    // phone_number_collection: { enabled: true },
    // setup_intent_data: {
    //     description: "string",
    //     metadata: { property1: "string", property2: "string" },
    //     on_behalf_of: "string"
    //   },
    // shipping_address_collection: { allowed_countries: ["AC"] },
    // shipping_options: [
    //     {
    //       shipping_rate: "string",
    //       shipping_rate_data: {
    //         delivery_estimate: {
    //           maximum: { unit: "business_day", value: 0 },
    //           minimum: { unit: "business_day", value: 0 }
    //         },
    //         display_name: "string",
    //         fixed_amount: {
    //           amount: 0,
    //           currency: "string",
    //           currency_options: {
    //             property1: { amount: 0, tax_behavior: "exclusive" },
    //             property2: { amount: 0, tax_behavior: "exclusive" }
    //           }
    //         },
    //         metadata: { property1: "string", property2: "string" },
    //         tax_behavior: "exclusive",
    //         tax_code: "string",
    //         type: "fixed_amount"
    //       }
    //     }
    //   ],
    // submit_type: "auto",
    // subscription_data: {
    //     application_fee_percent: 0,
    //     default_tax_rates: ["string"],
    //     description: "string",
    //     items: [{ plan: "string", quantity: 0, tax_rates: ["string"] }],
    //     metadata: { property1: "string", property2: "string" },
    //     transfer_data: { amount_percent: 0, destination: "string" },
    //     trial_end: 0,
    //     trial_period_days: 0
    //   },
    // tax_id_collection: { enabled: true },
  };
};
