const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    type: "tweets", // Required

    // status: "created",
    // compliance_jobFields: [
    //     "created_at",
    //     "download_expires_at",
    //     "download_url",
    //     "id",
    //     "name",
    //     "resumable",
    //     "status",
    //     "type",
    //     "upload_expires_at",
    //     "upload_url"
    //   ],
  };
};
