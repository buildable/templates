const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    address: "TVAEYCmc15awaDRAjUZ1kvcHwQQaoPw2CW", // Required
    name: "MY_TOKEN", // Required
  };
};
