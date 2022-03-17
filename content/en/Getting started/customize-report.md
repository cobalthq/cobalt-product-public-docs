---
title: "Customize Your Pentest Report"
linkTitle: "Customize Your Report"
weight: 310
description: >
  You may be able to customize your pentest report.
---

{{% pageinfo %}}
This feature may be limited to subscribers with specific [PtaaS Tiers](https://cobaltio.zendesk.com/hc/en-us/articles/4408839706132-Cobalt-PtaaS-Tiers).
{{% /pageinfo %}}

You can simplify what's included in your pentest reports. This page describes available pentest
report types, along with what you can do to leave out one or more sections from your reports.

In our application, we make pentest reports available when they're ready for 
[Remediation](../../penteststates/), or when they're [Closed](../../penteststates/). 
To find and customize what you see in a report, take the following steps:

1. Select **Pentests**, select the **State** dropdown box, and select **Remediation**.

1. Now select your pentest, and select the **Report** tab. You'll see report sections,
   along with a drop-down option that allows you to select from the [Pentest Report
   Types](#pentest-report-types) shown in the linked table.

   <!-- I think this is better without the screenshot   
   ![Different Pentest Report Types](/gsg/PentestReportTypes.png "You can select different Pentest Report Types.") -->

1. You can now customize the selected report type. Select **Customize**, and scroll to a
   report section. 

1. If you want to leave out a report section, select the eye icon next to the section title.
   As we report all findings, we do not allow you to leave out any finding details.

   ![Customize a pentest report](/gsg/CustomizePentestReport.png "Select the eye icon to leave a section out of a pentest report.")

1. When you've finished customizing your report, scroll to the top of the page and select **Apply**. 

1. Now you can select **Download** to download your pentest report, as a PDF file, with the
   changes you configured.

### Pentest Report Types

  | Report Type                   | Description                                                                                                                                                    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Customer Letter               | An executive summary of the pentest. May be used as a certificate of completion. Great for external shareholders. Includes:<br>  <br>- Executive Summary <br>- Methodology |
| Attestation                   | Adds the following information to the customer letter: <br> <br>- Pentester user information <br>- An overall list of findings                                                                     |
| Full Report                   | Includes the following report sections, beyond attestation:<br>  <br>- Executive Summary <br>- Scope of Work <br>- Methodology <br>- Summary of Findings <br>- Recommendations <br>- Post-Test Remediation     |
| Full Report + Finding Details | Adds details of every test finding to the full report. Details include:<br>  <br>- Vulnerability Type <br>- Description <br>- Proof of Concept <br>- Severity <br>- Suggested Fix     | 
