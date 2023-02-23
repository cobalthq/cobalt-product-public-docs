---
title: "Manage Notifications"
linkTitle: "Manage Notifications"
weight: 20
description: >
  Explore Cobalt notifications.
---

{{% pageinfo %}}
You can manage notifications for specific [pentests](#manage-pentest-notifications) and [findings](#manage-finding-notifications).
{{% /pageinfo %}}

By default, you get notifications for some activities related to your organization and pentests—both through email and in the Cobalt app. If you're not receiving notifications, make sure that you've confirmed your email address.

{{%expand "View examples of activities." %}}
<br>
You get notified when someone has:

- Created or deleted a pentest
- Posted an update for a pentest
- Reported a vulnerability
- Changed a finding state
- Invited users to the organization

{{% /expand %}}
<br>

Your [user role](/platform-deep-dive/collaboration/organization/user-roles/) determines which notifications you get.

## Manage Pentest Notifications

When you collaborate on a pentest, you get notifications depending on your notification preferences.

To manage your notification preferences for a pentest:

1. On the pentest page, select **Settings** > **Notifications**.
1. Select your preference:
    - **Watching**: Receive notifications for all events, unless you've explicitly unsubscribed from a [finding thread](#manage-finding-notifications). This is the default option.
    - **Participating**: Receive notifications when you're participating in a pentest, which includes:
        - Someone mentioned you.
        - Someone assigned you to a finding.
    - **Ignoring**: Ignore all events, unless you've explicitly subscribed to a [finding thread](#manage-finding-notifications).<br><br>
    ![Manage notification preferences for a pentest](/deepdive/ManagePentestNotifications.png "Manage notification preferences for a pentest")

## Manage Finding Notifications

You get a notification for a finding when someone:

- Assigned you to the finding.
- Mentioned you in a comment.
- Left a comment on the finding—if you're "Watching" the pentest.

If you're not participating, you can subscribe to the notification thread.

To subscribe to notifications for a finding:

1. On the pentest page, go to **Findings**, and select a finding.
1. Under **Notifications**, select **Subscribe**.

To unsubscribe from a thread, select **Unsubscribe**.

## View All Notifications

To view notifications for all organizations you belong to, select the bell icon ![Bell icon](/icons/Bell.png "Bell icon") in the upper-right corner. The number of unread notifications, if any, appears on the bell icon.

![Navigate to the Notifications page](/deepdive/ViewAllNotifications.png "Navigate to the Notifications page")

On the **Notifications** page, you can select to view unread or all notifications.

- To mark all notifications as read, select **Mark all as read**.
- To mark a single notification as read, select the checkmark icon ✔️.

![View all notifications](/deepdive/NotificationsPage.png "View all notifications")

## View Team Activity

To view the latest activity of your team members and pentesters, navigate to the **Activity** page. Both organization users and [Pentest Team Members](/getting-started/glossary/#pentest-team-member) can view this page.

![View team activity](/deepdive/ViewActivity.png "View team activity")
