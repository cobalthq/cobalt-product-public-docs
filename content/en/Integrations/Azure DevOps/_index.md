---
title: "Integrate Azure DevOps with Cobalt"
linkTitle: "Azure Devops"
weight: 20
description: >
  Push Cobalt findings as work items to Azure DevOps.
---

{{% pageinfo %}}
Integrate with Azure DevOps to create work items for your Cobalt findings and streamline your remediation workflows. 
{{% /pageinfo %}}

{{< alert title="Note" color="primary" >}}
{{< tier-feature >}}
{{< /alert >}}

## Overview

### How It Works

- Connect your Azure DevOps system to Cobalt and push pentest findings as work items to your team boards.
- Configure Azure DevOps for each pentest, selecting the Team Project, Work Item Type, and other field mappings for tickets created from findings.
- When a new finding in the Pending Fix [state](/platform-deep-dive/pentests/findings/finding-states) is reported, a new work item is automatically created in Azure DevOps.

### Limitations

Please be aware of the following considerations when using this integration. We are working to improve the integration and address these limitations.

- Work items will automatically be created when a finding is moved to Pending Fix state. It is not possible to manually create a work item for a finding.
- Only one Azure DevOps instance can be connected to a Cobalt Organization at a time.
- Work items created will not appear in the “External Issue References” section of the Cobalt findings page.

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{%expand "What is a Work Item?" %}}
<br>

In Azure DevOps, a Work Item is any item that needs to be investigated within a project.  Work Items may also be referred to as tickets.In the context of Cobalt integrations, a Work Item is a finding that was synchronized with Azure DevOps.

{{% /expand %}}
<br>
{{%expand "Which fields are required to create Azure DevOps work items?" %}}
<br>

The following fields are required to create a Work Item: Project, Work item type, Title, State. Depending on your Azure DevOps process template, additional fields in your work item form may be required.  Make sure to provide a value for all required (*) fields. See: How to set work item field values. 

{{% /expand %}}
<br>
{{%expand "Does the integration support custom required fields?" %}}
<br>

Yes. When configuring the integration for a pentest, you can set values for all standard and custom fields in the work item type template for the Project and Work Item Type selected. Also see How to: Set work item field values.  

{{% /expand %}}
<br>
{{%expand "Can I manually create a work item for an individual finding?" %}}
<br>

No, currently auto-push is not supported. 

{{% /expand %}}
<br>
{{%expand "Where can I find the ID of the work item created for a finding?" %}}
<br>

Currently, the Work Item ID is not displayed in the Cobalt platform (this will be addressed in a future release). In Azure DevOps, the Finding ID will be included in the work item Title, and a link to the Cobalt finding is available in the Description field. 

{{% /expand %}}
<br>
{{%expand "How often findings are synchronized between Cobalt and Azure DevOps?" %}}
<br>

Findings are pushed to Azure DevOps when they are published and set to Pending Fix status. This occurs virtually in real-time, and should be reflected in your Azure DevOps environment within a minute or so. 

{{% /expand %}}
<br>
{{%expand "Does the Integration work with my Azure DevOps Server?" %}}
<br>

No. Currently only Azure DevOps cloud is supported. If you use an on-prem version, please reach out to us at integrations@cobalt.io. 

{{% /expand %}}
<br>
{{%expand "Will historical findings be synchronized after I configure the Azure DevOps integration for a pentest?" %}}
<br>

No. After enabling the integration for a pentest, a finding (either new or existing) must be moved to Pending Fix state, which will trigger the creation of a work item. 

{{% /expand %}}
<br>
{{%expand "Is the Cobalt finding updated when work item status changes?" %}}
<br>

No. We are working to enable bi-directional sync for an upcoming release. Currently the integration is 1-way only. After a work item is created for a new finding, there is no further association between the work item and the finding.

{{% /expand %}}
<br>
{{%expand "Can I use an Azure DevOps service account?" %}}
<br>

Yes. You can use a Service Principal or Managed Identity to authenticate your Azure DevOps environment with Cobalt. Follow Microsoft’s guide (Use service principals & managed identities) to configuring your managed account, then when setting up the connection in Cobalt, select the Authorization Code method of authentication.

{{% /expand %}}
<br>
{{%expand "Can I sync a finding to a work item that already exists in my ADO project?" %}}
<br>

No. We are working to support this in a future release. Currently, the integration will create a new work item for each unique pentest finding.  

{{% /expand %}}
<br>
{{%expand "Can I move a work item to a different ADO project?" %}}
<br>

Yes. Work items will be created in the project you selected in the pentest configuration. Once created, you can move the work item to another project, or even change the work item type, without impacting the integration. 

{{% /expand %}}
