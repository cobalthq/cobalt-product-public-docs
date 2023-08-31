---
title: "Switching to a New Jira Instance"
linkTitle: "Switching Jira Instances"
weight: 50
description: >
  Learn how to reconfigure your Jira integration with Cobalt.
---

{{% pageinfo %}}
Learn how to reconfigure your Jira integration if you:
- [Migrate from Jira Server or Data Center (DC) to Jira Cloud](#migrating-from-jira-serverdc-to-jira-cloud)
- [Switch to a new Jira Cloud instance](#switching-to-a-new-jira-cloud-instance)
{{% /pageinfo %}}

## Migrating from Jira Server/DC to Jira Cloud

If you're migrating entirely from Jira Server/DC to Jira Cloud, do the following:

1. Uninstall the Cobalt Jira plugin from your Jira Server/DC.
1. In Cobalt, delete the integration. Navigate to **Integrations** > **Jira**, and select **Delete**.<br><br>
    ![Delete a Jira integration in Cobalt](/integrations/delete-jira.png "Delete a Jira integration in Cobalt")
1. Follow the Atlassian [guide](https://www.atlassian.com/migration/plan/cloud-guide) to migrate from Jira Server/DC to Cloud.
    - **Important**: Don't change Jira project names while migrating.
1. [Integrate Jira Cloud with Cobalt](/integrations/jira/jira-cloud/).
1. Contact your Customer Success Manager to have findings with associated Jira issues in the old Jira Server/DC instance reassociated with issues on the new Jira Cloud instance. Provide the following information:
    - Your organization name
    - URL of the old Jira Server/DC instance
    - URL of the new Jira Cloud instance
    - [Tags](/getting-started/glossary/#pentest-tag) of pentests for which finding-to-ticket associations should be updated

{{% alert title="Note" color="primary" %}}
The Cobalt Jira plugin does not store any data that needs to be migrated. Jira tickets that were created for findings are stored in Jira similar to other tickets.
{{% /alert %}}

## Switching to a New Jira Cloud Instance

Follow this guide if:

- You're **not** migrating from Jira Server/DC to Jira Cloud; and
- You've set up a new Jira Cloud environment and want to switch the instance connected with Cobalt.

You can reconfigure the integration in two ways:

- [Option 1: Migrate existing tickets between Jira instances](#option-1-migrate-existing-tickets-between-jira-instances)
- [Option 2: Push findings to a new Jira instance](#option-2-push-findings-to-a-new-jira-instance)

### Option 1: Migrate Existing Tickets between Jira Instances

1. Uninstall the Cobalt Jira plugin from your current Jira Cloud instance.
1. In Cobalt, delete the integration. Navigate to **Integrations** > **Jira**, and select **Delete**.
1. Follow the Atlassian [documentation](https://confluence.atlassian.com/jirakb/migrate-projects-from-one-jira-cloud-site-to-another-779160766.html) to migrate projects between Jira instances. Migrate tickets related to findings.
    - **Important**: Don't change Jira project names while migrating.
1. [Configure the integration](/integrations/jira/jira-cloud/) between Cobalt and your new Jira Cloud instance.
1. Contact your Customer Success Manager to have findings with associated Jira issues in the old Jira Cloud instance reassociated with issues on the new Jira Cloud instance. Provide the following information:
    - Your organization name
    - URL of the old Jira Cloud instance
    - URL of the new Jira Cloud instance
    - [Tags](/getting-started/glossary/#pentest-tag) of pentests for which finding-to-ticket associations should be updated
    - Migration option you selected (Option 1: Migrate existing tickets between Jira instances)

### Option 2: Push Findings to a New Jira Instance

1. Uninstall the Cobalt Jira plugin from your current Jira Cloud instance.
1. In Cobalt, delete the integration. Navigate to **Integrations** > **Jira**, and select **Delete**.
1. [Install and connect the **Cobalt for Jira Cloud** plugin](/integrations/jira/jira-cloud/#step-1-connect-the-jira-plugin).
    - **Important**: Do not configure integrations for pentests in Cobalt.
1. Contact your Customer Success Manager to have findings-to-ticket associations deleted. Provide the following information:
    - Your organization name
    - URL of the old Jira Cloud instance
    - [Tags](/getting-started/glossary/#pentest-tag) of pentests for which finding-to-ticket associations should be deleted
    - Migration option you selected (Option 2: Push findings to a new Jira instance)
1. In Cobalt, [configure the Jira Cloud integration for pentests](/integrations/jira/jira-cloud/#step-2-configure-the-integration-for-a-pentest).
1. [Enable auto-push](/integrations/jira/push-findings/#turn-auto-push-on-or-off) for pentests. Navigate to **Integrations** > **Jira** > **Configuration**, and turn on the **Auto-Push** toggle.

Findings in the Pending Fix state should be synchronized with your new Jira Cloud instance. If the synchronization doesn't work, you can [push findings manually](/integrations/jira/push-findings/#push-findings-manually).
