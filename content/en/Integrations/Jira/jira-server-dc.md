---
title: "Jira Server and Data Center Integration"
linkTitle: "Jira Server and Data Center"
weight: 20
description: >
  Push Cobalt findings to your Jira Server or Data Center.
---

{{% pageinfo %}}
Learn how to integrate **Jira Server** or **Jira Data Center** with Cobalt. The availability of this feature depends on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).

If your organization uses Jira Cloud, see [Jira Cloud Integration](/integrations/jira/jira-cloud/).
{{% /pageinfo %}}

In this article:

- [Configuration](#configuration)
  - [Step 1: Connect the Jira Plugin](#step-1-connect-the-jira-plugin)
  - [Step 2: Configure the Integration for a Pentest](#step-2-configure-the-integration-for-a-pentest)
- [How the Integration Works](#how-the-integration-works)
- [Attachments Support](#attachments-support)
- [Deactivate the Integration](#deactivate-the-integration)

## Configuration

**Required permissions**:

- **Cobalt**: [Organization Owner](/getting-started/glossary/#organization-owner) or [Member](/getting-started/glossary/#organization-member)
- **Jira**: Jira admin

### Step 1: Connect the Jira Plugin

1. In Cobalt, go to **Integrations** > **Jira**.
1. Under **What type of Jira setup are you using?**, select **Jira Server**.<br><br>
    ![Select to configure the integration with Jira Server in Cobalt](/integrations/configure-jira-server-dc-integration.png "Select to configure the integration with Jira Server in Cobalt")
1. Follow the instructions in the UI to install and connect the [Cobalt for Jira DC/Server](https://marketplace.atlassian.com/apps/1224424/cobalt-for-jira-dc-server?tab=overview&hosting=datacenter) plugin.
1. Return to the Cobalt app, and check the integration status. You should see your Jira instance on the **Jira Integration** page.<br><br>
    ![Jira integration status in Cobalt](/integrations/jira-integration-status.png "Jira integration status in Cobalt")

### Step 2: Configure the Integration for a Pentest

1. In Cobalt, go to **Integrations** > **Jira** > **Configuration**. Here, you can see pentests for which you can configure the integration. Pentests in the Draft state are not displayed.
1. For the desired pentest, select the gear icon ![Gear icon](/icons/Gear.png "Gear icon").<br><br>
    ![Select a pentest for which you want to configure the Jira integration](/integrations/configure-jira-integration-for-pentest.png "Select a pentest for which you want to configure the Jira integration")
1. In the overlay that appears, configure integration parameters:
    - **Jira Project**
    - **Issue Type**
    - **Labels** to add to Jira issues<br><br>
    ![Configure Jira integration parameters for a pentest](/integrations/jira-configuration-parameters-for-pentest-1.png "Configure Jira integration parameters for a pentest")
    - **State Mapping (Jira to Cobalt)**: Map Jira issue statuses to Cobalt finding states.<br><br>
    ![Map Jira issue statuses to Cobalt finding states](/integrations/jira-configuration-parameters-for-pentest-2.png "Map Jira issue statuses to Cobalt finding states")
1. Select **Save**.

## How the Integration Works

{{% jira-configured %}}

<br>
{{%expand "Learn how finding parameters are mapped between Cobalt and Jira." %}}
<br>

**Mappings of finding fields to Jira issue fields (Cobalt → Jira Server/DC)**:

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

You can add attachments to Cobalt findings. To ensure that attachments are created properly on the Jira Server, verify the following:

- On the machine where Jira Server is installed, locate your `$JIRA_HOME` directory. Follow the Atlassian documentation on [how to locate the Jira application home directory](https://confluence.atlassian.com/adminjiraserver/jira-application-home-directory-938847746.html).
- The user must have permissions to:
  - Create a `$JIRA_HOME/import/cobalt` directory.
  - Read and write files within the `$JIRA_HOME/import/cobalt` directory.

## Deactivate the Integration

{{% jira-deactivate %}}
