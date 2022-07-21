const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    id: "string", // Required

    // automatic_tax: { enabled: true },
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
    // currency: "string",
    // customer: "string",
    // description: "string",
    // discounts: [{ coupon: "string", discount: "string", promotion_code: "string" }],
    // expand: ["string"],
    // ip_address: "string",
    // line_items: [
    //     {
    //       description: "string",
    //       discounts: [{ coupon: "string", discount: "string" }],
    //       id: "string",
    //       price: "string",
    //       price_data: {
    //         currency: "string",
    //         product: "string",
    //         tax_behavior: "exclusive",
    //         unit_amount: 0,
    //         unit_amount_decimal: "string"
    //       },
    //       product: "string",
    //       quantity: 0,
    //       tax_rates: ["string"]
    //     }
    //   ],
    // metadata: { property1: "string", property2: "string" },
    // payment: {
    //     settings: {
    //       application_fee_amount: 0,
    //       payment_method_options: {
    //         acss_debit: {
    //           mandate_options: {
    //             custom_mandate_url: "string",
    //             interval_description: "string",
    //             payment_schedule: "combined",
    //             transaction_type: "business"
    //           },
    //           setup_future_usage: "",
    //           verification_method: "automatic"
    //         },
    //         afterpay_clearpay: {
    //           capture_method: "automatic",
    //           reference: "string",
    //           setup_future_usage: "none"
    //         },
    //         alipay: { setup_future_usage: "" },
    //         bancontact: { preferred_language: "de", setup_future_usage: "" },
    //         card: { capture_method: "automatic", setup_future_usage: "none" },
    //         customer_balance: {
    //           bank_transfer: {
    //             eu_bank_transfer: { country: "string" },
    //             requested_address_types: ["iban"],
    //             type: "eu_bank_transfer"
    //           },
    //           funding_type: "bank_transfer",
    //           setup_future_usage: "none"
    //         },
    //         ideal: { setup_future_usage: "" },
    //         klarna: { capture_method: "", preferred_locale: "da-DK", setup_future_usage: "none" },
    //         link: { capture_method: "", persistent_token: "string", setup_future_usage: "" },
    //         oxxo: { expires_after_days: 0, setup_future_usage: "none" },
    //         p24: { setup_future_usage: "none", tos_shown_and_accepted: true },
    //         sepa_debit: { mandate_options: {}, setup_future_usage: "" },
    //         sofort: { preferred_language: "", setup_future_usage: "" },
    //         wechat_pay: { app_id: "string", client: "android", setup_future_usage: "none" }
    //       },
    //       payment_method_types: ["acss_debit"],
    //       return_url: "string",
    //       statement_descriptor: "string",
    //       statement_descriptor_suffix: "string",
    //       transfer_data: { amount: 0, destination: "string" }
    //     }
    //   },
    // shipping_cost: {
    //     shipping_rate: "string",
    //     shipping_rate_data: {
    //       delivery_estimate: {
    //         maximum: { unit: "business_day", value: 0 },
    //         minimum: { unit: "business_day", value: 0 }
    //       },
    //       display_name: "string",
    //       fixed_amount: {
    //         amount: 0,
    //         currency: "string",
    //         currency_options: {
    //           property1: { amount: 0, tax_behavior: "exclusive" },
    //           property2: { amount: 0, tax_behavior: "exclusive" }
    //         }
    //       },
    //       metadata: { property1: "string", property2: "string" },
    //       tax_behavior: "exclusive",
    //       tax_code: "string",
    //       type: "fixed_amount"
    //     }
    //   },
    // shipping_details: {
    //     address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     name: "string",
    //     phone: "string"
    //   },
    // tax_details: { tax_exempt: "", tax_ids: [{ type: "ae_trn", value: "string" }] },
  };
};
