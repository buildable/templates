const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required
    owner: "string", // Required
    repo: "string", // Required
    check_run_id: 0, // Required

    // name: "string",
    // details_url: "string",
    // external_id: "string",
    // started_at: "2019-08-24T14:15:22Z",
    // status: "queued",
    // conclusion: "action_required",
    // completed_at: "2019-08-24T14:15:22Z",
    // output: {
    //     title: "string",
    //     summary: "string",
    //     text: "string",
    //     annotations: [
    //       {
    //         path: "string",
    //         start_line: 0,
    //         end_line: 0,
    //         start_column: 0,
    //         end_column: 0,
    //         annotation_level: "notice",
    //         message: "string",
    //         title: "string",
    //         raw_details: "string"
    //       }
    //     ],
    //     images: [{ alt: "string", image_url: "string", caption: "string" }]
    //   },
    // actions: [{ label: "string", description: "string", identifier: "string" }],
  };
};
