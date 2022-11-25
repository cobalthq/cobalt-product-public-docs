---
title: "Manage Users"
linkTitle: "Manage Users"
weight: 20
description: >
  Manage users within an organization or pentest.
---

{{% pageinfo %}}
Depending on your role, you can manage users for your [organization](#manage-users-for-your-organization) or specific [pentests](#add-and-remove-pentest-team-members). Learn more about [user roles and permissions](/platform-deep-dive/collaboration/organization/user-roles/).
{{% /pageinfo %}}

## Manage Users for Your Organization

As an [_Organization Owner_](/getting-started/glossary/#organization-owner), you can manage users for your organization on the **People** page > **Organization**:

- [Invite](#invite-users) and [remove](#remove-users) users
- [Change their roles](#change-a-users-role)

![Organization tab on the People page](/deepdive/PeopleOrganization.png "View and manage users for your organization on the People page")

### Invite Users

To invite users to your organization:

1. In the Cobalt app, select your organization.
1. Navigate to the **People** page, and select **Invite People**.
1. In the overlay that appears, enter the email addresses of users that you want to invite.
   - Use commas to separate multiple email addresses.
1. For each user, select a role: _Member_ or _Owner_.
    - Both _Members_ and _Owners_ have access to all [assets](/platform-deep-dive/assets/) and [pentests](/platform-deep-dive/pentests/) of an organization.
1. Select **Invite** to confirm.

Users receive an email invitation to join your organization. They also become collaborators on all pentests of the organization as [_Pentest Team Members_](/getting-started/glossary/#pentest-team-member).

If an email address is invalid or a user has already joined, you see an error message.

![Invite multiple users to your organization](/deepdive/InviteUsers.png "Overlay for inviting multiple users")

### Change a User’s Role

To change a user’s role from [_Owner_](/getting-started/glossary/#organization-owner) to [_Member_](/getting-started/glossary/#organization-member) or conversely, on the **People** page, use the list under **Role**.

![Change a user's role](/deepdive/ChangeUsersRole.png "Role list on the People page")

### Remove Users

To remove a user from your organization:

1. On the **People** page, locate the user you want to remove.
1. Select the three-dot icon on the right, and select **Remove User**.
1. In the overlay that appears, select whether you want to remove a user:
    - Only from the organization. The user can still collaborate on pentests as a [_Pentest Team Member_](/getting-started/glossary/#pentest-team-member).
    - From the organization and all pentests.

## Add and Remove Pentest Team Members

To [add](#add-a-pentest-team-member) or [remove users](#remove-a-pentest-team-member) from a specific pentest, you should have one of the following [roles](/platform-deep-dive/collaboration/organization/user-roles/):

- [_Organization Owner_](/getting-started/glossary/#organization-owner)
- [_Organization Member_](/getting-started/glossary/#organization-member)
- [_Pentest Team Member_](/getting-started/glossary/#pentest-team-member)

### Add a Pentest Team Member

To add a _Pentest Team Member_ to a specific pentest:

1. In the Cobalt app, select **Pentests**, and locate the desired pentest.
1. On the pentest page, select **Settings** > **Collaborators**.
1. Enter the user's email address, and select **Add Team Member**.

The user gets an invitation to collaborate on the pentest.

![Add a Pentest Team Member to a pentest](/deepdive/AddTeamMember.png "Add a Pentest Team Member to a pentest")

### Remove a Pentest Team Member

To remove a _Pentest Team Member_ from a pentest:

1. Navigate to the desired pentest in one of the following ways:
   - Select **Pentests**, and locate the pentest.
   - On the **People** page, locate the desired user, select **# Pentests**, and select the pentest from which you want to remove the user.
1. On the pentest page, select **Settings** > **Collaborators**.
1. Locate the user you want to remove, select **Remove User** ![Trash bin icon](/icons/Trash.png "Trash bin icon"), and select **Yes** in the overlay to confirm.

### Remove a User from All Pentests

As an _Organization Owner_, you can remove a _Pentest Team Member_—who doesn't belong to the organization—from all pentests they collaborate on.

1. In the Cobalt app, select your organization in the upper-left corner of the screen.
1. Navigate to the **People** page > **Pentest Collaborators**.
1. For the _Team Member_ you want to remove, select the three-dot icon > **Remove User**, and select **Yes** in the overlay to confirm.

![Remove a Pentest Team Member from all pentests](/deepdive/RemoveCollaboratorFromAllPentests.png "Add a Pentest Team Member from all pentests")

To view the pentests a _Pentest Team Member_ collaborates on, select the link under **Pentests**. From here, you can navigate to the pentest page.
