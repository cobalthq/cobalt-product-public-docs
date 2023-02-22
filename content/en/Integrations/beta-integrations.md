---
title: "Configure Beta Integrations"
linkTitle: "Beta Integrations"
weight: 30
toc_hide: true
hide_summary: true
description: >
  Learn how to configure beta intgerations.
---

{{< pageinfo >}}
<p>{{< beta-label >}}</p><p>Integrate third-party apps to streamline your remediation workflows.</p><p>If you have questions or need help, please contact <a href="mailto:integrations@cobalt.io">integrations@cobalt.io</a> or your Customer Success Manager.</p>
{{< /pageinfo >}}

With our [beta integrations](/integrations/#request-a-beta-integration), you can push Cobalt [findings](/platform-deep-dive/pentests/findings/) to your preferred task management software.

To configure the integration, complete the following steps:

1. In the Cobalt app, [create a webhook](#step-1-create-a-webhook) to trigger integration events.
1. [Sign in to your Workato workspace](#step-2-sign-in-to-your-workato-workspace).
1. [Connect to your Cobalt account](#step-3-connect-to-your-cobalt-account).
1. [Authenticate to the connected app](#step-4-authenticate-to-the-connected-app).

## What You'll Need

To complete the configuration, you need the following:

- **Webhook URL**: URL that is used in the configuration to send integration events. We'll send you your webhook URL in the onboarding email.
- **Organization Token**: Unique organization token used in API calls. We'll send you your organization token in the onboarding email.
- **API Token**: Your personal API token required to authorize access to the Cobalt API. Learn [how to create an API token](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui).
- **Integration Credentials**: Credentials for the connected platform.

## Step 1: Create a Webhook

Prior to your onboarding call with our Integrations team, you'll receive an email from us with the subject line `Cobalt Beta Integration Onboarding Details`. The email contains your **Webhook URL**.

Create a webhook using the **Webhook URL** from the email. For instructions, see [Create a Webhook](/integrations/webhooks/#create-a-webhook). Make sure that the webhook is active.

## Step 2: Sign In to Your Workato Workspace

To enable a beta integration, sign in to your Cobalt Customer Workspace in Workato. To learn more about Workato workspaces, read their [documentation](https://docs.workato.com/workspace.html#what-is-in-my-workspace).

1. In the email invitation that you receive, select **View Invitation**.
1. To set up your account, enter your name and email address, and create a password. Select **Create your account** to confirm.
1. Once signed in, select your name in the upper-left corner, and then select the workspace with your company name.
1. On the welcome page of the integration center, select **Get started**.

## Step 3: Connect to Your Cobalt Account

Once you've signed in to your Workato workspace, you need to authenticate to your Cobalt account.

1. In the Workato workspace, under **Projects**, select **Connections**.
1. Select **Cobalt Connection**.
1. Enter the following:
    - **Bearer token**: Paste the **API Token** that you created. Learn [how to create an API token](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui).
    - **Org token**: Paste the **Organization Token** that you received from us in the onboarding email.
1. Select **Connect**.

## Step 4: Authenticate to the Connected App

To complete the integration, connect to the third-party app.

1. In the Workato workspace, under **Projects**, select the connection for the desired third-party platform, for example, **Cobalt Bitbucket Integration**.
1. Follow the instructions for specific apps:
    - [Azure DevOps (Boards)](#azure-devops-boards)
    - [Bitbucket Issues](#bitbucket-issues)
    - [ServiceNow](#servicenow)

### Azure DevOps (Boards)

To set up a connection with Azure DevOps, you need a **Personal access token**. For details, read the [Azure DevOps documentation](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat).

### Bitbucket Issues

The Bitbucket connector uses OAuth for authentication. To set up your Bitbucket integration:

1. In the Workato workspace, under **Projects**, select **Connections** in the **Cobalt Bitbucket Integration** project.
1. Select **Bitbucket Beta Connection** in the list.
1. On the connection screen, select **Connect**, and enter your Bitbucker sign-in credentials.
1. Select **Grant access**.

You should see a page confirming a successful connection.

<!--### ServiceNow-->
