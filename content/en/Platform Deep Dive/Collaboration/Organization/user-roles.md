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
| View asset and pentest details | ✅ | ✅ | ✅ |
| Edit pentest details | ✅ | ✅ | ✅ |
| View and export pentest findings | ✅ | ✅ | ✅ |
| View pentest activity updates | ✅ | ✅ | ✅ |
| Comment on pentest findings | ✅ | ✅ | ✅ |
| Update the state of pentest findings | ✅ | ✅ | ✅ |
| Create new labels and apply labels to pentest findings | ✅ | ✅ | ✅ |
| [Invite _Team Members_](/platform-deep-dive/collaboration/organization/manage-users/#add-a-pentest-collaborator) to a pentest | ✅ | ✅ | ✅ |
| [Remove _Team Members_](/platform-deep-dive/collaboration/organization/manage-users/#remove-pentest-collaborators) from a pentest | ✅ | ✅ | ✅ |
| Assign pentest findings | ✅ | ✅ | ✅ |
| Manage custom references for pentest findings | ✅ | ✅ | ✅ |
| Manage the Jira one-way and GitHub [integrations](/integrations/) for a pentest | ✅ | ✅ | ✅ |
| View all users within an organization | ❌ | ✅ | ✅ |
| Manage general organization settings (logo, name) | ❌ | ✅ | ✅ |
| View the [credit balance](/getting-started/track-credits/) of an organization | ❌ | ✅ | ✅ |
| View and export pentest insights | ❌ | ✅ | ✅ |
| [Invite users](/platform-deep-dive/collaboration/organization/manage-users/#invite-users) to an organization | ❌ | ❌ | ✅ |
| [Remove users](/platform-deep-dive/collaboration/organization/manage-users/#remove-users) from an organization | ❌ | ❌ | ✅ |
| [Change user roles](/platform-deep-dive/collaboration/organization/manage-users/#change-a-users-role) within an organization | ❌ | ❌ | ✅ |
| View the email addresses of users on the **People** page | ❌ | ❌ | ✅ |
| Manage identity and access settings for an organization ([two-factor authentication](/getting-started/sign-in/#two-factor-authentication), [SAML SSO](/getting-started/sign-in/#saml-sso)) | ❌ | ❌ | ✅ |
| Manage [integrations](/integrations/) for an organization | ❌ | ❌ | ✅ |
| Enable [co-branded reports](/getting-started/checklist/#co-branded-reports) (for partners) | ❌ | ❌ | ✅ |
