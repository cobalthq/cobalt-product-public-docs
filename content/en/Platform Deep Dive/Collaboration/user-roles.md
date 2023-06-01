---
title: "User Roles and Permissions"
linkTitle: "User Roles"
weight: 30
aliases: /platform-deep-dive/collaboration/organization/user-roles/
description: >
  Learn about the user roles and associated permissions.
---

{{% pageinfo %}}
Depending on your role, you may have access to an organization, specific pentests, or both.
{{% /pageinfo %}}

|  | Roles and Key Permissions |
|---|---|
| **User Roles**<br><img src="/illustrations/user-roles.svg" style="width: 120px; height: 120px;"> | **Pentest level**:<ul><li>[Pentest Team Member](#pentest-team-member):<ul><li>Collaborates on a specific pentest.</li><li>Has no access to organization users and settings, unless the user is also an Organization Owner or Member.</li></ul></li></ul><hr>**Organization level**:<ul><li>[Organization Owner](#organization-owner):<ul><li>Can create assets and pentests.</li><li>Manages organization users and settings.</li><li>Can't collaborate on specific pentests, unless the user is also a Pentest Team Member on these pentests.</li></ul><li>[Organization Member](#organization-member):<ul><li>Can create assets and pentests.</li><li>Can view organization users and settings.</li><li>Can't collaborate on specific pentests, unless the user is also a Pentest Team Member on these pentests.</li></ul></li></ul><hr>**Pentest + organization level**:<ul><li>[Organization Owner](#organization-owner) + [Pentest Team Member](#pentest-team-member) (on specific pentests)</li><li>[Organization Member](#organization-member) + [Pentest Team Member](#pentest-team-member) (on specific pentests)</li></ul> |
| **Pentester Roles**<br><img src="/illustrations/pentester-roles.svg" style="width: 120px; height: 120px;"> | **Cobalt pentesters**:<ul><li>[Pentester](#pentester): Completes pentests for Cobalt customers.</li><li>[Pentest Lead](#pentest-lead): Leads a group of Cobalt Pentesters to complete a pentest.</li></ul><hr>**Customer pentesters**:<ul><li>[In-House Pentester](#in-house-pentester): Performs pentests for their organization on the Cobalt [Pentest Management Platform](/pmp/).</li></ul>  |
| **Administrative Role**<br><img src="/illustrations/Cobalt-staff-role.svg" style="width: 120px; height: 120px;"> | <ul><li>[Cobalt Staff](#cobalt-staff): Has administrative access to your pentests and organization.</li></ul> |

## Pentest Team Member

{{% team-member-definition %}}

- A Pentest Team Member does not have to be an [Organization Owner](#organization-owner) or an [Organization Member](#organization-member).
- When an Organization Owner [invites a user to an organization](/platform-deep-dive/organization/manage-users/#invite-users), the user also becomes a Pentest Team Member on all pentests of the organization.
  - An Organization Owner can [remove a Pentest Team Member from all pentests](/platform-deep-dive/organization/manage-users/#remove-a-user-from-all-pentests) they collaborate on.
  - Any Pentest Team Member can [add users](/platform-deep-dive/collaboration/manage-collaborators/#add-a-pentest-team-member) to a specific pentest or [remove](/platform-deep-dive/collaboration/manage-collaborators/#remove-a-pentest-team-member) them.

A Pentest Team Member **has access to a specific pentest with the following permissions**:

- View and edit pentest details.
- [Collaborate on a pentest](/platform-deep-dive/collaboration/collaborate-on-pentests/) in the Cobalt app and in Slack.
- [Manage users](/platform-deep-dive/collaboration/manage-collaborators/) for a pentest.
- View pentest activity updates and pentester updates.
- Manage integrations for a pentest: Jira and GitHub.

A Pentest Team Member has no access to any information related to the organization, unless they're also an Organization Owner or Member.

{{%expand "Learn more." %}}

A Pentest Team Member has **no access** to the following pages, unless they're also an Organization Owner or Member:

- **Assets**
- **Pentests** (except for pentests they collaborate on)
- **Insights**
- **People**
- **Credits**
- **Integrations**
- **Settings**

{{% /expand %}}

## Organization Roles

When a customer starts their journey with Cobalt, we add an Organization Owner who then invites other users. Here is an overview of organization roles and permissions.

| Permission | [Organization Member](#organization-member) | [Organization Owner](#organization-owner) |
|---|:---:|:---:|
| Create [assets](/platform-deep-dive/assets/) and [pentests](/platform-deep-dive/pentests/), edit assets | ✓ | ✓ |
| View organization users and pentest collaborators on the **People** page | ✓ | ✓ |
| Manage [integrations](/integrations/) for an organization | ✓ | ✓ |
| Edit the [organization profile](/platform-deep-dive/organization/organization-settings/#edit-the-organization-profile) | ✓ | ✓ |
| View the [credits ledger](/platform-deep-dive/credits/track-credits/) | ✓ | ✓ |
| View the [Insights](/platform-deep-dive/assets/insights/) page | ✓ | ✓ |
| [Manage users](/platform-deep-dive/organization/manage-users/) for an organization | — | ✓ |
| Manage security settings for an organization: [two-factor authentication](/platform-deep-dive/organization/organization-settings/enforce-2fa/) and [SAML](/platform-deep-dive/organization/organization-settings/saml-sso/) | — | ✓ |
| Enable [co-branded reports](/platform-deep-dive/pentests/reports/cobranded-reports/) (for Cobalt partners) | — | ✓ |

### Organization Owner

An Organization Owner is the administrator for a customer organization within the Cobalt app. In the UI, you see this role as “Owner.”

An Organization Owner has the following **permissions**:

- Create [assets](/platform-deep-dive/assets/) and [pentests](/platform-deep-dive/pentests/), edit assets.
- [Manage users for an organization](/platform-deep-dive/organization/manage-users/) on the **People** page:
  - Invite and remove users.
  - Switch user roles.
  - View users' email addresses.
  - Remove Pentest Team Members from all pentests they collaborate on.
- Manage security settings for an organization: [two-factor authentication](/platform-deep-dive/organization/organization-settings/enforce-2fa/) and [SAML](/platform-deep-dive/organization/organization-settings/saml-sso/).
- Enable [co-branded reports](/platform-deep-dive/pentests/reports/cobranded-reports/) (for Cobalt partners).
- Manage [integrations](/integrations/) for an organization.
- Edit the [organization profile](/platform-deep-dive/organization/organization-settings/#edit-the-organization-profile).
- View the [credits ledger](/platform-deep-dive/credits/track-credits/).
- View the [Insights](/platform-deep-dive/assets/insights/) page.

An Organization Owner may also be a [Pentest Team Member](#pentest-team-member).

### Organization Member

An Organization Member is a customer representative who manages pentests and assets for their organization on the Cobalt platform but has less permissions compared to an Organization Owner. In the UI, you see this role as “Member.”

An Organization Member has the following **permissions**:

- Create [assets](/platform-deep-dive/assets/) and [pentests](/platform-deep-dive/pentests/), edit assets.
- View users and pentest collaborators on the **People** page.
- Manage [integrations](/integrations/) for an organization.
- Edit the [organization profile](/platform-deep-dive/organization/organization-settings/#edit-the-organization-profile).
- View the [credits ledger](/platform-deep-dive/credits/track-credits/).
- View the [Insights](/platform-deep-dive/assets/insights/) page.

An Organization Member may also be a [Pentest Team Member](#pentest-team-member).

## Cobalt Pentesters

When you run pentests using the Cobalt Pentest as a Service (PtaaS) platform, Cobalt pentesters participate in the process.

### Pentester

A Pentester is a Cobalt pentester who completes pentests for Cobalt customers.

The responsibilities of a Pentester include:

- Thoroughly test an asset for vulnerabilities based on the pentest scope and requirements.
- Submit vulnerabilities ([findings](/platform-deep-dive/pentests/findings/)) and provide remediation tips.
- Retest findings that the customer has remediated within a pentest.
- Collaborate with the customer throughout a pentest.

Some Cobalt pentesters may be a Lead in one test, a Pentester in a second test, and possibly no role and no involvement in your other pentests.

### Pentest Lead

{{% pentest-lead-permissions %}}

## In-House Pentester

{{% in-house-pentester-definition %}} An In-House Pentester role has the same privileges as a [Pentest Team Member](#pentest-team-member), with additional access to pentester functionality.

Learn [how to complete an In-House Pentest](/pmp/complete-pentest/).

## Cobalt Staff

{{% cobalt-staff-permissions %}}
