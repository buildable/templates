const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    xpub: "xpub6FL6yNcaXSaJaLoe2e5a1AGWUARpC5bTLKrGLHqN3qFGeBQBYdCFsdYzgoWHMruUcBJrQ1jCpoXvqduqchuHGEvuGm9gC4JR5ZttscVxa3y", // Required
    index: "0", // Required
  };
};
