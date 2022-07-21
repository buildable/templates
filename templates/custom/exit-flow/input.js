const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    exit: true,
    message: "An error occurred",
    status: 400,
    data: {
      // key: "value"
    },
  };
};
