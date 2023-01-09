---
title: "Cobalt Integrations"
linkTitle: "Integrations"
weight: 110
description: >
  Integrate third-party apps and configure webhooks.
---

{{% pageinfo %}}
Streamline your pentesting and development workflows with Cobalt integrations.
{{% /pageinfo %}}

{{% alert title="Note" color="primary" %}}
The availability of this feature is based on your <a href="https://www.cobalt.io/pentest-pricing" target="_blank">PtaaS tier</a>.
{{% /alert %}}
 
To get started, navigate to the **Integrations** page in the Cobalt app.

- Set up **Native** integrations in the Cobalt app to push Cobalt data to external apps. Here, you can also create [webhooks](/integrations/webhooks/) to get real-time pentest updates.
- Enable **Partner** integrations in third-party apps. You need an [API token](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui) to pull Cobalt data to external apps.

<!-- Links to Zendesk are temporary. We'll change them once the content is moved to Product Docs. -->
| Integration | Type | Use |
|:---|:---|:---|
| <img src="/integrations/Jira.png" alt="Jira icon" title="Jira icon" width="30"> [Jira](https://cobaltio.zendesk.com/hc/en-us/sections/4407694113044-Integration-Guides) | Native | <li>Push Cobalt findings as issues to Jira Cloud, Server, or Data Center</li><li>Synchronize Cobalt findings with Jira tickets bi-directionally</li>
| <img src="/integrations/Github.png" alt="GitHub icon" title="GitHub icon" width="30"> [GitHub](https://cobaltio.zendesk.com/hc/en-us/articles/360058712591-How-do-I-set-up-GitHub-Integration-) | Native | Push Cobalt findings as issues to GitHub (Cloud only)
| <img src="/integrations/Webhooks.png" alt="Webhooks icon" title="Webhooks icon" width="30"> [Webhooks](/integrations/webhooks/) | Native | Subscribe to real-time notifications for pentest events using API-based webhooks
| <img src="/integrations/Jupiterone.png" alt="JupiterOne icon" title="JupiterOne icon" width="30"> [JupiterOne](https://community.askj1.com/kb/articles/994-cobalt-integration-with-jupiterone) | Partner | Analyze pentest data with JupiterOne tools
| <img src="/integrations/Tugboatlogic.png" alt="Tugboat Logic by OneTrust icon" title="Tugboat Logic by OneTrust icon" width="30"> [Tugboat Logic](https://tugboatlogic.com/integrations/cobalt/) | Partner | Pull Cobalt pentest information into a OneTrust Certification Automation InfoSec program
| <img src="/integrations/Defectdojo.png" alt="DefectDojo icon" title="DefectDojo icon" width="30"> [DefectDojo](https://defectdojo.github.io/django-DefectDojo/integrations/parsers/#cobaltio-api-import) | Partner | Import your Cobalt pentest findings into DefectoDojo with Cobalt API
| <img src="/integrations/Kennasecurity.png" alt="Kenna Security icon" title="Kenna Security icon" width="30"> [Kenna Security](https://github.com/KennaSecurity/toolkit/tree/main/tasks/connectors/cobaltio#readme) | Partner | Import Cobalt pentest findings
| <img src="/integrations/PlexTrac.png" alt="PlexTrac icon" title="PlexTrac icon" width="30"> [PlexTrac](https://docs.plextrac.com/plextrac-documentation/product-documentation/account-management/account-admin/tools-and-integrations/integrations/cobalt) | Partner | Import Cobalt findings into a PlexTrac report
| <img src="/integrations/anecdotes.png" alt="anecdotes icon" title="anecdotes icon" width="30"> [anecdotes](https://intercom.help/anecdotes/en/articles/6508884-cobalt-getting-started-user-guide) | Partner | Integrate Cobalt findings into the anecdotes.ai compliance operating system

## Build Your Own Integration

Use our API to build your own integrations. You need a Cobalt [API token](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui) to make REST calls.

Refer to the [API documentation](https://docs.cobalt.io/) for details.

## Suggest an Integration

We're working to integrate more solutions with the Cobalt platform. You can suggest a tool that would support your workflows:

- On the **Integrations** page under **Suggest an Integration**
- By sending an email to [integrations@cobalt.io](mailto:integrations@cobalt.io)
