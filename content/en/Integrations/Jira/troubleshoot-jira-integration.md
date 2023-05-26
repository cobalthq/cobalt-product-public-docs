---
title: "Troubleshoot Your Jira Integration"
linkTitle: "Troubleshooting"
weight: 60
description: >
  Troubleshoot common issues with Cobalt plugins for Jira.
---

{{% pageinfo %}}
If you experience unexpected behavior or have issues with Cobalt plugins for Jira, read our troubleshooting tips.
{{% /pageinfo %}}

In this article:

- [Common Issues](#common-issues)
  - [Findings Not Being Pushed to Jira](#findings-not-being-pushed-to-jira)
  - [Jira Issue Can't Be Created](#jira-issue-cant-be-created)
- [Retrieve Jira Server Logs for Troubleshooting](#retrieve-jira-server-logs-for-troubleshooting)

## Common Issues

### Findings Not Being Pushed to Jira

**No error message is shown.**

Possible reasons:

- The finding state is other than Pending Fix. Only findings in the Pending Fix state are pushed to Jira.
    - You can [push findings manually]().
- You disabled the auto-push option on the pentest. You can:
    - [Enable auto-push]().
    - [Push findings manually]().
<br><br>

**You see a "null" pointer or a `A Jira issue is being created …` message in place of a Jira ticket ID on the finding.**

This error means that the Cobalt plugin for Jira has failed to create a ticket in Jira even though it was pushed from Cobalt. The most likely reason is that you have a custom configuration in your Jira project.

To remedy this, in Jira, check if there are special configurations in your project that may prevent the plugin from creating issues.

If the problem persists, please follow the steps below for your hosting option. Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> for instructions.

{{%expand "Jira Cloud:" %}}

- Check if there are custom configurations in your Jira project.
- If the problem with pushing findings persists for more than one hour, contact your CSM.<br>Please provide a screenshot of your Jira configuration in Cobalt. Navigate to **Integrations** > **Jira** > **Configuration**, and select the gear icon ![Gear icon](/icons/Gear.png "Gear icon") for the desired pentest.
- To check if findings are not being pushed to Jira, navigate to the finding, and check the **External Issue Tracking** section.

{{% /expand %}}

{{%expand "Jira Server or Data Center:" %}}

- Check if the integration user has proper permissions. The user must have permission to create tickets in the selected Jira project.
- Provide Jira logs to your Customer Success Manager for further troubleshooting. See [how to retrieve Jira Server logs](#retrieve-jira-server-logs-for-troubleshooting).

{{% /expand %}}
<br>

**You enabled the Jira integration for a pentest, but historical findings are not synchronized.**

Ensure that:

- The connection between Cobalt and Jira is established.
- The Jira integration is configured for the pentest.
- The [auto-push]() option is enabled for the pentest.

### Jira Issue Can't Be Created

If your integration is incorrectly mapped to the associated Jira project, you may see the following error message:

```
Error: This issue could not be created. Is your integration set up correctly?
```

To remedy this, make sure that the **issue type** is properly mapped between Cobalt and your associated Jira project.

The default issue type in Cobalt is **Task**. If this issue type is not available in your Jira project, select a different type.

1. In Cobalt, go to **Integrations** > **Jira** > **Configuration**.
1. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
    ![Select a pentest for which you want to configure the Jira integration](/integrations/configure-jira-integration-for-pentest.png "Select a pentest for which you want to configure the Jira integration")
1. In the overlay that appears, select an issue type that is available in the associated Jira project, and then select **Save**.

If the issue still persists, contact your Customer Success Manager.

## Retrieve Jira Server Logs for Troubleshooting

Learn how to retrieve Jira logs for the Cobalt Jira Server plugin.

### Step 1: Enable Logs

1. In Jira, select the gear icon > **System**.<br><br>
    ![Navigate to System in Jira](/integrations/enable-jira-server-logs-1.png "Navigate to System in Jira")
1. On the left panel, select **Logging and profiling**.<br><br>
    ![Select Logging and profiling in Jira](/integrations/enable-jira-server-logs-2.png "Select Logging and profiling in Jira")
1. Scroll down the page to locate the **Default Loggers** section.
1. Select **Configure logging level for another package**.<br><br>
    ![Select Configure logging level for another package in Jira](/integrations/enable-jira-server-logs-3.png "Select Configure logging level for another package in Jira")
1. In the **Package name** field, type `io.cobalt.jira`, then select **Add**.<br><br>
    ![Configure login level in Jira Server](/integrations/enable-jira-server-logs-4.png "Configure login level in Jira Server")

Logs for the Cobalt Jira Server plugin should now appear in the Jira logs.

### Step 2: Retrieve Logs

Once you've enabled logs, you can retrieve them. The procedure differs depending on whether you have or don't have access to the server file system. Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> for instructions.

{{%expand "You have access to the server file system." %}}

To find the location of logs, navigate to **Administration** > **System** > **System Info**.

![View the location of logs in Jira Server](/integrations/jira-server-logs.png "View the location of logs in Jira Server")

Numbers in the file name indicate that the logs roll over. For example, `atlassian-jira.log`, then `atlassian-jira.log.1`, then `atlassian-jira.log.2`, and so on.

For debugging purposes, use the most recent file without a number, such as `atlassian-jira.log`.

{{% /expand %}}
<br>
{{%expand "You don't have access to the server file system." %}}

If you can't access the actual files, you can use a plugin to read the file and display it in Jira, such as [Last Log for Jira](https://marketplace.atlassian.com/apps/1211604/last-log-for-jira?hosting=server&tab=overview).

1. In Jira, go to the **Manage apps** page.
1. Under **Lastlog Add-on**, select **View Log**. You should see the log file.

![Retrieve Jira Server logs using the Last Log add-on](/integrations/jira-server-logs-Lastlog.png "Retrieve Jira Server logs using the Last Log add-on")

Numbers in the file name indicate that the logs roll over. For example, `atlassian-jira.log`, then `atlassian-jira.log.1`, then `atlassian-jira.log.2`, and so on.

For debugging purposes, use the most recent file without a number, such as `atlassian-jira.log`.

{{% /expand %}}
