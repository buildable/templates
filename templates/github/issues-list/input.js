const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_ID: $env.BUILDABLE_GITHUB_ACCOUNT_ID, // Required

    // filter: "assigned",
    // state: "open",
    // labels: "string",
    // sort: "created",
    // direction: "asc",
    // since: "2019-08-24T14:15:22Z",
    // collab: true,
    // orgs: true,
    // owned: true,
    // pulls: true,
    // per_page: 30,
    // page: 1,
  };
};
