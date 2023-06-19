---
title: "Microsoft Azure Cloud Configuration Review"
linkTitle: "Microsoft Azure Cloud Configuration"
weight: 180
description: >
  Learn how Cobalt pentesters review Microsoft Azure cloud configurations.
---

{{% pageinfo %}}
Microsoft Azure cloud-based configuration review is an exercise in which Cobalt pentesters assess an organization's Azure-based cloud environment, and its internal and external components.
{{% /pageinfo %}}

We follow an industry-standard methodology primarily based on:

- [Microsoft security best practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)
- Additional testing guidelines, such as the [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)

We also leverage the [Penetration Testing Rules of Engagement](https://www.microsoft.com/en-us/msrc/pentest-rules-of-engagement) by Microsoft to avoid causing downtime on your systems.

![Microsoft Azure cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Microsoft Azure cloud configuration review process")

Review of a cloud configuration includes the following stages:

- [Target scope reconnaissance](#target-scope-reconnaissance)
- [Component enumeration](#component-enumeration)
- [Automated component configuration assessment](#automated-component-configuration-assessment)
- [Automated and manual assessment of externally exposed services](#automated-and-manual-assessment-of-externally-exposed-services)
- [Architectural design analysis](#architectural-design-analysis)
- [Reporting, triaging, and retesting](#reporting-triaging-and-retesting)

## Prerequisites

Our pentesters need access to test your Azure systems. To that end, you should prepare:

- A dedicated Azure account for each pentester, with access to each target system.
  - Identity and Access Management (IAM) API credentials (read-only) for each dedicated account.

## Target Scope Reconnaissance


## Component Enumeration


## Automated Component Configuration Assessment


## Automated and Manual Assessment of Externally Exposed Services


## Architectural Design Analysis



## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}

## Tools

During testing, pentesters use multiple testing tools, such as:

- [Scout Suite](https://github.com/nccgroup/ScoutSuite): Cloud security auditing tool
- [Other tools for Microsoft Azure](https://github.com/kmcquade/awesome-azure-security)

{{% various-tools %}}
