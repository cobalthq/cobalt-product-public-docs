---
title: "Set up an Integration with GitHub"
linkTitle: "GitHub"
weight: 20
description: >
  Push Cobalt findings as issues to GitHub.
---

{{% pageinfo %}}
Learn how to set up an integration between Cobalt and GitHub (Cloud only). The availability of this feature depends on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).
{{% /pageinfo %}}

In this article:

- [Integration Overview](#integration-overview)
- [Configure the Integration](#configure-the-integration)
- [Push Findings to GitHub](#push-findings-to-github)
- [Remove the Integration](#remove-the-integration)
- [Frequently Asked Questions](#frequently-asked-questions)

## Integration Overview

[GitHub](https://github.com/) is a code hosting platform for version control and collaboration.

You can configure a **one-way integration** with GitHub to push Cobalt [findings](/platform-deep-dive/pentests/findings/) as issues to your GitHub repository.

- You can only push findings manually, one finding at a time.
- You need a personal GitHub access token. The integration supports both classic and fine-grained access tokens. Learn more about the [token types](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#types-of-personal-access-tokens).
  - For a fine-grained token, make sure that it has read and write access to issues and read access to metadata.
- The following finding fields are sent to GitHub:
  - Title
  - URL
  - Description
  - Suggested Fix

## Configure the Integration

As an [Organization Owner](/getting-started/glossary/#organization-owner) or [Member](/getting-started/glossary/#organization-member), you can enable the integration between Cobalt and GitHub.

1. In Cobalt, navigate to **Pentests**, and select the desired pentest.
1. Go to the **Integrations** tab.
1. Follow the instructions in the UI under **GitHub**.<br><br>
  ![Configure an integration between Cobalt and GitHub](/integrations/configure-GitHub-integration.png "between Cobalt and GitHub")

## Push Findings to GitHub

Once you've enabled the integration, you can push findings to your GitHub repository.

- We recommend pushing findings in the Pending Fix state. Learn more about the [finding states](/platform-deep-dive/pentests/findings/finding-states/).
- Because it's a one-way integration, any changes made to the finding in Cobalt are not synchronized with GitHub. You can add these details manually on GitHub.
- You can only push a finding once.

To push a finding to GitHub:

1. On the pentest page, go to the **Findings** tab, and select the desired finding.
1. Select **External Issue Tracking**, then select **Create issue on GitHub**.<br><br>
  ![Push a Cobalt finding to GitHub](/integrations/push-finding-to-GitHub.png "Push a Cobalt finding to GitHub")

A new issue is created in your GitHub repository, and the issue number appears under **External Issue Tracking** in Cobalt. Click the link to navigate to the issue.

![Link to a GitHub issue on a Cobalt finding](/integrations/GitHub-issue-on-finding.png "Link to a GitHub issue on a Cobalt finding")

## Remove the Integration

You may want to remove the integration with GitHub for a specific pentest.

1. In Cobalt, navigate to **Pentests**, and select the desired pentest.
1. Go to the **Integrations** tab.
1. Under **GitHub**, select **Remove**.

You can no longer push findings for this pentest to GitHub.

## Frequently Asked Questions

**Can I customize labels on GitHub issues?**

No, GitHub issues are created with standard labels:

- Cobalt
- Security

**Can I enable integrations with Jira and GitHub at the same time?**

Yes, you can use both integrations at the same time.

**Do images, attachments, and comments get pushed to GitHub?**

No, only the following fields get pushed:

- Title
- URL
- Description
- Suggested Fix
