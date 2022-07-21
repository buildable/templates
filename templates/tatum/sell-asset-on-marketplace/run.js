const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    chain,
    contractAddress,
    nftAddress,
    seller,
    listingId,
    tokenId,
    price,
    isErc721,
    fromPrivateKey,
    erc20Address,
    amount,
    nonce,
    fee,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/blockchain/marketplace/listing/sell",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        chain,
        contractAddress,
        nftAddress,
        seller,
        listingId,
        tokenId,
        price,
        isErc721,
        fromPrivateKey,
        ...(erc20Address ? { erc20Address } : {}),
        ...(amount ? { amount } : {}),
        ...(nonce ? { nonce } : {}),
        ...(fee ? { fee } : {}),
      },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({
  BUILDABLE_TATUM_API_KEY,
  BUILDABLE_TATUM_API_URL,
  chain,
  contractAddress,
  nftAddress,
  seller,
  listingId,
  tokenId,
  price,
  isErc721,
  fromPrivateKey,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input.",
    INVALID_CHAIN: "A valid chain field (string) was not provided in the input.",
    INVALID_CONTRACT_ADDRESS:
      "A valid contractAddress field (string) was not provided in the input.",
    INVALID_NFT_ADDRESS: "A valid nftAddress field (string) was not provided in the input.",
    INVALID_SELLER: "A valid seller field (string) was not provided in the input.",
    INVALID_LISTING_ID: "A valid listingId field (string) was not provided in the input.",
    INVALID_TOKEN_ID: "A valid tokenId field (string) was not provided in the input.",
    INVALID_PRICE: "A valid price field (string) was not provided in the input.",
    INVALID_IS_ERC721: "A valid isErc721 field (boolean) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof contractAddress !== "string") throw new Error(ERRORS.INVALID_CONTRACT_ADDRESS);
  if (typeof nftAddress !== "string") throw new Error(ERRORS.INVALID_NFT_ADDRESS);
  if (typeof seller !== "string") throw new Error(ERRORS.INVALID_SELLER);
  if (typeof listingId !== "string") throw new Error(ERRORS.INVALID_LISTING_ID);
  if (typeof tokenId !== "string") throw new Error(ERRORS.INVALID_TOKEN_ID);
  if (typeof price !== "string") throw new Error(ERRORS.INVALID_PRICE);
  if (typeof isErc721 !== "boolean") throw new Error(ERRORS.INVALID_IS_ERC721);
  if (typeof fromPrivateKey !== "string") throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
};
