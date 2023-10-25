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
- When a new finding in the Pending Fix [state](platform-deep-dive/pentests/findings/finding-states) is reported, a new work item is automatically created in Azure DevOps.

### Limitations

Please be aware of the following considerations when using this integration. We are working to improve the integration and address these limitations.

- Work items will automatically be created when a finding is moved to Pending Fix state. It is not possible to manually create a work item for a finding.
- Only one Azure DevOps instance can be connected to a Cobalt Organization at a time.
- Work items created will not appear in the “External Issue References” section of the Cobalt findings page.
