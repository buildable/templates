const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    senderAccountId: "5e68c66581f2ee32bc354087", // Required
    address: "mpTwPdF8up9kidgcAStriUPwRdnE9MRAg7", // Required
    amount: "0.001", // Required
    mnemonic: "urge pulp usage sister evidence arrest palm math please chief egg abuse", // Required
    xpub: "xpub6EsCk1uU6cJzqvP9CdsTiJwT2rF748YkPnhv5Qo8q44DG7nn2vbyt48YRsNSUYS44jFCW9gwvD9kLQu9AuqXpTpM1c5hgg9PsuBLdeNncid", // Required

    // compliant: false,
    // fee: "1",
    // multipleAmounts: ["0.1"],
    // attr: "string",
    // paymentId: "1234",
    // senderNote: "Sender note",
  };
};
