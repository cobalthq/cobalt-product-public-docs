---
title: "Findings"
linkTitle: "Findings"
weight: 15
no_list: true
description: >
  Review and remediate findings that our pentesters discover.
---

A finding represents a potential security vulnerability or weakness identified during a security assessment. These assessments can encompass various methodologies, including:
- **Penetration Tests**: In-depth manual assessments where security experts simulate real-world attacks to uncover vulnerabilities.
- **Secure Code Reviews**: Manual analysis of source code to detect security vulnerabilities early in the software development lifecycle.
- **Digital Risk Assessments**: Evaluations of your online presence to identify potential threats to your brand reputation, data security, and compliance.
- **DAST Scans**: Automated scans that analyze running web applications and APIs to identify security flaws.
- **Attack Surface Scans**: Insights derived from continuous attack surface monitoring, which automatically discovers and tracks your internet-facing assets for potential risks.

Regardless of the test type, findings detail the identified vulnerability, its potential impact, and recommendations for remediation. This information empowers you to prioritize and address security gaps effectively.

{{< alert title="Note" color="primary" >}}
You can manage findings using the Cobalt API. Learn more in our [API documentation](/cobalt-api/documentation/v2/#findings).
{{< /alert >}}

## Organization View

To view all findings reported within your organization, navigate to the **Findings** page. You need an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) or [Member](/platform-deep-dive/collaboration/user-roles/#organization-member) role to view this page.

{{< alert title="Note" color="primary" >}}
Organization Members will be limited in their Findings view, depending on [group](/platform-deep-dive/collaboration/groups) membership.
{{< /alert >}}

![View all findings reported within an organization](/deepdive/Findings-org-view-2.png "View all findings reported within an organization")

Here, you can filter findings by:

- Finding [severity level](/platform-deep-dive/pentests/findings/severity-levels/)
- Finding [state](/platform-deep-dive/pentests/findings/finding-states/)
- Test type
- Associated assets
- Associated pentests
- Vulnerability type, from criteria such as the [OWASP Top 10 list](https://owasp.org/Top10/)
- [Retest end date](/platform-deep-dive/pentests/findings/remediate-findings/#free-retesting-duration/)

You can **download findings** in a CSV file based on applied filters.
