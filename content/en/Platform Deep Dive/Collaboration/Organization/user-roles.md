---
title: "User Roles and Permissions"
linkTitle: "User Roles"
weight: 10
description: >
  Learn about the user roles and associated permissions.
---

{{% pageinfo %}}
Depending on their role, a user can collaborate at the organization or pentest level.
{{% /pageinfo %}}

| Pentest Level | Organization Level |
|---|---|
| A [_Pentest Team Member_](/getting-started/glossary/#pentest-team-member):<ul><li>Can collaborate on a specific pentest</li><li>Has no access to users or settings of an organization</li></ul> | An [_Organization Owner_](/getting-started/glossary/#organization-owner) has the highest level of access and can:{{% org-owner-permissions %}}An [_Organization Member_](/getting-started/glossary/#organization-member) can:{{% org-member-permissions %}} |

Refer to the table below for a detailed list of permissions and privileges for each role. Some permissions depend on the {{% ptaas-tier %}} of your organization.

|  | [Pentest Team Member](/getting-started/glossary/#pentest-team-member) | [Organization Member](/getting-started/glossary/#organization-member) | [Organization Owner](/getting-started/glossary/#organization-owner) |
|---|---|---|---|
| View and edit pentest details | ✅ | ✅ | ✅ |
| View pentest activity updates and pentester updates| ✅ | ✅ | ✅ |
| View and manage pentest findings | ✅ | ✅ | ✅ |
| [Invite](/platform-deep-dive/collaboration/organization/manage-users/#add-a-pentest-team-member) _Pentest Team Members_ to a specific pentest and [remove](/platform-deep-dive/collaboration/organization/manage-users/#remove-a-pentest-team-member) them | ✅ | ✅ | ✅ |
| Access the following pages in the Cobalt app: **Assets**, **Insights**, **People**, **Credits**, **Integrations**, and **Settings** | ❌ | ✅ | ✅ |
| Create [assets](/platform-deep-dive/assets/) and [pentests](/platform-deep-dive/pentests/) | ❌ | ✅ | ✅ |
| Manage [integrations](/integrations/) for an organization, including [webhooks](/integrations/webhooks/) | ❌ | ✅ | ✅ |
| View and edit general organization settings (logo, name) | ❌ | ✅ | ✅ |
| [Manage users](/platform-deep-dive/collaboration/organization/manage-users/#manage-users-for-your-organization) for an organization | ❌ | ❌ | ✅ |
| View the email addresses of users on the **People** page | ❌ | ❌ | ✅ |
| Manage identity and access settings for an organization: [two-factor authentication](/getting-started/sign-in/#two-factor-authentication) and [SAML SSO](/getting-started/sign-in/#saml-sso) | ❌ | ❌ | ✅ |
| Enable [co-branded reports](/getting-started/checklist/#co-branded-reports) (for partners) | ❌ | ❌ | ✅ |
