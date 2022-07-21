const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    financial_account,
    card_issuing,
    deposit_insurance,
    expand,
    financial_addresses,
    inbound_transfers,
    intra_stripe_flows,
    outbound_payments,
    outbound_transfers,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/treasury/financial_accounts/${financial_account}/features`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(card_issuing ? { card_issuing } : {}),
        ...(deposit_insurance ? { deposit_insurance } : {}),
        ...(expand ? { expand } : {}),
        ...(financial_addresses ? { financial_addresses } : {}),
        ...(inbound_transfers ? { inbound_transfers } : {}),
        ...(intra_stripe_flows ? { intra_stripe_flows } : {}),
        ...(outbound_payments ? { outbound_payments } : {}),
        ...(outbound_transfers ? { outbound_transfers } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, financial_account }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
    INVALID_FINANCIAL_ACCOUNT:
      "A valid financial_account field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof financial_account !== "string") throw new Error(ERRORS.INVALID_FINANCIAL_ACCOUNT);
};
