---
title: "Manage Users"
linkTitle: "Manage Users"
weight: 20
aliases: /platform-deep-dive/collaboration/organization/manage-users/
description: >
  Manage users for your organization.
---

{{% pageinfo %}}
As an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner), you can [manage users for your organization](#manage-users-for-your-organization), in addition to managing [pentest collaborators](#manage-pentest-collaborators).
{{% /pageinfo %}}

## Manage Users for Your Organization

Navigate to the **People** page > **Organization**. Here, you can:

- [Invite](#invite-users) and [remove](#remove-users) users
- [Change their roles](#change-a-users-role)

![Organization tab on the People page](/deepdive/PeopleOrganization.png "View and manage users for your organization on the People page")

### Invite Users

To invite users to your organization:

1. In the Cobalt app, select your organization.
1. Navigate to the **People** page, and select **Invite Users**.
1. In the overlay that appears, specify the email addresses of users that you want to invite. Enter the emails, and then select **Add** or press **Enter**.
   - Use commas to separate multiple email addresses.
1. For each user, select a [role](/platform-deep-dive/collaboration/user-roles/): Member or Owner.
    - Both Members and Owners have access to all [assets](/platform-deep-dive/assets/) and [pentests](/platform-deep-dive/pentests/) of an organization.
1. Select **Invite** to confirm.

Users receive an email invitation to join your organization. They also become collaborators on all pentests of the organization as [Pentest Team Members](/platform-deep-dive/collaboration/user-roles/#pentest-team-member).

<!--If an email address is invalid or a user has already joined, you see an error message.-->

![Invite multiple users to your organization](/deepdive/InviteUsersOverlay.png "Overlay for inviting multiple users")

### Change a User’s Role

To change a user’s role from [Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) to [Member](/platform-deep-dive/collaboration/user-roles/#organization-member) or conversely, on the **People** page, use the list under **Role**.

![Change a user's role](/deepdive/ChangeUserRole.png "Role list on the People page")

### Remove Users

To remove a user from your organization:

1. On the **People** page, locate the user you want to remove.
1. Select the three-dot icon {{% three-dots %}} on the right, and select **Remove User**.
1. In the overlay that appears, select whether you want to remove a user:
    - Only from the organization. The user can still collaborate on pentests as a [Pentest Team Member](/platform-deep-dive/collaboration/user-roles/#pentest-team-member).
    - From the organization and all pentests.

## Manage Pentest Collaborators

On the **Pentest Collaborators** tab of the **People** page, you can see users who don't belong to your organization but can collaborate on specific pentests. This includes:

- [Pentest Team Members](/platform-deep-dive/collaboration/user-roles/#pentest-team-member)
- [Cobalt pentesters](/platform-deep-dive/collaboration/user-roles/#cobalt-pentesters)

To view pentests on which the user collaborates, select the link under **Pentests**. From here, you can navigate to the pentest page.

Pentest Team Members who don't belong to the organization can [manage collaborators](/platform-deep-dive/collaboration/manage-collaborators/) for a specific pentest.

### Remove a User from All Pentests

{{% remove-from-all-pentests %}}

1. In the Cobalt app, select your organization in the upper-left corner of the screen.
1. Navigate to the **People** page > **Pentest Collaborators**.
1. For the Team Member you want to remove, select the three-dot icon {{% three-dots %}} > **Remove User**, and select **Yes** in the overlay to confirm.

![Remove a Pentest Team Member from all pentests](/deepdive/RemoveCollaboratorFromAllPentests.png "Add a Pentest Team Member from all pentests")

### Add a Pentest Team Member

As a Pentest Team Member, you can [add users to a specific pentest](/platform-deep-dive/collaboration/manage-collaborators/#add-a-pentest-team-member). This doesn't require the Organization Owner role.

### Remove a Pentest Team Member

As a Pentest Team Member, you can [remove users from a specific pentest](/platform-deep-dive/collaboration/manage-collaborators/#remove-a-pentest-team-member). This doesn't require the Organization Owner role.
