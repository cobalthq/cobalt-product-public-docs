---
title: "Outlook email notifications for pending pentest findings"
linkTitle: "Configure outlook email notifications for pending pentest findings"
weight: 30
---

## Configure outlook email notifications for pending pentest findings

In order to configure outlook to sen emails every time a new finding gets created, we need to do the following:
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

Find out how to create a Cobalt Connector [here](integrations/integrationbuilder/#connection)

### 2. Create an Outlook connection.

The following is a quick guide on how to create a Workato connection for Microsoft Outlook.
In case you're looking for a more comprehensive and general guide on how to manage connections, check [here](integrations/integrationbuilder/connect-your-applications/).

![Create a connection for your project](/integrations/integration_builder/findings_outlook_notifications/create_connection_step1.png "Create a connection for your project")

![Pick an Outlook connection](/integrations/integration_builder/findings_outlook_notifications/create_connection_step2.png "Pick an Outlook connection")

![Configure the connection](/integrations/integration_builder/findings_outlook_notifications/create_connection_step3.png "Configure the connection")

![Save the connection](/integrations/integration_builder/findings_outlook_notifications/create_connection_step4.png "Save the connection")


### 3. Find and select a recipe

Go to the Integration Builder > Library and look for Outlook.
![Add filters](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step1.png "Add filters")

Choose between both options:
A. [Cobalt > Outlook] When pentest finding moved to Pending Fix, send email notification
B. [Cobalt > Outlook] When DAST finding is detected, send email notification

For the sake of this guide, we'll assume you're interested in getting notified every time there's a new finding on a pentest. The process is very similar for DAST findings, so this should help you out in that case as well.

![Add filters](/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step1.png "Add filters")