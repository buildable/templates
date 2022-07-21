const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    configuration: "string", // Required

    // bbpos_wisepos_e: { splashscreen: "string" },
    // expand: ["string"],
    // tipping: {
    //     aud: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     cad: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     chf: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     czk: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     dkk: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     eur: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     gbp: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     hkd: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     myr: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     nok: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     nzd: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     sek: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     sgd: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 },
    //     usd: { fixed_amounts: [0], percentages: [0], smart_tip_threshold: 0 }
    //   },
    // verifone_p400: { splashscreen: "string" },
  };
};
