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

1. Once you’ve specified the [asset type](/platform-deep-dive/assets/#asset-types), select **Add Technology**, and start typing the technology name. We’ll show you a list of technologies that match your input. The list contains only valid technologies.
1. Select a technology with the exact version number.
1. If your technology version is missing from the list, you can request to add it. Start typing the technology name, and then select **Add new version**. In the overlay that appears, submit a technology and its version, and we'll validate it for you.<br>
  Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key for specific examples.
   {{%expand "Examples of ✅ valid technologies:" %}}
   - For a Web asset:
     - Facebook React 17.0.1
     - Angular Angular 15.0.1 for Node.js
     - Nuxtjs Nuxt.js 2.15.8 for Node.js
     - Vercel Next.js 13.0.5 for Node.js
   - For a Mobile asset:
     - React Native 0.64.2
     - Apple Swift for Ubuntu 5.1
     - Google Android API 19
     - Ionic Framework Ionic Web View 4.1.2 for Cordova
   - For an API asset:
     - Node.js 16.16
     - Python 3.9.0
     - Django Project Django 4.1.1
     - Microsoft ASP.NET Core 7.0.0
     - Oracle OpenJDK 18
     - PHP 8.1.12
     - Redis 7.0.5
   - Databases:
     - MongoDB 5.0.6
     - Oracle MySQL 8.0.31
     - PostgreSQL 15.1
     - Microsoft SQL Server 2019
   {{% /expand%}}

   {{%expand "Examples of ❌ invalid technologies to avoid:" %}}
   - JavaScript
   - TypeScript
   - C#
   - Bash
   - C
   - Web
   - Swift
   - HTML
   - CSS
   {{% /expand%}}<br>
1. Add more technologies to the stack.

![Add a technology stack for your asset](/deepdive/AddTechnologyForAsset.png "Add a technology stack for your asset")

When you create a pentest for this asset, the technologies that you added populate in the [Technology Stack](/getting-started/pentest-objectives/stack/) field on the **Set Requirements** page.

## Preview Risk Advisories

Now you can preview potential vulnerabilities for your asset on the **Risk Advisory** tab. Here, you can see the following details for each vulnerability:

- Vulnerability ID in the [CVE](https://www.cve.org/) system
- Severity level in the [Common Vulnerability Scoring System (CVSS)](https://nvd.nist.gov/vuln-metrics/cvss)
- Technology with the version number that you added

Select a vulnerability to view detailed information on the [National Vulnerability Database (NVD)](https://nvd.nist.gov/) website. Learn how to remediate potential issues with your asset, and take the required action.

![Preview CVE-based risk advisories for your asset](/deepdive/PreviewRiskAdvisories.png "Preview CVE-based risk advisories for your asset")

{{% alert title="Note" color="primary" %}}
Potential vulnerabilities on the **Risk Advisory** tab don’t belong to your pentests. These are potential risks based on the <a href="https://www.cve.org/" target="_blank">Common Vulnerabilities and Exposures (CVE)</a> standard that we show for your reference.
{{% /alert %}}

## Subscribe to Email Alerts

You can subscribe to email alerts for **potential critical vulnerabilities** discovered in your assets. We only send alerts for Critical vulnerabilities, based on the CVSS severity levels.

With real-time notifications, you can start remediating the risk faster, without having to constantly check for updates in the Cobalt app.

- To subscribe to notifications for an asset, on the asset page, select the bell icon<!--![Bell icon](/icons/Bell.png "Bell icon")-->.
- To unsubscribe from notifications, select the bell icon once again.

<!--![Subscribe to email alerts for potential critical vulnerabilities](/deepdive/SubscribeToAlertsForVulnerabilities.png "Subscribe to email alerts for potential critical vulnerabilities")-->
