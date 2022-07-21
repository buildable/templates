const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    user_ids: ["2244994945"], // Required

    // spaceFields: [
    //     "created_at",
    //     "creator_id",
    //     "ended_at",
    //     "host_ids",
    //     "id",
    //     "invited_user_ids",
    //     "is_ticketed",
    //     "lang",
    //     "participant_count",
    //     "scheduled_start",
    //     "speaker_ids",
    //     "started_at",
    //     "state",
    //     "subscriber_count",
    //     "title",
    //     "topic_ids",
    //     "updated_at"
    //   ],
    // expansions: ["creator_id", "host_ids", "invited_user_ids", "speaker_ids", "topic_ids"],
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
    // topicFields: ["description", "id", "name"],
  };
};
