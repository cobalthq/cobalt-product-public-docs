---
title: "Google Cloud Platform (GCP) Cloud Configuration Review"
linkTitle: "GCP Cloud Configuration"
weight: 170
description: >
  Learn how Cobalt pentesters review GCP cloud configurations.
---

{{% pageinfo %}}
GCP cloud-based configuration review is an exercise in which Cobalt pentesters assess an organization's GCP-based cloud environment, and its internal and external components.
{{% /pageinfo %}}

We follow an industry-standard methodology primarily based on:

- [Google Cloud security best practices](https://cloud.google.com/security/best-practices)
- Additional testing guidelines, such as:
  - [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
  - [CIS Critical Security Controls](https://www.cisecurity.org/controls)

![Google Cloud Platform cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Google Cloud Platform cloud configuration review process")

Review of a cloud configuration includes the following stages:

- [Target scope reconnaissance](#target-scope-reconnaissance)
- [Component enumeration](#component-enumeration)
- [Automated component configuration assessment](#automated-component-configuration-assessment)
- [Automated and manual assessment of externally exposed services](#automated-and-manual-assessment-of-externally-exposed-services)
- [Architectural design analysis](#architectural-design-analysis)
- [Reporting, triaging, and retesting](#reporting-triaging-and-retesting)

## Prerequisites

Our pentesters need access to test your GCP systems. To that end, you should prepare:

- A dedicated GCP account for each pentester, with access to each target system.
  - GCP access keys.
  - Identity and Access Management (IAM) API credentials for each affected GCP account.
    - To provide API credentials, use a (service) account with Viewer and Security Reviewer
      permissions.

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
- [G-Scout](https://github.com/nccgroup/G-Scout): Tool for auditing Google Cloud Platform configurations <!-- Is this tool still valid? -->
- [gcloud CLI](https://cloud.google.com/sdk/gcloud): Set of tools to create and manage Google Cloud resources
- [GCPBucketBrute](https://github.com/RhinoSecurityLabs/GCPBucketBrute): A script to enumerate Google Storage buckets

{{% various-tools %}}
