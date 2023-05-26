---
title: "Integrate Jira with Cobalt"
linkTitle: "Jira"
weight: 10
description: >
  Set up an integration to push Cobalt findings to Jira.
---

{{% pageinfo %}}
Synchronize Cobalt [findings](/platform-deep-dive/pentests/findings/) with Jira issues bi-directionally. The availability of this feature depends on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).
{{% /pageinfo %}}

In this article:

- [Overview](#overview)
- [Frequently Asked Questions](#frequently-asked-questions)

## Overview

As an [Organization Owner](/getting-started/glossary/#organization-owner) or [Member](/getting-started/glossary/#organization-member), you can configure an integration between Cobalt and Jira to streamline your workflows. With this integration, you can:

- **Push Cobalt findings as issues** to your Jira project
- **Synchronize the status of Jira issues with Cobalt findings** once your team has completed remediation

The integration works through **Cobalt plugins for Jira** available on the Atlassian Marketplace.

| Jira Setup | Cobalt Plugin for Jira | Configuration Guide |
|---|---|---|
| Jira Cloud | [Cobalt for Jira Cloud](https://marketplace.atlassian.com/apps/1222623/cobalt-for-jira-cloud) | [Jira Cloud Integration](/integrations/jira/jira-cloud/) |
| Jira Server and Data Center | [Cobalt for Jira DC/Server](https://marketplace.atlassian.com/apps/1224424/cobalt-for-jira-dc-server) | [Jira Server and Data Center Integration](/integrations/jira/jira-server-dc/) |

The [auto-push](/integrations/jira/push-findings/#how-auto-push-works) option allows you to push findings to Jira automatically. Pentest collaborators can also [push findings manually](/integrations/jira/push-findings/#push-findings-manually).

If you have problems with your integration, see our [troubleshooting guide](/integrations/jira/troubleshoot-jira-integration/). To get more help, please contact your Customer Success Manager.

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{%expand "What is a finding?" %}}

A finding is a vulnerability that a pentester reports during a pentest on the Cobalt platform. Learn more about [findings](/platform-deep-dive/pentests/findings/).

{{% /expand %}}
<br>
{{%expand "What is a Jira issue (ticket)?" %}}

In Jira, an issue is a work item or an event that needs to be investigated within a project. Issues may also be referred to as tickets.

In the context of Jira integrations, a ticket is a finding that was synchronized with Jira.

{{% /expand %}}
<br>
{{%expand "Which required fields are supported to create Jira issues?" %}}

The following fields are required to create a Jira issue:

- Summary
- Issue type
- Reporter

{{% /expand %}}
<br>
{{%expand "Does the integration support custom required fields?" %}}

No, custom required fields are not supported.

{{% /expand %}}
<br>
{{%expand "Does the integration support the Component field on Jira issues?" %}}

No, components are not supported. Learn more about [Jira project components](https://support.atlassian.com/jira-software-cloud/docs/organize-work-with-components/).

{{% /expand %}}
<br>
{{%expand "What types of Jira projects does the integration support?" %}}

The integration supports software development Jira projects, such as:

- Kanban
- Scrum
- Bug Tracking

{{% /expand %}}
<br>
{{%expand "How often findings are synchronized between Cobalt and Jira?" %}}

Findings are synchronized frequently between the Cobalt platform and Jira, usually every minute.

{{% /expand %}}
<br>
{{%expand "Will historical findings be synchronized after I configure the Jira integration for a pentest?" %}}

Yes, only if findings are in the Pending Fix state.

{{% /expand %}}
<br>
{{%expand "Can I set up the Jira integration if I sign in using single sign-on (SSO)?" %}}

You can set up an integration with Jira regardless of your [sign-in method](/getting-started/sign-in/#sign-in-methods) and [two-factor authentication](/platform-deep-dive/cobalt-account/account-settings/#two-factor-authentication) status.

{{% /expand %}}

{{% alert title="Jira Plugins SLA" color="primary" %}}
Cobalt provides the Jira plugins to their customers to facilitate delivery of its services. Cobalt provides this integration on an "as-is" basis, and makes no guarantees on its functionality or interoperability with customers' systems.

Customers requiring support for the plugins should contact their Customer Success Manager. All requests are addressed within three (3) business days.
{{% /alert %}}
