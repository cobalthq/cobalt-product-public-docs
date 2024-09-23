---
title: "Outlook email notifications for pending pentest findings"
linkTitle: "Configure outlook email notifications for pending pentest findings"
weight: 30
---

## Configure outlook email notifications for pending pentest findings

In order to configure Outlook to send emails every time a new finding gets created, we need to do the following:
1. Create a Cobalt connection.
2. Create an Outlook connection.
3. Find and select a recipe (2 options):
  A. [Cobalt > Outlook] When pentest finding moved to Pending Fix, send email notification
  B. [Cobalt > Outlook] When DAST finding is detected, send email notification
4. Copy and customize the recipe
  1. Configure which pentest should trigger notififcaitons when findings get created.
  2. Configure which email address to send the to.
5. Start the recipe

The following is a step-by-step guide to walk you through the configuration process.

### 1. Create a Cobalt connection.

Find out how to create a Cobalt Connector [here](integrations/integrationbuilder/#connection).

### 2. Create an Outlook connection.

The following is a quick guide on how to create a Workato connection for Microsoft Outlook.
In case you're looking for a more comprehensive and general guide on how to manage connections, check [here](integrations/integrationbuilder/connect-your-applications/).

Go to the `Integration Builder` > `Projects`. Select or create a project on the left-side of the page. Then click on the "Create" button on the top-right and choose the "Connection" option.
![Create a connection for your project](/integrations/integration_builder/findings_outlook_notifications/create_connection_step1.png "Create a connection for your project")

A "New Connection" page will show up. Look for "Outlook" and select the corresponding tile. You can optionally use the search field to quickly find the connection.
![Pick an Outlook connection](/integrations/integration_builder/findings_outlook_notifications/create_connection_step2.png "Pick an Outlook connection")

After selecting the connection type, a form will appear. Provide a name, select a location and click on "Sign in with Windows". If needed, you can configure "Advanced settings" as well.
![Configure the connection](/integrations/integration_builder/findings_outlook_notifications/create_connection_step3.png "Configure the connection")

Once signed in with Microsoft, you should get a confirmation that the connection got successfully created.
![Save the connection](/integrations/integration_builder/findings_outlook_notifications/create_connection_step4.png "Save the connection")

### 3. Find and select a recipe

Go to the `Integration Builder` > `Library` and select Outlook. 
![Outlook tile](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step1.png "Outlook tile")

Choose between both options:
A. [Cobalt > Outlook] When pentest finding moved to Pending Fix, send email notification
B. [Cobalt > Outlook] When DAST finding is detected, send email notification
For the purpose of this guide, we'll go with "When pentest finding moved to Pending Fix, send email notifications". The process is very similar for DAST findings, so these steps should help you out in that case as well.
![Outlook recipes](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step2.png "Outlook recipes")

Click on "Use this recipe".
![Use Outlook recipe](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step3.png "Use Outlook recipe")

You will be prompted to copy the recipe. Choose a preferred location and click "Copy and save".
![Copy Outlook recipe](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step4.png "Copy Outlook recipe")

Select the Cobalt trigger at the top of the flow diagram, in order to select the already created Cobalt Connector you want to use. In the sidebar you will be able to select which pentest you want the recipe to listen for findings from. Choose whichever you want to configure the recipe for.
![Configure Cobalt connection](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step5.png "Configure Cobalt connection")

Select "Send email from Outlook Mail" at the bottom of the flow diagram. At the top of the page choose "Connection" to select the previously created Outlook connection. Then provide an email in the "To" field. You can optionally customize To, BCC, Subject and Message, among others as needed.
![Configure Outlook connection](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step6.png "Configure Outlook connection")

Once ready, click "Save" at the top-right of the page.
![Save recipe](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step7.png "Save recipe")