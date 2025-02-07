---
title: "Jira Cloud Integration"
linkTitle: "Jira Cloud"
weight: 10
description: >
  Push Cobalt findings to your Jira Cloud.
---

{{% pageinfo %}}
Learn how to integrate **Jira Cloud** with Cobalt. The availability of this feature depends on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).

If your organization uses Jira Data Center, see [Jira Data Center Integration](/integrations/jira/jira-server-dc/).
{{% /pageinfo %}}

## Configuration

**Required permissions**:

- **Cobalt**: [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) or [Member](/platform-deep-dive/collaboration/user-roles/#organization-member)
- **Jira**: Jira admin

### Step 1: Connect the Jira Plugin

1. In Cobalt, go to **Integrations** > **Jira**.
1. Under **What type of Jira setup are you using?**, select **Jira Cloud**.<br><br>
    {{% image src="/integrations/configure-jira-integration.png" alt="Select to configure the integration with Jira Cloud in Cobalt" %}}
1. Follow the instructions in the UI to install and connect the [Cobalt for Jira Cloud](https://marketplace.atlassian.com/apps/1222623/cobalt-for-jira-cloud?hosting=cloud&tab=overview) plugin.
1. Return to the Cobalt app, and check the integration status. You should see your Jira instance on the **Jira Integration** page.<br><br>
    {{% image src="/integrations/jira-integration-status.png" alt="Jira integration status in Cobalt" %}}

When you're done, configure the integration for specific pentests.

### Step 2: Configure the Integration for a Pentest

Once you've connected the Jira plugin, configure the integration for specific pentests.

1. In Cobalt, go to **Integrations** > **Jira** > **Configuration**. Here, you can see pentests for which you can configure the integration. 
1. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").<br><br>
    {{% image src="/integrations/configure-jira-integration-for-pentest.png" alt="Select a pentest for which you want to configure the Jira integration" %}}
1. In the overlay that appears, configure integration parameters:
    - **Jira Project**
    - **Issue Type**
    - **Labels** to add to Jira issues<br><br>
    {{% image src="/integrations/jira-configuration-parameters-for-pentest-1.png" alt="Configure Jira integration parameters for a pentest" %}}
    - **State Mapping (Jira to Cobalt)**: Map Jira issue statuses to Cobalt finding states.<br><br>
    {{% image src="/integrations/jira-configuration-parameters-for-pentest-2.png" alt="Map Jira issue statuses to Cobalt finding states" %}}
1. Select **Save**.

## How the Integration Works

{{% jira-configured %}}

<br>
{{%expand "Learn how finding parameters are mapped between Cobalt and Jira." %}}
<br>

**Mappings of finding fields to Jira issue fields (Cobalt → Jira Cloud)**:

- Finding Title → Jira ticket title
- Pentest ID → Description - Cobalt URL
- Description → Description - Overview
- Affected URL(s) → Description - Browser URL
- Proof of Concept → Description - Steps to Reproduce
- Suggested Fix → Description - Suggested Fix

The following parameters are **not** exported:

- Vulnerability Type
- Severity
- Prerequisites
- HTTP Request
- Attachments
- Comments

{{% /expand %}}

{{< alert title="Note" color="primary" >}}
You can synchronize findings' [severity levels](/platform-deep-dive/pentests/findings/severity-levels/) with Jira using the **Cobalt Severity** field. [Learn more](/integrations/jira/synchronize-severity-levels/).
{{< /alert >}}

## Delete the Integration

{{% jira-deactivate %}}
