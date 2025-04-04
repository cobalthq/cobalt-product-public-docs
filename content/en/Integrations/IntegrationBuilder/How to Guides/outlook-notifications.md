---
title: "Send email notifications for Findings from Outlook"
linkTitle: "Send email notifications for Findings from Outlook"
weight: 40
---

{{% pageinfo %}}
How to use Integration Builder to receive email notifications about findings.
{{% /pageinfo %}}

## Configure Outlook email notifications

In order to configure Outlook to send emails every time a new finding gets created, we need to do the following:

1. Create an Outlook connection.
2. Find and select a recipe (2 options):
    - [Cobalt > Outlook] When pentest finding moved to Pending Fix, send email notification
    - [Cobalt > Outlook] When DAST finding is detected, send email notification
3. Copy and customize the recipe
    1. Configure which pentest should trigger notifications when findings get created.
    2. Configure which email address to send the notification to.
4. Start the recipe

The following is a step-by-step guide to walk you through the configuration process.

### 1. Create an Outlook connection

The following is a quick guide on how to create a Workato connection for Microsoft Outlook.
In case you're looking for a more comprehensive and general guide on how to manage connections, check [here](/integrations/integrationbuilder/connect-your-applications/).

Go to the `Integration Builder` > `Projects`. Select or create a project on the left-side of the page. Then click on the "Create" button on the top-right and choose the "Connection" option.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/create_connection_step1.png" alt="Create a connection for your project" %}}

A "New Connection" page will show up. Look for "Outlook" and select the corresponding tile. You can optionally use the search field to quickly find the connection.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/create_connection_step2.png" alt="Pick an Outlook connection" %}}

After selecting the connection type, a form will appear. Provide a name, select a location (we recommend `Cobalt` > `Connections`) and click on "Sign in with Microsoft". If needed, you can configure "Advanced settings" as well.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/create_connection_step3.png" alt="Configure the connection" %}}

Once signed in with Microsoft, you should get a confirmation that the connection got successfully created.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/create_connection_step4.png" alt="Save the connection" %}}

### 2. Find and select a recipe

Go to the `Integration Builder` > `Library` and select Outlook.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step1.png" alt="Outlook tile" %}}

Choose one of the options:
  - [Cobalt > Outlook] When pentest finding moved to Pending Fix, send email notification
  - [Cobalt > Outlook] When DAST finding is detected, send email notification

For the purpose of this guide, we'll go with "When pentest finding moved to Pending Fix, send email notifications". The process is very similar for DAST findings, so these steps should help you out in that case as well.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step2.png" alt="Outlook recipes" %}}

### 3. Copy and customize the recipe

Click on "Use this recipe".

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step3.png" alt="Use Outlook recipe" %}}

You will be prompted to copy the recipe. Choose a preferred location and click "Copy and save".

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step4.png" alt="Copy Outlook recipe" %}}

#### 3.1 Configure which pentest should trigger notifications when findings get created

Select the Cobalt trigger at the top of the flow diagram. In the sidebar you can choose the pentest for which the recipe will trigger when new findings are created.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step5.png" alt="Configure Cobalt connection" %}}

#### 3.2 Configure which email address to send the notification to

Select "Send email from Outlook Mail" at the bottom of the flow diagram. At the top of the page, choose "Connection" to select the previously created Outlook connection, then provide an email in the "To" field. You can optionally customize To, BCC, Subject, and Message, among others, as needed.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step6.png" alt="Configure Outlook connection" %}}

Once ready, click "Save" at the top-right of the page.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step7.png" alt="Save recipe" %}}

### 4. Start the recipe

After saving the recipe, select "Start recipe" at the top of the page. This may take a few seconds.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/start_recipe.png" alt="Start recipe" %}}

Once the recipe is running, you will see the jobs tab to monitor any events. This can be left open to verify whether a created finding triggers the desired notification.
The recipe will continue running even when the tab is closed. Click "Stop recipe" if you need to stop running it, or to edit it.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/running_recipe.png" alt="Running recipe" %}}

Check [Create Test Finding](/integrations/development/create-test-finding/) to test the recipe.