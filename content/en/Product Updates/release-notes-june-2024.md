---
title: "Release Notes: June 2024"
linkTitle: "June 2024"
weight: 46
description: >-
---

{{% pageinfo %}} 
Explore What's New from Cobalt This Month
{{% /pageinfo %}}


## Recurring Scheduled Scans

As part of our commitment to continually improve our platform, we are thrilled to announce the introduction of recurring scheduled scans to Cobalt DAST Scanner. This highly-requested feature makes it easier than ever to set up and run automatic scans on a recurring basis.

- To run a scan, select "Scan Now”. This will start a scan immediately.

{{% image src="/deepdive/scans/4_StartScanTargets.png" alt="Start Scan - Targets" %}}

- Selecting "Scan Later..." allows setting a specific start date and time for the scan. 
  - This can also be a recurring schedule, if an option other than "None" is selected in the "Recurrence" dropdown.
  - The accepted recurrences are: Hourly, daily, weekly, monthly and quarterly.

{{% image src="/deepdive/scans/10_ScheduledScanForm.png" alt="Scan Later - Targets" %}}

-  Upcoming scheduled scans can be viewed under the "Scheduled Scans" tab.
  - Recurring scheduled scans are marked with a "Recurring" label, while one-off scans don't have any labeling.
  - The "Start Date" always refers to the date of the next scheduled scan.

{{% image src="/deepdive/scans/11_ScheduledScansView.png" alt="Scheduled Scans View - Targets" %}}


---

## API Scanning

We are excited to introduce an advanced feature for users configuring a DAST target: the ability to select API with OpenAPI specifications and provide an OpenAPI/Swagger schema. This schema acts as a comprehensive map for the scanner, enabling it to effectively navigate and test all endpoints and functions of the API, ensuring thorough and accurate security testing.

Notably, if a customer provides a URL to a live, published spec instead of uploading a static file, the scanner will dynamically fetch the schema before each scan. This ensures that the scanner always incorporates the most up-to-date version of the API specifications, enhancing the accuracy and relevance of the security assessments.

This enhancement empowers our users to leverage the latest API technologies while maintaining proactive security testing, reinforcing our commitment to providing cutting-edge solutions for comprehensive security assessments.

{{% image src="/deepdive/scans/2_AddTarget-API.png" alt="Add API target" %}}

