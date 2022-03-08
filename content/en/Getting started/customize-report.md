---
title: "Customize Your Pentest Report"
linkTitle: "Customize Your Report"
weight: 310
description: >
  You may be able to customize your pentest report.
---

{{% pageinfo %}}
This feature is limited to subscribers in the following [PtaaS Tiers](https://cobaltio.zendesk.com/hc/en-us/articles/4408839706132-Cobalt-PtaaS-Tiers): Premium, Enterprise.
{{% /pageinfo %}}

We allow you to customize pentest reports by leaving out sections, before you download the
report as a PDF.

In our application, we make pentest reports available when they're ready for 
[Remediation](../../penteststates/). 

1. Select Pentests, select the State dropdown box, and select Remediation.

   ![Filter for Pentests in Remediation](/gsg/PentestRemediation.png "You can review Pentest reports in remediation.")

1. Now select your pentest, and select the Report tab. You'll see Report Sections, along with
   a drop-down option that allows you to select from the following report types:

   - Customer Letter
   - Attestation
   - Full Report
   - Full Report + Finding Details

   For more information, see our table of [Pentest Report Types](#pentest-report-types).

1. You can now customize the selected report type. Select **Customize**, and scroll to a
   report section. 

1. If you want to leave out a report section, select the eye icon next to the section title.
   As we report all findings, we do not allow you to leave out any finding details for our
   most complete report type.

   ![Customize a pentest report](/gsg/CustomizePentestReport.png "Select the eye icon to leave a section out of a pentest report.")


1. When you've finished customizing your report, scroll to the top of the page and select **Apply**. 

### Pentest Report Types

  | Report Type                   | Description                                                                                                                                                    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Customer Letter               | An executive summary of the pentest. May be used as a certificate of completion. Great for external shareholders. Includes:<br>  <br>- Executive Summary <br>- Methodology |
| Attestation                   | Adds the following information to the customer letter: <br> <br>- Pentester user information <br>- An overall list of findings                                                                     |
| Full Report                   | Includes the following report sections:<br>  <br>- Executive Summary <br>- Scope of Work <br>- Methodology <br>- Summary of Findings <br>- Recommendations <br>- Post-Test Remediation     |
| Full Report + Finding Details | Adds details of every test finding to the Full Report. Details include:<br>  <br>- Vulnerability Type <br>- Description <br>- Proof of Concept <br>- Severity <br>- Suggested Fix     | 
