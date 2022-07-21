const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    attach_to_self,
    confirm,
    customer,
    description,
    expand,
    flow_directions,
    mandate_data,
    metadata,
    on_behalf_of,
    payment_method,
    payment_method_data,
    payment_method_options,
    payment_method_types,
    return_url,
    single_use,
    usage,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/setup_intents",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(attach_to_self ? { attach_to_self } : {}),
        ...(confirm ? { confirm } : {}),
        ...(customer ? { customer } : {}),
        ...(description ? { description } : {}),
        ...(expand ? { expand } : {}),
        ...(flow_directions ? { flow_directions } : {}),
        ...(mandate_data ? { mandate_data } : {}),
        ...(metadata ? { metadata } : {}),
        ...(on_behalf_of ? { on_behalf_of } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(payment_method_data ? { payment_method_data } : {}),
        ...(payment_method_options ? { payment_method_options } : {}),
        ...(payment_method_types ? { payment_method_types } : {}),
        ...(return_url ? { return_url } : {}),
        ...(single_use ? { single_use } : {}),
        ...(usage ? { usage } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
};
