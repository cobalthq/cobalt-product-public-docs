---
title: "Amazon AWS Cloud Configuration Review"
linkTitle: "Amazon AWS Cloud Configuration"
weight: 160
description: >
  Learn how Cobalt pentesters review Amazon AWS cloud configurations.
---

{{% pageinfo %}}
Amazon AWS cloud-based configuration review is an exercise in which Cobalt pentesters assess an organization's Amazon-based cloud environment, and its internal and external components.
{{% /pageinfo %}}

We follow an industry-standard methodology primarily based on:

- [CIS AWS Foundations Benchmark](https://docs.aws.amazon.com/securityhub/latest/userguide/cis-aws-foundations-benchmark.html)
- Additional testing guidelines, such as the [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)

![Amazon AWS cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Amazon AWS cloud configuration review process")

Review of a cloud configuration includes the following stages:

- [Target scope reconnaissance](#target-scope-reconnaissance)
- [Component enumeration](#component-enumeration)
- [Automated component configuration assessment](#automated-component-configuration-assessment)
- [Automated and manual assessment of externally exposed services](#automated-and-manual-assessment-of-externally-exposed-services)
- [Architectural design analysis](#architectural-design-analysis)
- [Reporting, triaging, and retesting](#reporting-triaging-and-retesting)

## Prerequisites

Our pentesters need access to test your AWS systems. To that end, you should prepare:

- A dedicated AWS account for each pentester, with access to each target system.
  - Identity and Access Management (IAM) API credentials for each affected AWS account.
    - Include the following managed policies for the pentest user or role:
      - `SecurityAudit`
      - `ViewOnlyAccess`

The required policy Amazon Resource Names (ARN) are:

```
arn:aws:iam::aws:policy/SecurityAudit
arn:aws:iam::aws:policy/job-function/ViewOnlyAccess
```

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
- [Prowler](https://github.com/prowler-cloud/prowler): Security best practices assessment tool
- [CloudSploit Scan](https://github.com/aquasecurity/cloudsploit): Tool for detecting security risks in cloud infrastructure accounts

{{% various-tools %}}
