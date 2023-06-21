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
{{% cloud-security-guidelines %}}

We also follow the [Penetration Testing Rules of Engagement](https://www.microsoft.com/en-us/msrc/pentest-rules-of-engagement) by Microsoft to avoid causing downtime on your systems.

![Microsoft Azure cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Microsoft Azure cloud configuration review process")

{{% cloud-stages-toc %}}

## Prerequisites

Our pentesters need access to test your Azure systems. Prepare the following:

- A dedicated Azure account for each pentester, with access to each target system
- Read-only Identity and Access Management (IAM) API credentials for each dedicated account

## Target Scope Reconnaissance

{{% cloud-recon %}}

## Component Enumeration

{{% cloud-component-enumeration %}}
  - Azure Cloud Storage

## Automated Component Configuration Assessment

{{% cloud-component-assessment %}}

## Automated and Manual Assessment of Externally Exposed Services

{{% cloud-external-services %}}

## Architectural Design Analysis

{{% cloud-architect-design %}}

## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}

## Tools

During the assessment, pentesters use multiple testing tools, such as:

- [Scout Suite](https://github.com/nccgroup/ScoutSuite): Cloud security auditing tool
- [Other tools for Microsoft Azure](https://github.com/kmcquade/awesome-azure-security)

{{% various-tools %}}
