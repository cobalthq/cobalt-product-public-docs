---
title: "Push Cobalt Findings to Jira"
linkTitle: "Push Findings to Jira"
weight: 30
description: >
  Streamline your remediation workflows with the Jira integration.
---

{{% pageinfo %}}
Learn how auto-push works and how to push findings to Jira manually.
{{% /pageinfo %}}

## How Auto-Push Works

Once an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) or [Member](/platform-deep-dive/collaboration/user-roles/#organization-member) has enabled the Jira integration on a pentest, findings start to automatically synchronize with the selected Jira project. The **Auto-Push** option is enabled by default.

Here's how auto-push works:

- When a new finding in the **Pending Fix** state is created on a pentest in Cobalt, a new issue is created in your Jira project.
  - The issue status in Jira is based on the project configuration. It's the first status in your project workflow, for example, To Do.
  - If the integration is enabled on a pentest with existing findings, Jira tickets are created for them retroactively.
- Findings whose [state](/platform-deep-dive/pentests/findings/finding-states/) is not Pending Fix are not automatically pushed to Jira. If the finding state changes to Pending Fix, the finding is automatically pushed.
- Once an issue is created in Jira, the issue ID appears on the finding in Cobalt under **External Issue Tracking**. Click the link to navigate to the issue.<br><br>
    ![Jira issue link on the finding page](/integrations/external-issue-tracking-jira.png "Jira issue link on the finding page")

### Turn Auto-Push on or Off

As an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) or [Member](/platform-deep-dive/collaboration/user-roles/#organization-member), you can turn auto-push on or off for specific pentests as needed.

1. In Cobalt, go to **Integrations** > **Jira** > **Configuration**.
1. For the desired pentest, turn the **Auto-Push** toggle on or off.<br><br>
    ![Turn auto-push on or off for specific pentests](/integrations/auto-push-toggle-for-Jira.png "Turn auto-push on or off for specific pentests")

When auto-push is turned off, Jira issue statuses are still synchronized with Cobalt finding states.

## Push Findings Manually

As a [Pentest Team Member](/platform-deep-dive/collaboration/user-roles/#pentest-team-member), you can push findings to Jira manually—if they're not already synchronized. This may be needed if:

- [Auto-push](#how-auto-push-works) is turned off on a pentest; or
- The [finding state](/platform-deep-dive/pentests/findings/finding-states/) is other than Pending Fix, even though auto-push is enabled. If you want to push findings in other states, you can do it manually.

To push a finding to Jira manually:

1. On the pentest page, navigate to the **Findings** tab, and select the desired finding.
1. Select **External Issue Tracking**, then select **Create issue in JIRA**.
