---
title: "Your Cobalt Contract"
linkTitle: "Your Contract"
weight: 30
aliases: /platform-deep-dive/collaboration/organization/your-contract/
description: >
  Learn how your Cobalt contract works.
---

{{% pageinfo %}}
This page provides an overview of terms related to your organization's contract with Cobalt. For detailed information, read our [Terms & Conditions](https://www.cobalt.io/terms).
{{% /pageinfo %}}

Learn what to expect when your organization's contract is [active](#when-your-contract-is-active) or [expires](#when-your-contract-expires).

## When Your Contract is Active

Once you've signed a contract with Cobalt and purchased [credits](/platform-deep-dive/credits/), you get access to our Pentest as a Service (PtaaS) platform. You can start using your credits from the start date of your contract. Credits are not available prior to that date.

When your organization's contract is active, you have full access to the platform, as determined by your [user role](/platform-deep-dive/collaboration/user-roles/). If your role allows, you can:

- Launch [pentests](/platform-deep-dive/pentests/) to test your [assets](/platform-deep-dive/assets/).
- Remediate [findings](/platform-deep-dive/pentests/findings/) and [submit them for retest](/platform-deep-dive/pentests/findings/remediate-findings/#submit-a-finding-for-retest).
- View and download [pentest reports](/platform-deep-dive/pentests/reports/) once they're ready.
- Collaborate on pentests.
- Use other platform features, as determined by your {{% ptaas-tier %}}.

{{< alert title="Tip" color="primary" >}}
To renew your contract, reach out to your Customer Success Manager or support@cobalt.io.
{{< /alert >}}

## When Your Contract Expires

When your organization's contract is about to expire, we notify you in advance. Organization users get notifications reminding them to renew the contract.

- Be sure to start your pentests at least 30 days before your contract expires, if you have credits remaining.
  - The standard testing period is 14 days. It may vary depending on the pentest scope and other factors.
- [Submit your findings for retest](/platform-deep-dive/pentests/findings/remediate-findings/#submit-a-finding-for-retest) at least 10 days before your contract expires. Learn more about the [free retesting duration](/platform-deep-dive/pentests/findings/remediate-findings/#free-retesting-duration).
- [Download the data you need](#download-your-organizations-pentest-data) before we revoke your access to the platform.

After the contract expiration date, a **15-day grace period** starts.

- Within the grace period, you still have access to the platform. Be sure to [download the data you need](#download-your-organizations-pentest-data) within this time frame.
- Your remaining [credits](/platform-deep-dive/credits/) expire.
- You can no longer submit pentests for review or findings for retest.

Once the grace period is over, we revoke access to the platform from all organization users. If you renew your contract, you'll get full access to the platform and your organization data.

{{< alert title="Tip" color="primary" >}}
To renew your contract, reach out to your Customer Success Manager or support@cobalt.io.
{{< /alert >}}

## Download Your Organization's Data

To export data for your organization, you can:

### Use the Cobalt API

Read our [API documentation](/cobalt-api/documentation/v2) for details. You can send API requests to retrieve the following data:
- **Pentests**
   - [All pentests](/cobalt-api/documentation/v2/#get-all-pentests)
   - [All pentest findings](/cobalt-api/documentation/v2/#get-all-findings)
   - [A pentest report](/cobalt-api/documentation/v2/#get-a-pentest-report)
- **Engagements**
   - [All engagements](/cobalt-api/documentation/v2/#get-all-engagements)
   - [All engagement findings](/cobalt-api/documentation/v2/#get-all-engagement-findings)
- **DAST**
   - [All DAST targets](/cobalt-api/documentation/v2/#get-all-dast-targets)
   - [All DAST findings](/cobalt-api/documentation/v2/#get-all-dast-findings)


### Manually download data in the Cobalt app

Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key next to each item below for specific instructions.

       {{%expand "All findings for a pentest:" %}}
       1. On the pentest page, navigate to the **Findings** tab.
       2. To clear all filters, select **Clear all**.
       3. Select **Download CSV**.
       {{% image src="/deepdive/download-pentest-findings.png" alt="Download all findings for a pentest" %}}
       {{% /expand%}}

   {{%expand "A pentest report:" %}}
   {{% download-report-steps %}}
   {{% image src="/deepdive/download-pentest-report.png" alt="Download reports for a Comprehensive Pentest" %}}
   {{% /expand%}}

   {{%expand "An engagement report:" %}}
   1. On the engagement page, navigate to the **Report** tab.
   2. XXXX
   {{% image src="/deepdive/download-engagement-report.png" alt="Download an engagement report" %}}
   {{% /expand%}}
  
   {{%expand "All findings across different test types:" %}}
   1. On the main **Findings** page, apply any filters as needed.
   2. Select **Download CSV**.
   {{% image src="/deepdive/download-findings.png" alt="Download all findings" %}}
   {{% /expand%}}
  
   {{%expand "All Attack Surface domains:" %}}
   1. On the **Attack Surface** page, select a domain.
   {{% image src="/deepdive/download-ASM-domains-1.png" alt="Download all Attack Surface Domains" %}}
   2. Filter targets by Seen, Unseen, or All, and apply any additional filters as needed.
   3. Select **Download CSV**.
   {{% image src="/deepdive/download-ASM-domains-2.png" alt="Download all Attack Surface Domains" %}}
   {{% /expand%}}
  
   {{%expand "A DAST report:" %}}
   1. On the **DAST Scanner** page, navigate to the **Targets** tab.
      * The same option is available on the Scans page and individual scan detail page.   
   2. For any one target, select **Download**.
   3. Select from a list of report types to download.
   {{% image src="/deepdive/download-DAST-report.png" alt="Download a DAST report" %}}
   {{% /expand%}}

   {{%expand "Insights:" %}}
   1. On the **Insights** page, apply any filters as needed.
   2. Select **Download CSV**.
   {{% image src="/deepdive/download-insights.png" alt="Download insights" %}}
   {{% /expand%}}

   {{%expand "Credit ledger:" %}}
   - On the **Credits** page, select **Download CSV**.
   {{% image src="/deepdive/download-credits.png" alt="Download credit ledger" %}}
   {{% /expand%}}
