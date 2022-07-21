const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required

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
    // expansions: ["pinned_tweet_id"],
    // tweetFields: [
    //     "attachments",
    //     "author_id",
    //     "context_annotations",
    //     "conversation_id",
    //     "created_at",
    //     "entities",
    //     "geo",
    //     "id",
    //     "in_reply_to_user_id",
    //     "lang",
    //     "non_public_metrics",
    //     "organic_metrics",
    //     "possibly_sensitive",
    //     "promoted_metrics",
    //     "public_metrics",
    //     "referenced_tweets",
    //     "reply_settings",
    //     "source",
    //     "text",
    //     "withheld"
    //   ],
  };
};
