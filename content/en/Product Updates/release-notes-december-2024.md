---
title: "Release Notes: November 2024"
linkTitle: "November 2024"
weight: 41
description: >-
---

{{% pageinfo %}} 
Explore What's New from Cobalt This Month
{{% /pageinfo %}}


## AI/LLM Pentests

We've upgraded our AI/LLM security assessment offerings to provide a more focused and efficient experience:
- Our "OWASP Top 10 LLMs" assessment is now simply "LLM." This comprehensive assessment provides full-spectrum security coverage for your LLM applications, including their web and API connections. (Starts at 16 credits)
- "Prompt Injection" is now a standalone agile test, offering a targeted and efficient approach to identifying this specific vulnerability. (Starts at 4 credits)

These changes are reflected in the UI, making it easier to find and select the assessment that best suits your needs.

![Enhanced AI/LLM Pentest Offering](/release-notes/ai-llm-release-notes.png "Enhanced AI/LLM Pentest Offering")

---

## Target Directory 

We've introduced a central directory feature that allows customers to conveniently track their targets across their Pentests, DAST, and Attack Surface, providing a cohesive and organized approach to managing these crucial units.

<strong>Benefits</strong>:
- The addition of the Target directory offers customers enhanced capabilities to analyze and segment their data effectively, enabling them to gain deeper insights and make more informed decisions based on the structured tracking of targets.
- Accessible through a new tab under Assets, the Target directory offers a user-friendly interface for customers to navigate and manage their targets with ease.

This {{< beta-label >}} feature is now accessible to all customers, empowering them with improved tools to streamline target tracking and optimize their operational processes.

![Target Directory](/release-notes/target-directory.png "Target Directory")

---

## Partial Scans: Reduced Scope

Users can now quickly scan only specific parts of their applications and APIs, rather than waiting for a full scan, to focus on high-risk areas or new code changes.

- In the target settings: we added a new card for users to add + manage specific URLs to scan
- In the Scan Now modal: we added a section where users can additionally manage/override the added URLs

<strong>Key Benefits:</strong>

- Accelerates feedback cycles by enabling the scanning of only relevant code changes
- Minimizes scan durations by targeting specific sections of an application or API
- Prioritizes high-risk areas by focusing scans on critical or recently updated sections
- Reduces vulnerability noise, allowing users to concentrate on the most important security issues and potentially improving overall scanning efficiency.

{{% pageinfo color="blue" %}}
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


