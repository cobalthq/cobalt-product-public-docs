---
title: "Jira Data Center Integration"
linkTitle: "Jira Data Center"
weight: 20
description: >
  Push Cobalt findings to your Jira Data Center.
---

{{% pageinfo %}}
Learn how to integrate **Jira Data Center** with Cobalt. The availability of this feature depends on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).

If your organization uses Jira Cloud, see [Jira Cloud Integration](/integrations/jira/jira-cloud/).
{{% /pageinfo %}}

## Configuration

**Required permissions**:

- **Cobalt**: [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) or [Member](/platform-deep-dive/collaboration/user-roles/#organization-member)
- **Jira**: Jira admin

### Step 1: Connect the Jira Plugin

1. In Cobalt, go to **Integrations** > **Jira**.
1. Under **What type of Jira setup are you using?**, select **Jira Data Center**.
    {{% image src="/integrations/configure-jira-dc-integration.png" alt="Select to configure the integration with Jira Data Center in Cobalt" %}}
1. Follow the instructions in the UI to install and connect the [Cobalt for Jira DC](https://marketplace.atlassian.com/apps/1224424/cobalt-for-jira-dc-server?tab=overview&hosting=datacenter) plugin.
1. Return to the Cobalt app, and check the integration status. You should see your Jira instance on the **Jira Integration** page.<br>
    {{% image src="/integrations/jira-integration-status.png" alt="Jira integration status in Cobalt" %}}

### Step 2: Configure the Integration for a Pentest

1. In Cobalt, go to **Integrations** > **Jira** > **Configuration**. Here, you can see pentests for which you can configure the integration.
1. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").
    {{% image src="/integrations/configure-jira-integration-for-pentest.png" alt="Select a pentest for which you want to configure the Jira integration" %}}
1. In the overlay that appears, configure integration parameters:
    - **Jira Project**
    - **Issue Type**
    - **Labels** to add to Jira issues
    {{% image src="/integrations/jira-configuration-parameters-for-pentest-1.png" alt="Configure Jira integration parameters for a pentest" %}}
    - **State Mapping (Jira to Cobalt)**: Map Jira issue statuses to Cobalt finding states.
    {{% image src="/integrations/jira-configuration-parameters-for-pentest-2.png" alt="Map Jira issue statuses to Cobalt finding states" %}}
1. Select **Save**.

## How the Integration Works

{{% jira-configured %}}

<br>
{{%expand "Learn how finding parameters are mapped between Cobalt and Jira." %}}
<br>

**Mappings of finding fields to Jira issue fields (Cobalt → Jira DC)**:

- Finding Title → Jira ticket title
- Pentest ID → Description - Cobalt URL
- Description → Description - Overview
- Affected URL(s) → Description - Browser URL
- Proof of Concept → Description - Steps to Reproduce
- Suggested Fix → Description - Suggested Fix
- Attachments → Attachments

The following parameters are **not** exported:

- Vulnerability Type
- Severity
- Prerequisites
- HTTP Request
- Comments

{{% /expand %}}

{{< alert title="Note" color="primary" >}}
You can synchronize findings' [severity levels](/platform-deep-dive/pentests/findings/severity-levels/) with Jira using the **Cobalt Severity** field. [Learn more](/integrations/jira/synchronize-severity-levels/).
{{< /alert >}}

## Attachments Support

You can add attachments to Cobalt findings. To ensure that attachments are created properly on the Jira Data Center, verify the following:

- On the machine where Jira Data Center is installed, locate your `$JIRA_HOME` directory. Follow the Atlassian documentation on [how to locate the Jira application home directory](https://confluence.atlassian.com/adminjiraserver/jira-application-home-directory-938847746.html).
- The user must have permissions to:
  - Create a `$JIRA_HOME/import/cobalt` directory.
  - Read and write files within the `$JIRA_HOME/import/cobalt` directory.

## Delete the Integration

{{% jira-deactivate %}}
