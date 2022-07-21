const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    id: "1146654567674912769", // Required

    // listFields: [
    //     "created_at",
    //     "description",
    //     "follower_count",
    //     "id",
    //     "member_count",
    //     "name",
    //     "owner_id",
    //     "private"
    //   ],
    // expansions: ["owner_id"],
    // userFields: [
    //     "created_at",
    //     "description",
    //     "entities",
    //     "id",
    //     "location",
    //     "name",
    //     "pinned_tweet_id",
    //     "profile_image_url",
    //     "protected",
    //     "public_metrics",
    //     "url",
    //     "username",
    //     "verified",
    //     "withheld"
    //   ],
  };
};
