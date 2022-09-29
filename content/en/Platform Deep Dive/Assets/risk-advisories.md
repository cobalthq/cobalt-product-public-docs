---
title: "Explore NVD Risk Advisories"
linkTitle: "NVD Risk Advisories"
weight: 20
description: >
  Preview potential vulnerabilities for your assets.
---

{{% pageinfo %}}
We integrate with the [National Vulnerability Database (NVD)](https://nvd.nist.gov/). Add a technology stack for your asset, and we’ll show you a preview of risk advisories from the NVD database for that stack.
{{% /pageinfo %}}

Because the NVD database only covers **software assets**, this integration supports the following [asset types](/platform-deep-dive/assets/#asset-types):

- Web
- Mobile
- API
- Combined assets that include the listed types

## Add a Technology Stack for Your Asset

When you [create](/platform-deep-dive/assets/#create-an-asset) or update an asset in the Cobalt app, add a technology stack for it:

1. Once you’ve specified the [asset type](/platform-deep-dive/assets/#asset-types), select **Add Technology**, and start typing the technology name. We’ll show you a list of technologies that match your input.
1. Select a technology with the exact version number.
1. Add more technologies to the stack.

![Add a technology stack for your asset](/deepdive/AddTechnologyNVD.png "Add a technology stack for your asset")

When you create a pentest for this asset, the technologies that you added populate in the [Technology Stack](/getting-started/pentest-objectives/stack/) field on the **Set Requirements** page.

## Preview Risk Advisories

Now you can preview potential vulnerabilities for your asset on the **Risk Advisory** tab. Here, you can see the following details for each vulnerability:

- Vulnerability ID in the NVD database based on the [Common Vulnerabilities and Exposures (CVE)](https://cve.mitre.org/) standard
- Severity level in the [Common Vulnerability Scoring System (CVSS)](https://nvd.nist.gov/vuln-metrics/cvss)
- Technology with the version number that you added

Select a vulnerability to view detailed information on the [NVD](https://nvd.nist.gov/) website. Learn how to remediate potential issues with your asset, and take the required action.

![Preview NVD risk advisories for your asset](/deepdive/PreviewRiskAdvisories.png "Preview NVD risk advisories for your asset")

{{% alert title="Note" color="note" %}}
Potential vulnerabilities on the **Risk Advisory** tab don’t belong to your pentests. These are potential risks based on the <a href="https://cve.mitre.org/" target="_blank">Common Vulnerabilities and Exposures (CVE)</a> standard that we show for your reference. Our integration uses the NVD API but is not endorsed or certified by the US <a href="https://nist.gov" target="_blank">National Institute of Standards and Technology</a>.
{{% /alert %}}
