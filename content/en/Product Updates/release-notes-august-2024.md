---
title: "Release Notes: August 2024"
linkTitle: "August 2024"
weight: 50
description: >-
     Explore What's New from Cobalt This Month
---

{{% pageinfo %}} 
Stay Up-to-Date with the Latest Enhancements on the Cobalt Platform. 
{{% /pageinfo %}}

### August 2024


#### DAST Scan Controls & Progress Tracker

We recently added scan controls to the Cobalt platform that enable customers to have better visibility into the duration and progress of their security scans. With these new controls, customers are able to pause, cancel, and resume a scan as needed. The controls are available on both the target and scan pages, accurately reflecting the current status of the scan.

In addition, we have also added a progress tracker to the scan details page. This tracker provides real-time insights into the duration of the scan and breaks down the progress into three key components: fingerprinting, crawling and scanning, also including error/warning messages when needed.

These enhancements provide customers with immediate feedback on the progress of their scans, making it easier for them to identify any issues that may arise during the scanning process. 

{{% pageinfo color="info" %}}
View more scan controls available [here](https://docs.cobalt.io/platform-deep-dive/scans/scans/).
{{% /pageinfo %}}

![Scans Progress Tracker](/release-notes/Scan Progress.png "Scans Progress Tracker")


---

#### Targets as Structured Data

The problem we identified was that targets were used in different parts of the application, such as in Attack Surface, DAST, Pentests, and Findings, without a structured connection between them. For instance, there was no clear association between a finding and the targets in scope for a pentest, leading to missed opportunities in capturing these associations.

To address this issue, we have introduced a new field called "Associated Targets" for web or API-related assets. This feature allows customers to directly associate targets with their assets and includes the option to add targets not listed in the Attack Surface using free text. Any targets added to an asset will also be included in new pentests created for that asset. Furthermore, pentesters can now select which targets in scope for a pentest are related to specific findings, allowing for more detailed attribution at the target level.

![Create Asset - Add Associated Targets](/release-notes/associated-targets.png "Add Associated Targets")
