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
{{% cloud-security-guidelines %}}

![Amazon AWS cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Amazon AWS cloud configuration review process")

{{% cloud-stages-toc %}}

## Prerequisites

Our pentesters need access to test your AWS systems. Prepare the following:

- A dedicated AWS account for each pentester, with access to each target system.
- Read-only Identity and Access Management (IAM) API credentials for each dedicated account. Add the following AWS managed policies to the pentester user or role:
  - `SecurityAudit`
  - `ViewOnlyAccess`

The required [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) are:

```
arn:aws:iam::aws:policy/SecurityAudit
arn:aws:iam::aws:policy/job-function/ViewOnlyAccess
```

## Target Scope Reconnaissance

{{% cloud-recon %}}

## Component Enumeration

{{% cloud-component-enumeration %}}
  - IAM
  - S3
  - RDS

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
- [Prowler](https://github.com/prowler-cloud/prowler): Security best practices assessment tool
- [CloudSploit Scan](https://github.com/aquasecurity/cloudsploit): Tool for detecting security risks in cloud infrastructure accounts

{{% various-tools %}}
