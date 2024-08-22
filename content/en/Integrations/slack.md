---
title: "Integrate Slack with Cobalt"
linkTitle: "Slack"
weight: 20
description: >
    Receive updates in Slack
---

{{% pageinfo %}}
Learn how to set up an integration between Cobalt and Slack. The availability of this feature depends on your [PtaaS tier](https://docs.cobalt.io/platform-deep-dive/credits/ptaas-tiers/).
{{% /pageinfo %}}


## Integration Overview
Slack is a messaging platform for team collaboration.

Currently, Cobalt offers standard Slack recipes enabling:

- Attack Surface: Get a weekly update about your Attack Surface directly in a Slack channel you specify.
  - The weekly update will include:
    - Number of monitored Domains
    - Total number of Targets detected
    - Number of new Targets detected in the last 7 days

You can configure the Slack integration using Cobalt’s [Integration Builder](/integrations/integrationbuilder/) feature.

We will be adding more functionality to Slack over the coming months.

## Configure the Integration
As an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) or [Member](/platform-deep-dive/collaboration/user-roles/#organization-member), you can:

1. In Cobalt, navigate to Integrations, and click “[Open Integration Builder](https://app.us.cobalt.io/integrations/builder)”
2. Go to the Library tab.
3. Search for “Slack.”
4. Pick “Workbot for Slack.”
5. Pick the recipe called “Weekly Attack Surface Stats on Slack.”
6. Now you will be presented with what the recipe does. From here, click “Use this Recipe” in the upper right corner.
7. Save it under an existing Project or create a new Project.

Now the recipe has been added to your Org. Next steps will require you to have the Workato Workbot added to your Slack Workspace.

###### 1. Install Workbot in Slack
Go to the Slack App Directory: Visit the Slack App Directory and search for "Workbot."

Install the App: Click the "Add to Slack" button to install Workbot to your workspace. You may need admin permissions to do this.
Note: The Workbot Slack App says it’s “Paid with a free trial” – adding the Workato Workbot is free of charge, as Cobalt already has a partnership in place with Workato.

###### 2. Authorize Workbot

Authorization: Once you’ve installed the app, Slack will prompt you to authorize Workbot to access your workspace. Review the permissions and click “Authorize.”

###### 3. Add Workbot to a Slack Channel
Select a Channel: Decide which channel(s) you want Workbot to send messages to.

Invite Workbot: In Slack, go to the channel you’ve chosen and type `/invite @Workbot` to invite the bot to the channel.



Once the Workbot is added to your Slack workspace, you need to add it to the specific Slack channel where you want it to send messages.

With this done, you can go through the last steps of setting up the Slack integration in the Integration Builder:

###### 4. Give the connection a Name, e.g., “Cobalt Slack Connector.”

###### 5. In “Reply Channel,” pick the Slack channel you want the Workbot to send to in the dropdown.

###### 6. Test the integration by clicking “Test Recipe.”

## Deactivate the Integration
You may want to deactivate the integration with Slack.

1. In Cobalt, navigate to **Integrations**, and click “Open Integration Builder.”
2. Go to the **Projects** tab.
3. Under **Connections**, select the connection you want to remove, and click **Delete** in the meatball menu.

### Frequently Asked Questions

Q: The Workbot Slack App says it’s “Paid with a free trial” – will we be paying extra for this?
A: Cobalt has a partnership deal with Workato, and there will be no extra costs for adding and using the Workbot.
