const run = (input) => {
  const { message, data, status, exit } = input;

  if (exit) {
    const error = new Error(message);

    error.data = {
      ...data,
      status,
    };

    throw error;
  }

  return null;
};
