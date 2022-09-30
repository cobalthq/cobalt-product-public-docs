---
title: "Explore Risk Advisories"
linkTitle: "Risk Advisories"
weight: 20
description: >
  Preview potential vulnerabilities for your assets.
---

{{% pageinfo %}}
Add a technology stack for your software asset, and we’ll show you a preview of risk advisories based on the [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) standard for that stack.
{{% /pageinfo %}}

This integration supports the following [asset types](/platform-deep-dive/assets/#asset-types):

- Web
- Mobile
- API
- Combined assets that include the listed types

## Add a Technology Stack for Your Asset

When you [create](/platform-deep-dive/assets/#create-an-asset) or update an asset in the Cobalt app, add a technology stack for it:

1. Once you’ve specified the [asset type](/platform-deep-dive/assets/#asset-types), select **Add Technology**, and start typing the technology name. We’ll show you a list of technologies that match your input.
1. Select a technology with the exact version number.
1. Add more technologies to the stack.

![Add a technology stack for your asset](/deepdive/AddTechnology.png "Add a technology stack for your asset")

When you create a pentest for this asset, the technologies that you added populate in the [Technology Stack](/getting-started/pentest-objectives/stack/) field on the **Set Requirements** page.

## Preview Risk Advisories

Now you can preview potential vulnerabilities for your asset on the **Risk Advisory** tab. Here, you can see the following details for each vulnerability:

- Vulnerability ID in the [CVE](https://www.cve.org/) system
- Severity level in the [Common Vulnerability Scoring System (CVSS)](https://nvd.nist.gov/vuln-metrics/cvss)
- Technology with the version number that you added

Select a vulnerability to view detailed information on the [National Vulnerability Database (NVD)](https://nvd.nist.gov/) website. Learn how to remediate potential issues with your asset, and take the required action.

![Preview CVE-based risk advisories for your asset](/deepdive/PreviewRiskAdvisories.png "Preview CVE-based risk advisories for your asset")

{{% alert title="Note" color="note" %}}
Potential vulnerabilities on the **Risk Advisory** tab don’t belong to your pentests. These are potential risks based on the <a href="https://www.cve.org/" target="_blank">Common Vulnerabilities and Exposures (CVE)</a> standard that we show for your reference.
{{% /alert %}}
