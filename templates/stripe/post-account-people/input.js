const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // account: "string",
    // address: {
    //     city: "string",
    //     country: "string",
    //     line1: "string",
    //     line2: "string",
    //     postal_code: "string",
    //     state: "string"
    //   },
    // address_kana: {
    //     city: "string",
    //     country: "string",
    //     line1: "string",
    //     line2: "string",
    //     postal_code: "string",
    //     state: "string",
    //     town: "string"
    //   },
    // address_kanji: {
    //     city: "string",
    //     country: "string",
    //     line1: "string",
    //     line2: "string",
    //     postal_code: "string",
    //     state: "string",
    //     town: "string"
    //   },
    // dob: { day: 0, month: 0, year: 0 },
    // documents: {
    //     company_authorization: { files: ["string"] },
    //     passport: { files: ["string"] },
    //     visa: { files: ["string"] }
    //   },
    // email: "string",
    // expand: ["string"],
    // first_name: "string",
    // first_name_kana: "string",
    // first_name_kanji: "string",
    // full_name_aliases: ["string"],
    // gender: "string",
    // id_number: "string",
    // id_number_secondary: "string",
    // last_name: "string",
    // last_name_kana: "string",
    // last_name_kanji: "string",
    // maiden_name: "string",
    // metadata: { property1: "string", property2: "string" },
    // nationality: "string",
    // person_token: "string",
    // phone: "string",
    // political_exposure: "string",
    // registered_address: {
    //     city: "string",
    //     country: "string",
    //     line1: "string",
    //     line2: "string",
    //     postal_code: "string",
    //     state: "string"
    //   },
    // relationship: {
    //     director: true,
    //     executive: true,
    //     owner: true,
    //     percent_ownership: 0,
    //     representative: true,
    //     title: "string"
    //   },
    // ssn_last_4: "string",
    // verification: {
    //     additional_document: { back: "string", front: "string" },
    //     document: { back: "string", front: "string" }
    //   },
  };
};
