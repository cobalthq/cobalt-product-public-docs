---
title: "User Roles and Permissions"
linkTitle: "User Roles"
weight: 10
description: >
  Learn about the user roles and associated permissions.
---

{{% pageinfo %}}
Depending on their role, a user can collaborate at the pentest or organization level.
{{% /pageinfo %}}

| Pentest Level | Organization Level |
|---|---|
| A [Pentest Team Member](/getting-started/glossary/#pentest-team-member):<ul><li>Can collaborate on a specific pentest</li><li>Has no access to users or settings of an organization</li></ul> | An [Organization Owner](/getting-started/glossary/#organization-owner) has the highest level of access and can:{{% org-owner-permissions %}}An [Organization Member](/getting-started/glossary/#organization-member) can:{{% org-member-permissions %}} |

Refer to the table below for a detailed list of permissions and privileges for each role. Some permissions depend on the {{% ptaas-tier %}} of your organization.

| Permission | [Pentest Team Member](/getting-started/glossary/#pentest-team-member) | [Organization Member](/getting-started/glossary/#organization-member) | [Organization Owner](/getting-started/glossary/#organization-owner) |
|---|:---:|:---:|:---:|
| View and edit pentest details, including [scoping parameters](/getting-started/planning/#scope-the-pentest) | ✔️ | ✔️ | ✔️ |
| View pentest activity updates and pentester updates| ✔️ | ✔️ | ✔️ |
| View and manage pentest [findings](/platform-deep-dive/pentests/findings/) | ✔️ | ✔️ | ✔️ |
| [Collaborate on pentests](/platform-deep-dive/collaboration/collaborate-on-pentests/) in the Cobalt app and in Slack | ✔️ | ✔️ | ✔️ |
| [Manage Pentest Team Members](/platform-deep-dive/collaboration/manage-collaborators/) for a specific pentest | ✔️ | ✔️ | ✔️ |
| Create and manage [Cobalt API tokens](/platform-deep-dive/cobalt-account/account-settings/#create-and-manage-api-tokens) | ✔️ | ✔️ | ✔️ |
| Manage integrations for a specific pentest: Jira one-way and GitHub | ✔️ | ✔️ | ✔️ |
| Access the following pages in the Cobalt app: **Assets**, **Insights**, **People**, **Credits**, **Integrations**, and **Settings** | ➖ | ✔️ | ✔️ |
| Create [assets](/platform-deep-dive/assets/) and [pentests](/platform-deep-dive/pentests/) | ➖ | ✔️ | ✔️ |
| View all users and pentest collaborators within an organization | ➖ | ✔️ | ✔️ |
| Manage [integrations](/integrations/) for an organization, including [webhooks](/integrations/webhooks/) | ➖ | ✔️ | ✔️ |
| View and edit the [organization profile](/platform-deep-dive/collaboration/organization/organization-settings/#edit-the-organization-profile) | ➖ | ✔️ | ✔️ |
| [Manage users](/platform-deep-dive/collaboration/organization/manage-users/#manage-users-for-your-organization) for an organization | ➖ | ➖ | ✔️ |
| View the email addresses of users on the **People** page | ➖ | ➖ | ✔️ |
| Manage identity and access settings for an organization: [two-factor authentication](/platform-deep-dive/collaboration/organization/organization-settings/enforce-2fa/) and [SAML SSO](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/) | ➖ | ➖ | ✔️ |
| Enable [co-branded reports](/platform-deep-dive/pentests/reports/cobranded-reports/) (for partners) | ➖ | ➖ | ✔️ |
