---
title: "Cobalt Integrations"
linkTitle: "Integrations"
weight: 110
no_list: true
description: >
  Integrate third-party apps and configure webhooks.
---

{{% pageinfo %}}
Streamline your pentesting and development workflows with Cobalt integrations.
{{% /pageinfo %}}

{{< alert title="Note" color="primary" >}}
{{< tier-feature >}}
{{< /alert >}}

{{% get-started-integrations %}}

- Set up **Native** integrations in the Cobalt app to push Cobalt data to external apps. Here, you can also create [webhooks](/integrations/webhooks/) to get real-time pentest updates.
- Enable **Partner** integrations in third-party apps. You need an [API token](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui) to pull Cobalt data to external apps.

<!-- Links to Zendesk are temporary. We'll change them once the content is moved to Product Docs. -->
| Integration | Type | Use |
|:---|:---|:---|
| <img src="/integrations/Jira.png" alt="Jira icon" title="Jira icon" width="35" style="padding-right: 5px"> [Jira](https://cobaltio.zendesk.com/hc/en-us/sections/4407694113044-Integration-Guides) | Native | <li>Push Cobalt findings as issues to Jira Cloud, Server, or Data Center</li><li>Synchronize Cobalt findings with Jira tickets bi-directionally</li>
| <img src="/integrations/Github.png" alt="GitHub icon" title="GitHub icon" width="35" style="padding-right: 5px"> [GitHub](https://cobaltio.zendesk.com/hc/en-us/articles/360058712591-How-do-I-set-up-GitHub-Integration-) | Native | Push Cobalt findings as issues to GitHub (Cloud only)
| <img src="/integrations/Webhooks.png" alt="Webhooks icon" title="Webhooks icon" width="35" style="padding-right: 5px"> [Webhooks](/integrations/webhooks/) | Native | Subscribe to real-time notifications for pentest events using API-based webhooks
| <img src="/integrations/AzureDevOps.png" alt="Azure DevOps icon" title="Azure DevOps icon" width="35" style="padding-right: 5px"> [Azure DevOps](/integrations/beta/) | Native | {{< beta-label >}} Push findings as work items to Azure DevOps
| <img src="/integrations/Bitbucket.png" alt="Bitbucket icon" title="Bitbucket icon" width="35" style="padding-right: 5px"> [Bitbucket](/integrations/beta/) | Native | {{< beta-label >}} Push findings as issues to Bitbucket
| <img src="/integrations/ServiceNow.png" alt="ServiceNow icon" title="ServiceNow icon" width="35" style="padding-right: 5px"> [ServiceNow](/integrations/beta/) | Native | {{< beta-label >}} Push findings as incidents to ServiceNow
| <img src="/integrations/Jupiterone.png" alt="JupiterOne icon" title="JupiterOne icon" width="35" style="padding-right: 5px"> [JupiterOne](https://community.askj1.com/kb/articles/994-cobalt-integration-with-jupiterone) | Partner | Analyze pentest data with JupiterOne tools
| <img src="/integrations/OneTrust.png" alt="OneTrust icon" title="OneTrust icon" width="35" style="padding-right: 5px"> [OneTrust](https://www.onetrust.com/products/certification-automation/) | Partner | Pull Cobalt pentest information into the OneTrust GRC & Security Assurance Cloud platform (previously Tugboat Logic)
| <img src="/integrations/Defectdojo.png" alt="DefectDojo icon" title="DefectDojo icon" width="35" style="padding-right: 5px"> [DefectDojo](https://defectdojo.github.io/django-DefectDojo/integrations/parsers/#cobaltio-api-import) | Partner | Import your Cobalt pentest findings into DefectoDojo with Cobalt API
| <img src="/integrations/Kennasecurity.png" alt="Kenna Security icon" title="Kenna Security icon" width="35" style="padding-right: 5px"> [Kenna Security](https://github.com/KennaSecurity/toolkit/tree/main/tasks/connectors/cobaltio#readme) | Partner | Import Cobalt pentest findings
| <img src="/integrations/PlexTrac.png" alt="PlexTrac icon" title="PlexTrac icon" width="35" style="padding-right: 5px"> [PlexTrac](https://docs.plextrac.com/plextrac-documentation/product-documentation/account-management/account-admin/tools-and-integrations/integrations/cobalt) | Partner | Import Cobalt findings into a PlexTrac report
| <img src="/integrations/anecdotes.png" alt="anecdotes icon" title="anecdotes icon" width="35" style="padding-right: 5px"> [anecdotes](https://www.anecdotes.ai/plugins/security) | Partner | Integrate Cobalt findings into the anecdotes.ai compliance operating system

## Request a Beta Integration

Request to enable a beta integration for your next pentest to streamline your remediation workflows. Customize the configuration to suit your needs, and start pushing Cobalt findings to your preferred task management software:

- Azure DevOps
- Bitbucket
- ServiceNow

Learn more about [beta integrations](/integrations/beta/).

## Build Your Own Integration

Use our API to build your own integrations. You need a Cobalt [API token](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui) to make REST calls.

Refer to the [API documentation](https://docs.cobalt.io/) for details.

## Suggest an Integration

We're working to integrate more solutions with the Cobalt platform. You can suggest a tool that would support your workflows:

- On the **Integrations** page under **Suggest an Integration**
- By sending an email to [integrations@cobalt.io](mailto:integrations@cobalt.io)
