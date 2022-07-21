const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    baseURL: "https://api.coinbase.com/v2", // Required
    currencyPair: "BTC-USD", // Required
  };
};
