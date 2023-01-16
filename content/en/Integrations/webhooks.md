---
title: "Get Pentest Updates with Webhooks"
linkTitle: "Webhooks"
weight: 10
description: >
  Set up webhook notifications for your organization.
---

{{% pageinfo %}}
Configure webhooks to subscribe to real-time updates for your pentests.
{{% /pageinfo %}}

With our API-based webhooks, you can set up an integration between your app and the Cobalt platform to get notifications for pentest events. We’ll send you updates for each event to your URL through an HTTP POST request.

When you work with an API, you can become aware of new data in the following ways:

- Repeatedly send requests to the same [API endpoint](/glossary/#api-endpoint) to retrieve new information, which is known as polling.
- Configure a webhook that automatically sends new data to the specified URL.

<!--Update the diagram once new webhook events are released.-->
{{< mermaid align="left" theme="default" >}}
sequenceDiagram
  title Webhook for pentest events
   Your App->>Cobalt Platform: Notify me of new pentest events
   Cobalt Platform-->>Your App: Pentest created
   Cobalt Platform-->>Your App: Finding created
   Cobalt Platform-->>Your App: Pentest state changed
   Cobalt Platform-->>Your App: Finding state changed
{{< /mermaid >}}
<br>

You can configure webhooks through the [API](https://docs.cobalt.io/v2/#webhooks) and in the [Cobalt UI](#configure-webhooks-in-the-ui).
<!-- Provide a link to API docs or API use case. -->

## Before You Start

Before you start creating webhooks, complete the configuration in your app.

1. Make sure that the **URL** where you want to receive notifications is valid and your services work properly. If possible, test your connections.
1. (Optional) To add an extra layer of security to the integration, generate a **webhook secret** in your app. When we send a POST request to your URL, we include your secret in the request header. This allows you to validate that the API request is from Cobalt.

Read our [Best Practices](https://docs.cobalt.io/v2/#best-practices) for more information.

## Webhook Events

When you set up a webhook, you subscribe to the following events related to your pentests:

| Pentest | Finding |
|---|---|
| <li>Pentest created</li><li>[Pentest state](/platform-deep-dive/pentests/pentest-process/pentest-states/) changed</li> | <li>Finding created</li><li>Finding deleted</li><li>Finding state changed</li><li>Finding updated</li>

For security reasons, we only post essential details about webhook events, such as their ID and type. To retrieve more information about the event, use the [Cobalt API](https://docs.cobalt.io/v2/).

## Configure Webhooks in the UI

Let’s configure webhooks in the Cobalt app.

### Create a Webhook

To create a webhook:

1. In the Cobalt app, navigate to the **Integrations** page, and then select **Webhooks** under **Native Integrations**.
1. On the **Webhooks** page, select **Create Webhook**.
1. In the overlay that appears, specify the following:
   - **Webhook Name**
   - **Webhook URL**: URL to which Cobalt sends HTTP POST requests for pentest [events](#webhook-events).
     - Use a unique name and URL for each webhook you create.
   - (Optional) **Secret**: Your [webhook secret](#before-you-start) that we use to authenticate a POST request to your URL.
1. When ready, select **Save**.
1. We send a test event to the specified URL to validate your webhook. The webhook becomes active once the validation is complete.
   - If the validation fails, we’ll deactivate your webhook within 24 hours. See [Troubleshoot Webhooks](#troubleshoot-webhooks) for more information.

![Create a webhook in the Cobalt UI](/integrations/CreateWebhook1.png "Create a webhook in the Cobalt UI")

### Manage Webhooks

Now you can manage the webhooks that you [created](#create-a-webhook).

- To make a webhook **inactive**, use the toggle under **Active**.
- To **edit** a webhook, select the three-dot icon {{% three-dots %}} under **Actions**, and then select **Edit Webhook**. Update webhook parameters in the overlay that appears.
- To **delete** a webhook, select the three-dot icon {{% three-dots %}} under **Actions**, and then select **Delete Webhook**.
  - You can make a webhook inactive without deleting it.

## Troubleshoot Webhooks

You can check the status of your webhooks on the **Webhooks** page. The following icons indicate that there is a problem with your webhook:

- **Yellow warning**: The webhook stopped responding to events at the specified time. We’ll deactivate the webhook after 48 hours of failed attempts.
- **Red error**: The webhook stopped responding, and we deactivated it after 48 hours of failed attempts.

Find solutions for common troubleshooting problems in the table below:

| Problem | Solution |
|---|---|
| You can’t create a webhook because the name or URL already exists. | Enter a unique name and URL for your webhook. |
| <li>You can’t create a webhook because the validation fails.</li><li>You don’t get webhook notifications to your URL.</li><li>You can't activate a webhook that we or you deactivated earlier.</li> | We failed to validate your webhook. Check the following:<li>The URL is valid and can accept requests.</li><li>If you're using a webhook secret to validate API requests from Cobalt, make sure that it's valid. Refresh the secret or generate a new one if needed.</li>|
| You can't delete a webhook. | <li>Try again.</li><li>Contact {{% csm-support %}} for assistance.</li> |
