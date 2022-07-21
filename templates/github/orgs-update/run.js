const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_ID,
    org,
    billing_email,
    company,
    email,
    twitter_username,
    location,
    name,
    description,
    has_organization_projects,
    has_repository_projects,
    default_repository_permission,
    members_can_create_repositories,
    members_can_create_internal_repositories,
    members_can_create_private_repositories,
    members_can_create_public_repositories,
    members_allowed_repository_creation_type,
    members_can_create_pages,
    members_can_fork_private_repositories,
    blog,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "patch",
      url: `https://api.github.com/orgs/${org}`,
      auth: { password: BUILDABLE_GITHUB_ACCESS_TOKEN, username: BUILDABLE_GITHUB_ACCOUNT_ID },
      data: {
        ...(billing_email ? { billing_email } : {}),
        ...(company ? { company } : {}),
        ...(email ? { email } : {}),
        ...(twitter_username ? { twitter_username } : {}),
        ...(location ? { location } : {}),
        ...(name ? { name } : {}),
        ...(description ? { description } : {}),
        ...(has_organization_projects ? { has_organization_projects } : {}),
        ...(has_repository_projects ? { has_repository_projects } : {}),
        ...(default_repository_permission ? { default_repository_permission } : {}),
        ...(members_can_create_repositories ? { members_can_create_repositories } : {}),
        ...(members_can_create_internal_repositories
          ? { members_can_create_internal_repositories }
          : {}),
        ...(members_can_create_private_repositories
          ? { members_can_create_private_repositories }
          : {}),
        ...(members_can_create_public_repositories
          ? { members_can_create_public_repositories }
          : {}),
        ...(members_allowed_repository_creation_type
          ? { members_allowed_repository_creation_type }
          : {}),
        ...(members_can_create_pages ? { members_can_create_pages } : {}),
        ...(members_can_fork_private_repositories ? { members_can_fork_private_repositories } : {}),
        ...(blog ? { blog } : {}),
      },
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
const verifyInput = ({ BUILDABLE_GITHUB_ACCESS_TOKEN, BUILDABLE_GITHUB_ACCOUNT_ID, org }) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_ID:
      "A valid BUILDABLE_GITHUB_ACCOUNT_ID field (string) was not provided in the input.",
    INVALID_ORG: "A valid org field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_ID);
  if (typeof org !== "string") throw new Error(ERRORS.INVALID_ORG);
};
