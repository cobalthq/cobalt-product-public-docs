---
title: "Insights"
linkTitle: "Insights"
weight: 10
description: >
  Insights provides comprehensive data on pentest results, remediation progress, and overall performance.
---

## A Comprehensive View of Your Security Posture

The Insights page is designed to give you a comprehensive view of your security program and performance, organized into three distinct tabs:

1. [Findings] (/platform-deep-dive/insights/findings)
2. [Assets] (/platform-deep-dive/insights/assets)
3. [Benchmark] (/platform-deep-dive/insights/benchmark) {{% beta-label %}} 

Use the filters to refine the displayed data, filters include:
- **Groups:** Groups are specific teams that you have assigned to assets
- **Asset**: Drill down into your security posture by selecting a single asset, multiple assets, or viewing data for all assets. Graphs on the Assets tab show a maximum of 10 assets.
- **Date Range:** Adjust the reporting period to see insights for the specific time range you need.

We categorize all findings by their assigned [OWASP-based severity level](https://docs.cobalt.io/platform-deep-dive/pentests/findings/severity-levels/#owasp-risk-rating) (Critical, High, Medium, Low, Informational) and also by their [Finding State]([https://docs.cobalt.io/platform-deep-dive/pentests/findings/finding-states/). 

For easy sharing and offline review, you can also download a PDF version of the currently viewed tab by clicking the "Download" button.


### Findings

Detailed look at the state of your pentest findings.

At the top, you'll find these key metrics:
- **Pentests Performed:** The total count of pentests you've completed (Live, Remediation or Closed).
- **Testing Hours:** The cumulative hours spent on your completed pentests.
- **Findings Reported:** The total number of findings identified in the following states:  Pending Fix, Ready for Retest, Accepted Fisk, Fixed, Carried Over
- **Findings Open:** The total number of findings currently in a Pending Fix state
- **Findings Resolved:** The total number of findings that have reached a "Resolved" state of Fixed or Accepted Risk. 

The Findings tab also includes the following charts to help you visualize your data:

- **Findings by Status and Severity:** A breakdown of all findings categorized by their current status and the severity level (Critical, High, Medium, Low, Informational).
   - ℹ️ **How to use this data:** Use this to see how your teams are doing at remediating findings across different severity levels. It can help you pinpoint challenges in your remediation process and facilitate progress.

-  **Time to Fix by Severity:** This metric displays the average time it takes for a Fixed finding to move from a Pending Fix state to Ready for Retest, broken down by severity. We use "Ready for Retest" as the end point to ensure the duration accurately reflects only the time spent on the fix itself. 
   - ℹ️ **How to use this data:** Use this to track your teams' progress in risk remediation within an asset or across all assets. It can also help you estimate the effort and time needed for future remediation, helping you minimize risks.

- **Age by Severity:** The average age of your currently open findings, categorized by severity.
   - ℹ️ **How to use this data:** Use this chart to identify long-standing findings, especially those of high or critical severity that have been open for an extended period. It helps you understand the duration of your risk exposure and can pinpoint bottlenecks in your remediation process. By reviewing the average age, you can prioritize remediation efforts for the oldest and most critical findings, and inform discussions around resource allocation to accelerate their resolution.

**Severity Trend:** This chart displays the total number of open pentest and engagement findings over time, broken down by their severity. For better readability and focus on critical issues, Low and Informational findings are not included in this visualization.
   - ℹ️ **How to use this data:** Identify trends in your open critical and high-severity findings. An upward trend signals a growing backlog, while spikes can highlight periods of rapid discovery outpacing resolution.


### Assets 

Focussed view of your assets and the risk and findings associated with them.

The Assets tab includes the following charts to help you visualize your data:

- **Risk Overview:** Aggregated Risk is calculated by summing the individual risks of all findings discovered during a pentest on a specific asset. This score is then compared against the Cobalt Average, which is the average Aggregated Risk derived from all pentests conducted across all Cobalt customers in a given year, providing a benchmark for your asset's performance.
   - ℹ️ **How to use this data:** Compare your Aggregated Risk to the Cobalt Average to see how your security posture stands compared to others.
- **All Findings by Type broken down by Asset:** This section categorizes findings by their specific vulnerability types for each asset. We define these types based on industry standards like the Common Vulnerabilities and Exposures (CVE) database. If an asset has more than 10 unique finding types, we'll display the top 10 most frequent types and group the rest under "Remaining Types."
   - ℹ️ **How to use this data:** Identify shortcomings in how your systems were developed and what the engineering team should focus on. Find patterns emerging across multiple asset types. Based on this data, you may want to arrange a training for your teams to fix the root cause of findings.
- **Findings by Status and Severity:** For each asset, this provides a breakdown of findings by their current status and severity levels.  Pending Fix findings are displayed by severity. Fixed, Accepted Risk, and Carried Over findings are shown as actioned counts. 
   - ℹ️ **How to use this data:** Analyze the number of findings that pentesters reported on each asset. Identify assets with Pending Fix Critical findings to start remediating them first. 

### Benchmark {{% beta-label %}} 

Compare your organization's performance against industry benchmarks, drawing insights from the State of Pentesting Report 2025. This comparison focuses exclusively on critical and high-severity pentest findings.

The Benchmark tab includes the following charts to help you visualize your data:

- **Resolution Rate of Critical and High Pentest Findings:** This metric shows the percentage of your Critical and High-severity pentest findings that are Resolved (Fixed or Accepted Risk).
   - ℹ️ **How to use this data:** Use this to understand how effectively your team is addressing the most severe findings compared to industry peers. A higher percentage indicates a more efficient remediation process.
- **Percentage of Pentest Findings that are Critical & High:** This is the proportion of all your reported findings that are classified as Critical or High-severity.
   - ℹ️ **How to use this data:** This helps you assess the overall severity of findings discovered in your assets compared to the industry. A lower percentage might suggest more robust security controls upfront or a different risk profile.
- **Median Time to Remediate (MTTR) Critical & High Pentest Findings:** The median number of days from when a Critical or High-severity finding is reported until it's Resolved (Fixed or Accepted Risk).
   - ℹ️ **How to use this data:** This metric is crucial for evaluating your team's agility and response time to critical threats. A lower median time signifies faster remediation and reduced exposure windows.
- **Median Age of Unresolved Findings:** The median age (in days) of your open Critical and High-severity Pending Fix findings. This metric is compared against the half-life benchmark from the State of Pentesting Report.
   - ℹ️ **How to use this data:** Use this to understand the longevity of your most severe unaddressed risks. Comparing it to the half-life benchmark helps you see if your critical findings are lingering longer than industry averages, prompting you to prioritize and expedite resolution.
