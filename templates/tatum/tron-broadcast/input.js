const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    txData:
      "{raw_data: {contract:[{parameter:{\value:{amount:1000,owner_address:\41608f8da72479edc7dd921e4c30bb7e7cddbe722e,\to_address:\41e9d79cc47518930bc322d9bf7cddd260a0260a8d},\type_url:\type.googleapis.com/protocol.TransferContract},\type:TransferContract}],\ref_block_bytes:\5e4b,\ref_block_hash:\47c9dc89341b300d,expiration:1591089627000,\timestamp:1591089567635},raw_data_hex: 0a025e4b220847c9dc89341b300d40f8fed3a2a72e5a66080112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412310a1541608f8da72479edc7dd921e4c30bb7e7cddbe722e121541e9d79cc47518930bc322d9bf7cddd260a0260a8d18e8077093afd0a2a72e}", // Required
  };
};
