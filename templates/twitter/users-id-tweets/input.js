const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    id: "2244994945", // Required

    // since_id: "1346889436626259968",
    // until_id: "1346889436626259968",
    // max_results: 5,
    // pagination_token: "string",
    // exclude: ["replies", "retweets"],
    // start_time: "2019-08-24T14:15:22Z",
    // end_time: "2019-08-24T14:15:22Z",
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
    // expansions: [
    //     "attachments.media_keys",
    //     "attachments.poll_ids",
    //     "author_id",
    //     "entities.mentions.username",
    //     "geo.place_id",
    //     "in_reply_to_user_id",
    //     "referenced_tweets.id",
    //     "referenced_tweets.id.author_id"
    //   ],
    // mediaFields: [
    //     "alt_text",
    //     "duration_ms",
    //     "height",
    //     "media_key",
    //     "non_public_metrics",
    //     "organic_metrics",
    //     "preview_image_url",
    //     "promoted_metrics",
    //     "public_metrics",
    //     "type",
    //     "url",
    //     "variants",
    //     "width"
    //   ],
    // pollFields: ["duration_minutes", "end_datetime", "id", "options", "voting_status"],
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
    // placeFields: [
    //     "contained_within",
    //     "country",
    //     "country_code",
    //     "full_name",
    //     "geo",
    //     "id",
    //     "name",
    //     "place_type"
    //   ],
  };
};
