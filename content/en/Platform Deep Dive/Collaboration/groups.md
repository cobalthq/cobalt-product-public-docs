---
title: "Groups"
linkTitle: "Groups"
weight: 10
description: >
  Groups provide structure and flexible access controls.
---

{{% pageinfo %}}
As an [Organization Owners](/platform-deep-dive/collaboration/user-roles/#organization-owner), you can manage access to your organization’s assets and their associated pentests and findings.
{{% /pageinfo %}}

## Create a Group

Assign assets and [Organization Members](/platform-deep-dive/collaboration/user-roles/#organization-member) into a group:

- Navigate to the **People** page, and then to the **Groups** tab.
- Select **Create Group**.
- The **Create Group** screen prompts you for the following:
  - **Group Name**: Set up a descriptive name to easily identify the group.
  - **Description**: Add information to further describe the group.
  - **Associated Assets**: Select from a list of all assets within your organization (Note: Assets already associated with another group will not appear in this list).
  - **Members**: Select from a list of all Organization Members within your organization. These users will have exclusive access to the group’s associated assets, and their pentests and findings.
    - Organization Owners and Cobalt Staff will not appear in this list but will still have access to all assets.
    - [Pentest Team Members](/platform-deep-dive/collaboration/user-roles/#pentest-team-member) that are not part of your organization can still be [manually added](/platform-deep-dive/collaboration/manage-collaborators/#add-a-pentest-team-member) to each pentest.
- Select **Create Group**.

![Create group page](/deepdive/Groups_CreateForm.png "Create group page")

## View and Manage Groups

![Groups main page](/deepdive/Groups_MainPageandActions.png "Groups main page")

On the **Groups** page, you can:

- Create a group
- View all of the groups within your organization
- Manage groups. Select the three-dot icon {{% three-dots %}} under **Actions**, and then select the desired option:
  - **Edit Group** to modify group details
  - **Delete Group**, if it doesn’t have associated assets

## Group Details Page

![Group details page](/deepdive/Groups_ViewPage.png "Group details page")

On the group details page, you can:

- View associated assets
- View group members
- Edit group details
- Delete the group, if it doesn’t have associated assets

## Assigning a Group to an Asset

In addition to assigning existing assets to a group from the Groups page, you can assign a group during [asset creation](/platform-deep-dive/assets/#create-an-asset) or editing.

![Groups field in asset form](/deepdive/CreateNewAsset.png "Groups field in asset form")

- The **Asset** screen will prompt you for the usual [details](/getting-started/assets/#asset-details).
- You will additionally see an **Assigned Group** field. This is by default set to the ‘All Org Members’ group. Select from the dropdown to choose another group within your organization.
  - **Organization Members** will only be able to assign groups they are already part of when creating new assets, and do not have permissions to reassign the group once the asset has been created (Organization Owners and Cobalt Staff are able to do both).
- Once created, the asset and any of its pentests and findings will be accessible to its assigned group.

{{% alert title="Note" color="primary" %}}
Currently, only one group can be assigned per single asset.
{{% /alert %}}

## Access and Permissions

Only [Organization Owners](/platform-deep-dive/collaboration/user-roles/#organization-owner) can create, manage, and view all groups across their organization.

While assets can be associated with particular groups and their members, Owners will always still have access to all assets in the organization as well.

[Organization Members](/platform-deep-dive/collaboration/user-roles/#organization-member) only have read-only access to groups they are members of.
- Org Members can view and manage assets that belong to their groups. They, however, cannot reassign an asset’s group once the asset has been created.
- Org Members can access every pentest and finding that belong to their groups’ assets.

For more information about user permissions, see [User Roles and Permissions](/platform-deep-dive/collaboration/user-roles/).

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{%expand "How do I know which group owns an individual pentest?" %}}
<br>

The pentest **Collaborators** tab will still show all individual collaborators and any group they may be part of.

{{% /expand %}}
<br>
{{%expand "Will all of a pentest’s collaborators carry over when I copy the pentest?" %}}
<br>

Only individual group members that own the pentest will carry over to the newly copied pentest. Any non-group members will have to be manually added to the pentest again.

{{% /expand %}}
<br>
{{%expand "Are groups required?" %}}
<br>

All assets will require an assigned group. If you plan to not use this feature, however, you can assign assets to the default **All Org Members** group.

{{% /expand %}}
