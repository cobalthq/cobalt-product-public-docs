---
title: "Release Notes: March 2025"
linkTitle: "March 2025"
weight: 38
description: >-
---

{{% pageinfo %}}
Explore What's New from Cobalt This Month
{{% /pageinfo %}}

## CVSS v3.1 Scoring for Enhanced Vulnerability Severity Assessment
<strong>Problem</strong>

Customers have expressed the need for a clear, standardized severity rating that offers a consistent and objective view of vulnerability severity. The existing OWASP-based ratings, while providing valuable context, were subjective and made it difficult for customers to obtain a standardized and objective assessment of risk.

<strong>Solution</strong>

New CVSS v3.1 scoring to all new findings! Our pentesters will now complete the CVSS vector, and our platform will automatically calculate the score and severity. This critical data will be included in finding reports, CSV downloads, and various integrations such as the creation of a ticket in Jira, where this data will be seamlessly embedded within the description of the finding. The implementation of CVSS scoring aims to provide objectivity to a previously subjective system and offers a numerical representation of vulnerability severity.

<strong>Benefits</strong>

- <strong>Meets Customer Demand:</strong> Directly fulfills requests for CVSS scores, meeting a critical customer demand.
- <strong>Guarantees Consistent Data:</strong> With structured CVSS scores for all findings, we are eliminating inconsistencies and providing a designated location for this information. This reduces the risk of customers requesting this information, only for it to be omitted by testers.
- <strong>Improves Risk Assessment:</strong> The addition of CVSS v3.1 scoring provides an additional data input for our customers to better understand findings and prioritize risk accordingly.

{{% image src="/release-notes/cvss.png" alt="CVSS v3.1" %}}

