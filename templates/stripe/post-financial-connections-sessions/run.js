const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_STRIPE_API_KEY, account_holder, permissions, expand, filters, return_url } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/financial_connections/sessions",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        account_holder,
        permissions,
        ...(expand ? { expand } : {}),
        ...(filters ? { filters } : {}),
        ...(return_url ? { return_url } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, account_holder, permissions }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_ACCOUNT_HOLDER: "A valid account_holder field (object) was not provided in the input.",
    INVALID_PERMISSIONS: "A valid permissions field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof account_holder !== "object") throw new Error(ERRORS.INVALID_ACCOUNT_HOLDER);
  if (typeof permissions !== "object") throw new Error(ERRORS.INVALID_PERMISSIONS);
};
