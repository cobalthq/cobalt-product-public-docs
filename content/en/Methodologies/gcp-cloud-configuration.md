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
{{% cloud-security-guidelines %}}

![Google Cloud Platform cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Google Cloud Platform cloud configuration review process")

{{% cloud-stages-toc %}}

## Prerequisites

Our pentesters need access to test your GCP systems. Prepare the following:

- A dedicated GCP account for each pentester, with access to each target system.
- Identity and Access Management (IAM) API credentials for each dedicated account.
  - To provide API credentials, use a (service) account with **Viewer** and **Security Reviewer** permissions.
<!-- Auditor role? GCP access keys? --->

## Target Scope Reconnaissance

{{% cloud-recon %}}

## Component Enumeration

{{% cloud-component-enumeration %}}
  - Google Cloud Storage

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
- [G-Scout](https://github.com/nccgroup/G-Scout): Tool for auditing Google Cloud Platform configurations <!-- Is this tool still valid? -->
- [gcloud CLI](https://cloud.google.com/sdk/gcloud): Set of tools to create and manage Google Cloud resources
- [GCPBucketBrute](https://github.com/RhinoSecurityLabs/GCPBucketBrute): A script to enumerate Google Storage buckets

{{% various-tools %}}
