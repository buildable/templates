const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required

    // direct_message_deep_link: "string",
    // for_super_followers_only: false,
    // geo: { place_id: "string" },
    // media: { media_ids: ["1146654567674912769"], tagged_user_ids: ["2244994945"] },
    // poll: { duration_minutes: 5, options: ["string", "string"], reply_settings: "following" },
    // quote_tweet_id: "1346889436626259968",
    // reply: { exclude_reply_user_ids: ["2244994945"], in_reply_to_tweet_id: "1346889436626259968" },
    // reply_settings: "following",
    // text: "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\u2026 https://t.co/56a0vZUx7i",
  };
};
