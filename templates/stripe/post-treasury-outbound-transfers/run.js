const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    amount,
    currency,
    destination_payment_method,
    financial_account,
    description,
    destination_payment_method_options,
    expand,
    metadata,
    statement_descriptor,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/treasury/outbound_transfers",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        amount,
        currency,
        destination_payment_method,
        financial_account,
        ...(description ? { description } : {}),
        ...(destination_payment_method_options ? { destination_payment_method_options } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(statement_descriptor ? { statement_descriptor } : {}),
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
const verifyInput = ({
  BUILDABLE_STRIPE_API_KEY,
  amount,
  currency,
  destination_payment_method,
  financial_account,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_AMOUNT: "A valid amount field (number) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
    INVALID_DESTINATION_PAYMENT_METHOD:
      "A valid destination_payment_method field (string) was not provided in the input.",
    INVALID_FINANCIAL_ACCOUNT:
      "A valid financial_account field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof amount !== "number") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
  if (typeof destination_payment_method !== "string")
    throw new Error(ERRORS.INVALID_DESTINATION_PAYMENT_METHOD);
  if (typeof financial_account !== "string") throw new Error(ERRORS.INVALID_FINANCIAL_ACCOUNT);
};
