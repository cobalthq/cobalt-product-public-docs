---
title: "Release Notes: August 2024"
linkTitle: "August 2024"
weight: 44
description: >-
---

{{% pageinfo %}} 
     Explore What's New from Cobalt This Month
{{% /pageinfo %}}

### August 2024


#### DAST Scan Controls & Progress Tracker

We recently added scan controls to the Cobalt platform that enable customers to have better visibility into the duration and progress of their security scans. With these new controls, customers are able to pause, cancel, and resume a scan as needed. The controls are available on both the target and scan pages, accurately reflecting the current status of the scan.

In addition, we have also added a progress tracker to the scan details page. This tracker provides real-time insights into the duration of the scan and breaks down the progress into three key components: fingerprinting, crawling and scanning, also including error/warning messages when needed.

These enhancements provide customers with immediate feedback on the progress of their scans, making it easier for them to identify any issues that may arise during the scanning process. 

{{% pageinfo color="info" %}}
View more scan controls available [here](https://docs.cobalt.io/platform-deep-dive/scans/scans/).
{{% /pageinfo %}}

![Scans Progress Tracker](/release-notes/Scan-Progress.png "Scans Progress Tracker")


---

#### Targets as Structured Data

The problem we identified was that targets were used in different parts of the application, such as in Attack Surface, DAST, Pentests, and Findings, without a structured connection between them. For instance, there was no clear association between a finding and the targets in scope for a pentest, leading to missed opportunities in capturing these associations.

To address this issue, we have introduced a new field called "Associated Targets" for web or API-related assets. This feature allows customers to directly associate targets with their assets and includes the option to add targets not listed in the Attack Surface using free text. Any targets added to an asset will also be included in new pentests created for that asset. Furthermore, pentesters can now select which targets in scope for a pentest are related to specific findings, allowing for more detailed attribution at the target level.

![Create Asset - Add Associated Targets](/release-notes/associated-targets.png "Add Associated Targets")

---

#### Enhanced SAML Configuration Page in Org Settings

Customers utilizing Service Provider initiated SAML SSO can now seamlessly access this feature directly within the platform. After configuring SAML settings, organizations will now display a Cobalt Sign In URL. 

This URL simplifies the user experience by automatically redirecting users to their designated SAML identity provider. For convenient access, users relying on SAML SSO for sign-in can now bookmark this link and effortlessly sign in to Cobalt. 

![Create Asset - SAML Updates](/release-notes/saml-updates.png "SAML Updates")

---

#### Improved Findings Order on the Pentest Report for Enhanced Clarity

Based on customer feedback, we have enhanced the ordering of findings to prioritize clarity and actionable insights.

Previously, findings were listed in the order of creation (e.g., PT1234_1, PT1234_2, PT1234_3). In response to customer preferences, findings are now presented in the updated reports by severity, from critical to low. This modification enables a more streamlined approach to addressing security issues efficiently.

This change applies to both the detailed findings section and the post-test remediation table, ensuring a more intuitive and user-friendly experience with our pentest reports.

![Create Asset - Improved Pentest Findings Order](/release-notes/pentest-report-order.png "Improved Pentest Findings Order")

---

#### Customer Credential Deletion Workflow

In the past, there was no effortless way to ensure that customers had appropriately managed their credentials after testing, potentially leaving sensitive data vulnerable. 

To address this issue, we have integrated email reminders and prompts within the Cobalt platform. These notifications will prompt customers to confirm that they have either deleted, disabled, or rotated their used credentials at the conclusion of a test and again when the retest period expires.

![Create Asset - Confirm Credential Deletion/Rotation](/release-notes/confirm-credential-deletion.png "Confirm Credential Deletion/Rotation")
