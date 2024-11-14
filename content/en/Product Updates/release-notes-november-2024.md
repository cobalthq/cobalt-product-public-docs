---
title: "Release Notes: November 2024"
linkTitle: "November 2024"
weight: 41
description: >-
---

{{% pageinfo %}} 
Explore What's New from Cobalt This Month
{{% /pageinfo %}}

## Partial Scans: Reduced Scope

Users can now quickly scan only specific parts of their applications and APIs, rather than waiting for a full scan, to focus on high-risk areas or new code changes.

- In the target settings: we added a new card for users to add + manage specific URLs to scan
- In the Scan Now modal: we added a section where users can additionally manage/override the added URLs

<strong>Key Benefits:</strong>

- Accelerates feedback cycles by enabling the scanning of only relevant code changes
- Minimizes scan durations by targeting specific sections of an application or API
- Prioritizes high-risk areas by focusing scans on critical or recently updated sections
- Reduces vulnerability noise, allowing users to concentrate on the most important security issues and potentially improving overall scanning efficiency.

{{% pageinfo color="info" %}}
For more information, have a look at our [Partial Scans: Reduced Scope documentation.](https://docs.cobalt.io/platform-deep-dive/scans/reduced-scope/)
{{% /pageinfo %}}

![Partial Scans](/release-notes/partial-scans.png "Partial Scans")

---

## Notification Preferences Enhanced for Pentests

Certain customers, particularly Org owners, were overwhelmed by excessive notifications in their Cobalt experience, as they were automatically included in all pentests and received all related notifications unnecessarily.

We've introduced the ability for users to customize their default notification preferences in their Profile settings at the top right corner. Users can now choose from the following options:

- Notifications on all activity
- Notifications on @mentions and findings they participate in
- Mute notifications, except on findings they follow

Customers can still adjust notification preferences for individual pentests without altering the default settings.

![Pentest Notification Preferences](/release-notes/pentest-notifications.png "Pentest Notification Preferences")


