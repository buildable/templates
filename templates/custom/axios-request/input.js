const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    method: "GET", // Required
    url: "https://api.yourcompanydomain.co", // Required

    // data: {},
    // responseType: "json",
    // headers: {
    //   "Content-type": "application/json"
    // },
    // params: {},

    // baseURL: "https://some-domain.com/api",
    // timeout: 5000,
    // withCredentials: false,
    // xsrfCookieName: "XSRF-TOKEN",
    // xsrfHeaderName: "X-XSRF-TOKEN",
    // maxContentLength: 2000,
    // maxBodyLength: 2000,
    // maxRedirects: 5,
    // proxy: {
    //   protocol: "https",
    //   host: "",
    //   port: 9000,
    //   auth: {
    //     username: "",
    //     password: ""
    //   }
    // },
  };
};
