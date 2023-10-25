---
title: "Configure Beta Integrations"
linkTitle: "Beta Integrations"
weight: 30
aliases: /integrations/beta-integrations/
toc_hide: true
hide_summary: true
description: >
  Learn how to configure beta intgerations.
---

{{< pageinfo >}}
<p>{{< beta-label >}}</p><p>Integrate third-party apps to streamline your remediation workflows.</p><p>{{< tier-feature-html>}} If you have questions or need help, please contact <a href="mailto:integrations@cobalt.io">integrations@cobalt.io</a> or your Customer Success Manager.</p>
{{< /pageinfo >}}

With our [beta integrations](/integrations/beta/), you can push Cobalt [findings](/platform-deep-dive/pentests/findings/) to your preferred task management software.

To configure the integration, complete the following steps:

1. In the Cobalt app, [create a webhook](#step-1-create-a-webhook) to trigger integration events.
1. [Sign in to your Workato workspace](#step-2-sign-in-to-your-workato-workspace).
1. [Connect to your Cobalt account](#step-3-connect-to-your-cobalt-account).
1. [Authenticate to the connected app](#step-4-authenticate-to-the-connected-app).

## What You Need

To complete the configuration, you need the following:

- **Webhook URL**: URL that is used in the configuration to send integration events. We'll send you your webhook URL in the onboarding email.
- **Organization token**: Unique organization token used in API calls. We'll send you your organization token in the onboarding email.
- **API token**: Your personal API token required to authorize access to the Cobalt API. Learn [how to create an API token](/cobalt-api/create-personal-api-token/).
- **Integration credentials**: Credentials for the connected platform.

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

1. In your Workato workspace, under **Projects**, select **Connections**.
1. Select **Cobalt Connection**.
1. Enter the following:
    - **Bearer token**: Paste the **API Token** that you created. Learn [how to create an API token](/cobalt-api/create-personal-api-token/).
    - **Org token**: Paste the **Organization Token** that you received from us in the onboarding email.
1. Select **Connect**.

## Step 4: Authenticate to the Connected App

To complete the integration, connect to the third-party app:

- [Asana](#asana)
- [Bitbucket Issues](#bitbucket-issues)
- [Jira (Beta)](#jira-beta)
- [PagerDuty](#pagerduty)
- [PivotalTracker](#pivotaltracker)
- [ServiceNow](#servicenow)
- [Trello](#trello)
- [Zendesk](#zendesk)

### Asana

The Asana connector uses OAuth for authentication. To set up your Asana integration:

1. In your Workato workspace, select **Projects**.
1. In the **Asana Beta Integration** project, select **Connections**.
1. Select **Asana Beta - Asana Connection**.
1. Select **Connect**, and sign in to your Asana account.
1. Select **Grant access**.

### Bitbucket Issues

The Bitbucket connector uses OAuth for authentication. To set up your Bitbucket integration:

1. In your Workato workspace, select **Projects**.
1. In the **Cobalt Bitbucket Integration** project, select **Connections**.
1. Select **Bitbucket Beta - Bitbucket Connection**.
1. Select **Connect**, and sign in to your Bitbucket account.
1. Select **Grant access**.

### Jira (Beta)

The Jira beta connector supports the following types of authentication:

- Basic authentication with a username and password
- OAuth 2.0 authentication
- API tokens
- Personal access tokens

To set up your Jira integration:

1. In your Workato workspace, select **Projects**.
1. In the **Jira Beta Integration** project, select **Connections**.
1. Select **Jira Beta - Jira Connection**.
1. On the connection screen, enter the following:
    - **Host Name**: Enter the value from the URL of your Jira account, for example, `organization.atlassian.net`.
    - **Authentication type**: Select the authentication method you want to use.
1. Sign in to your Jira account.

To learn more, see [How to connect to Jira on Workato](https://docs.workato.com/connectors/jira.html#how-to-connect-to-jira-on-workato).

### PagerDuty

To set up a connection with PagerDuty, you need an API Key. For instructions, read [How to create a PagerDuty API Key](https://docs.workato.com/connectors/pagerduty.html#how-to-create-a-pagerduty-api-key).

To set up your PagerDuty integration:

1. In your Workato workspace, select **Projects**.
1. In the **PagerDuty Beta Integration** project, select **Connections**.
1. Select **PagerDuty Beta - PagerDuty Connection**.
1. On the connection screen, enter your PagerDuty API key.
1. Select **Connect**.

### PivotalTracker

To set up a connection with PivotalTracker, you need an API Key. For instructions, read the [PivotalTracker documentation](https://www.pivotaltracker.com/help/articles/api_token/).

To set up your PivotalTracker integration:

1. In your Workato workspace, select **Projects**.
1. In the **PivotalTracker Beta Integration** project, select **Connections**.
1. Select **PIvotalTracker Beta - PivotalTracker Connection**.
1. On the connection screen, enter your PivotalTracker API token.
1. Select **Connect**.

### ServiceNow

The ServiceNow connector supports the following types of authentication:

- Basic authentication with a username and password
- OAuth 2.0 authentication

To set up your ServiceNow integration:

1. In your Workato workspace, select **Projects**.
1. In the **ServiceNow Beta Integration** project, select **Connections**.
1. Select **ServiceNow Beta - ServiceNow Connection**.
1. Sign in to your ServiceNow account.

To learn more, see [How to connect to ServiceNow on Workato](https://docs.workato.com/connectors/servicenow.html#how-to-connect-to-servicenow-on-workato).

### Trello

The Trello connector uses OAuth for authentication. To set up your Trello integration:

1. In your Workato workspace, select **Projects**.
1. In the **Trello Beta Integration** project, select **Connections**.
1. Select **Trello Beta - Trello Connection**.
1. Select **Connect**, and sign in to your Trello account.
1. Select **Grant access**.

### Zendesk

The Zendesk connector supports the following types of authentication:

- Basic authentication with a username and password
- OAuth 2.0 authentication

To set up your Zendesk integration:

1. In your Workato workspace, select **Projects**.
1. In the **Zendesk Beta Integration** project, select **Connections**.
1. Select **Zendesk Beta - Zendesk Connection**.
1. On the connection screen, enter the following:
    - **Subdomain** of your Zendek account. If your Zendesk URL is `https://organization.zendesk.com`, your subdomain is `organization`.
    - **Authentication type**: Basic or OAuth 2.0.
1. Sign in to your Zendesk account.

To learn more, see [How to connect to Zendesk on Workato](https://docs.workato.com/connectors/zendesk.html#how-to-connect-to-zendesk-on-workato).
