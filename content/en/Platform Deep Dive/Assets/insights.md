---
title: "Analyze Your Assets Using Insights"
linkTitle: "Insights"
weight: 40
description: >
  Get insights into the security posture of your assets.
---

{{% pageinfo %}}
Insights provide you an overview of all pentests performed across all assets with Cobalt. Analyze these metrics to see how the security posture of your organization evolves across assets or as an aggregate.
{{% /pageinfo %}}

## Insights Overview

On the **Insights** page, you can filter data by:

- Asset: one, multiple, or all
- Timeframe

To download the report as a PDF file, select **Download**.

![Analyze the security posture of your assets using Cobalt Insights](/deepdive/InsightsPage.png "Analyze the security posture of your assets using Cobalt Insights")

## Summary Information

At the top of the page are key metrics for the selected asset and timeframe. You can see the number of:

- Pentests performed
- Aggregated testing hours
- Findings reported
- Open findings
- Resolved findings

Here are some **best practices** for analyzing this data. Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key to expand each section.

{{% expand "Compare data between assets." %}}
</br>

- Do you tend to have more vulnerabilities on your mobile application compared to your web application?
- On which asset do you have more open findings?
- How many pentests have you performed on each asset, and for how many testing hours?

{{% /expand %}}
{{% expand "Compare data between pentests performed on the same asset." %}}
</br>

- Has the number and criticality of vulnerabilities decreased from one pentest to another?
- Has the number of open findings changed?
- Have you managed to resolve more findings from the last pentest compared to the previous pentests?

{{% /expand %}}

## Charts

Charts visualize data for the selected asset and timeframe. Point to the chart to view tooltips with detailed information.

| Chart | Description | How to Use This Data |
|---|---|---|
| **Risk Overview** | [Aggregated Risk](/getting-started/glossary/#aggregated-risk) for assets compared to the [Cobalt Average](/getting-started/glossary/#cobalt-average).<br>- {{% aggregated-risk-definition %}}<br>- {{% cobalt-average-definition %}}<br><br>![Risk Overview chart in Insights](/deepdive/InsightsRiskOverview.png "Risk Overview chart in Insights") | - Compare your Aggregated Risk to the Cobalt Average to see how your security posture stands compared to others. |
| **All Findings** | Open (Pending Fix) and Resolved findings for each asset:<br>- Pending Fix findings are broken down by [severity levels](/platform-deep-dive/pentests/findings/severity-levels/).<br>- Resolved findings are marked as Fixed, Accepted Risk, or Carried Over.<br><br>Learn more about the meaning of each [finding state](/platform-deep-dive/pentests/findings/finding-states/).<br><br>![All Findings chart in Insights](/deepdive/InsightsAllFindings.png "All Findings chart in Insights") | - Analyze the number of findings that pentesters reported on each asset.<br>- Identify assets with Critical vulnerabilities to start remediating them first.<br>- Locate assets with Pending Fix (open) findings to remediate them. |
| **All Findings by Type** | Findings broken down by types for each asset. We define vulnerability types based on the industry standards such as the [Common Vulnerabilities and Exposures (CVE) database](https://www.cve.org/). If we discover more than 10 types of findings in your asset, we only show the top 10 types and mark others as Remaining Types.<br><br>![All Findings by Type chart in Insights](/deepdive/InsightsAllFindingsByType.png "All Findings by Type chart in Insights") | - Identify shortcomings in how your systems were developed and what the engineering team should focus on.<br>- Find patterns emerging across multiple asset types. Based on this data, you may want to arrange a training for your teams to fix the root cause of findings. |
| **Findings by Status and Severity** | Findings broken down by [states](/platform-deep-dive/pentests/findings/finding-states/) and [severity levels](/platform-deep-dive/pentests/findings/severity-levels/) for each asset.<br><br>![Findings by Status and Severity chart in Insights](/deepdive/InsightsFindingsByStatusAndSeverity.png "Findings by Status and Severity chart in Insights") | - See how your teams are performing to remediate findings across different severity levels.<br>- Find areas of challenge in the remediation process, and facilitate the progress. |
| **Time to Fix by Severity** | Time in days taken to fix findings broken down by [severity levels](/platform-deep-dive/pentests/findings/severity-levels/).<br><br>![Time to Fix by Severity chart in Insights](/deepdive/InsightsTimeToFixBySeverity.png "Time to Fix by Severity chart in Insights") | - See how your teams are progressing in the risk remediation within an asset or across all assets.<br>- Estimate the effort and time required for remediation to minimize risks. |
