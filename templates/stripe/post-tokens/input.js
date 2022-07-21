const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // account: {
    //     business_type: "company",
    //     company: {
    //       address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       address_kana: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string",
    //         town: "string"
    //       },
    //       address_kanji: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string",
    //         town: "string"
    //       },
    //       directors_provided: true,
    //       executives_provided: true,
    //       name: "string",
    //       name_kana: "string",
    //       name_kanji: "string",
    //       owners_provided: true,
    //       ownership_declaration: { date: 0, ip: "string", user_agent: "string" },
    //       ownership_declaration_shown_and_signed: true,
    //       phone: "string",
    //       registration_number: "string",
    //       structure: "",
    //       tax_id: "string",
    //       tax_id_registrar: "string",
    //       vat_id: "string",
    //       verification: { document: { back: "string", front: "string" } }
    //     },
    //     individual: {
    //       address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       address_kana: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string",
    //         town: "string"
    //       },
    //       address_kanji: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string",
    //         town: "string"
    //       },
    //       dob: { day: 0, month: 0, year: 0 },
    //       email: "string",
    //       first_name: "string",
    //       first_name_kana: "string",
    //       first_name_kanji: "string",
    //       full_name_aliases: ["string"],
    //       gender: "string",
    //       id_number: "string",
    //       id_number_secondary: "string",
    //       last_name: "string",
    //       last_name_kana: "string",
    //       last_name_kanji: "string",
    //       maiden_name: "string",
    //       metadata: { property1: "string", property2: "string" },
    //       phone: "string",
    //       political_exposure: "existing",
    //       registered_address: {
    //         city: "string",
    //         country: "string",
    //         line1: "string",
    //         line2: "string",
    //         postal_code: "string",
    //         state: "string"
    //       },
    //       ssn_last_4: "string",
    //       verification: {
    //         additional_document: { back: "string", front: "string" },
    //         document: { back: "string", front: "string" }
    //       }
    //     },
    //     tos_shown_and_accepted: true
    //   },
    // bank_account: {
    //     account_holder_name: "string",
    //     account_holder_type: "company",
    //     account_number: "string",
    //     account_type: "checking",
    //     country: "string",
    //     currency: "string",
    //     routing_number: "string"
    //   },
    // card: {
    //     address_city: "string",
    //     address_country: "string",
    //     address_line1: "string",
    //     address_line2: "string",
    //     address_state: "string",
    //     address_zip: "string",
    //     currency: "string",
    //     cvc: "string",
    //     exp_month: "string",
    //     exp_year: "string",
    //     name: "string",
    //     number: "string"
    //   },
    // customer: "string",
    // cvc_update: { cvc: "string" },
    // expand: ["string"],
    // person: {
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
    //     documents: {
    //       company_authorization: { files: ["string"] },
    //       passport: { files: ["string"] },
    //       visa: { files: ["string"] }
    //     },
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
    //     nationality: "string",
    //     phone: "string",
    //     political_exposure: "string",
    //     registered_address: {
    //       city: "string",
    //       country: "string",
    //       line1: "string",
    //       line2: "string",
    //       postal_code: "string",
    //       state: "string"
    //     },
    //     relationship: {
    //       director: true,
    //       executive: true,
    //       owner: true,
    //       percent_ownership: 0,
    //       representative: true,
    //       title: "string"
    //     },
    //     ssn_last_4: "string",
    //     verification: {
    //       additional_document: { back: "string", front: "string" },
    //       document: { back: "string", front: "string" }
    //     }
    //   },
    // pii: { id_number: "string" },
  };
};
