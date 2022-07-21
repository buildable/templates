const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_STRIPE_API_KEY, customer, bank_transfer, currency, funding_type, expand } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/customers/${customer}/funding_instructions`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({ bank_transfer, currency, funding_type, ...(expand ? { expand } : {}) }),
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
  BUILDABLE_STRIPE_API_KEY,
  customer,
  bank_transfer,
  currency,
  funding_type,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_CUSTOMER: "A valid customer field (string) was not provided in the input.",
    INVALID_BANK_TRANSFER: "A valid bank_transfer field (object) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
    INVALID_FUNDING_TYPE: "A valid funding_type field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof customer !== "string") throw new Error(ERRORS.INVALID_CUSTOMER);
  if (typeof bank_transfer !== "object") throw new Error(ERRORS.INVALID_BANK_TRANSFER);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
  if (typeof funding_type !== "string") throw new Error(ERRORS.INVALID_FUNDING_TYPE);
};
