---
title: "Customize the Pentest Report"
linkTitle: "Customize Your Report"
weight: 310
description: >
  You may be able to customize your pentest report.
---

{{% pageinfo %}}
This feature is limited to subscribers in the following [PtaaS Tiers](https://cobaltio.zendesk.com/hc/en-us/articles/4408839706132-Cobalt-PtaaS-Tiers): Premium, Enterprise.
{{% /pageinfo %}}

In our application, we make pentest reports available when _Final_. To find available
pentest reports:

1. Select Pentests, select the State dropdown box, and select [Remediation](../../penteststates/).

   ![Filter for Pentests in Remediation](/gsg/PentestRemediation.png "You can customize Pentest reports in remediation.")

1. Now select your pentest, and select the Report tab.

1. You can select from one of the following report types:

1. 

Depending on your [PtaaS Tier](https://cobaltio.zendesk.com/hc/en-us/articles/4408839706132-Cobalt-PtaaS-Tiers),
we can help you schedule pentests with a start date from at least one to three business days after
after you select "Submit for Review."

  | Report Type                   | Description                                                                                                                                                    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Customer Letter               | An executive summary of the pentest. May be used as a certificate of completion. Great for external shareholders. Includes:  <br>- Executive Summary <br>- Methodology |
| Attestation                   | Adds the following information to the customer letter: <br>- Pentester user information <br>- An overall list of findings                                                                     |
| Full Report                   | Includes the following report sections:  <br>- Executive Summary <br>- Scope of Work <br>- Methodology <br>- Summary of Findings <br>- Recommendations <br>- Post-Test Remediation     |
| Full Report + Finding Details | Adds details of every test finding to the Full Report. Details include:   <br>- Vulnerability Type <br>- Description <br>- Proof of Concept <br>- Severity <br>- Suggested Fix     | 
