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

## Download Your Organization's Pentest Data

To export pentest data for your organization, you can:

- Use the Cobalt API. Read our [API documentation](https://docs.cobalt.io/cobalt-api/v2) for details. You can send API requests to retrieve pentest data, such as:
  - [All pentests](https://docs.cobalt.io/cobalt-api/v2/#get-all-pentests)
  - [All findings](https://docs.cobalt.io/cobalt-api/v2/#get-all-findings)
  - [A pentest report](https://docs.cobalt.io/cobalt-api/v2/#get-a-pentest-report)
- Manually download [findings](/platform-deep-dive/pentests/findings/) and [reports](/platform-deep-dive/pentests/reports/) for each pentest in the Cobalt app. Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key for instructions.
   {{%expand "To download all findings for a pentest:" %}}
   1. On the pentest page, navigate to the **Findings** tab.
   1. To clear all filters, select **Clear all**.
   1. Select **Download CSV**.<br><br>
   ![Download all findings for a pentest](/deepdive/download-findings.png "Download all findings for a pentest")
   {{% /expand%}}

   {{%expand "To download a report as a PDF file:" %}}
   {{% download-report-steps %}}<br><br>
   ![Download reports for a Comprehensive Pentest](/deepdive/download-report.png "Download reports for a Comprehensive Pentest")
   {{% /expand%}}
