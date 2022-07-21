const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    id,
    active,
    attributes,
    currency,
    expand,
    image,
    inventory,
    metadata,
    package_dimensions,
    price,
    product,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/skus/${id}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(active ? { active } : {}),
        ...(attributes ? { attributes } : {}),
        ...(currency ? { currency } : {}),
        ...(expand ? { expand } : {}),
        ...(image ? { image } : {}),
        ...(inventory ? { inventory } : {}),
        ...(metadata ? { metadata } : {}),
        ...(package_dimensions ? { package_dimensions } : {}),
        ...(price ? { price } : {}),
        ...(product ? { product } : {}),
      }),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_ID: "A valid id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof id !== "string") throw new Error(ERRORS.INVALID_ID);
};
