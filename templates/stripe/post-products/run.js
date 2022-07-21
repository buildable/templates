const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    name,
    active,
    default_price_data,
    description,
    expand,
    id,
    images,
    metadata,
    package_dimensions,
    shippable,
    statement_descriptor,
    tax_code,
    unit_label,
    url,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/products",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        name,
        ...(active ? { active } : {}),
        ...(default_price_data ? { default_price_data } : {}),
        ...(description ? { description } : {}),
        ...(expand ? { expand } : {}),
        ...(id ? { id } : {}),
        ...(images ? { images } : {}),
        ...(metadata ? { metadata } : {}),
        ...(package_dimensions ? { package_dimensions } : {}),
        ...(shippable ? { shippable } : {}),
        ...(statement_descriptor ? { statement_descriptor } : {}),
        ...(tax_code ? { tax_code } : {}),
        ...(unit_label ? { unit_label } : {}),
        ...(url ? { url } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, name }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
};
