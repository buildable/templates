const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    session: "string", // Required

    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // options: {
    //     document: {
    //       allowed_types: ["driving_license"],
    //       require_id_number: true,
    //       require_live_capture: true,
    //       require_matching_selfie: true
    //     }
    //   },
    // type: "document",
  };
};
