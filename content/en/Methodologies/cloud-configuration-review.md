---
title: "Cloud Configuration Review"
linkTitle: "Cloud Configuration Review Methodologies"
weight: 200
description: >
  Review Cobalt methodologies for a Cloud Configuration Review.
aliases:
    - /getting-started/pentest-objectives/methodologies/cloud/
    - /platform-deep-dive/pentests/pentest-process/methodologies/cloud/
---

{{% pageinfo %}}
A Cloud Configuration Review is a configuration assessment of your AWS, Azure or GCP cloud environment against established security standards, including CIS benchmarks. This is a review-based assessment and does not include active exploitation of vulnerabilities. 
{{% /pageinfo %}}

We support Cloud Configuration Reviews for the following cloud environments:

- [Amazon AWS](/methodologies/cloud-configuration-review/#amazon-aws)
- [Google Cloud Platform (GCP)](/methodologies/cloud-configuration-review/#google-cloud-platform-gcp)
- [Microsoft Azure](/methodologies/cloud-configuration-review/#microsoft-azure)

Cobalt conducts a configuration review of your AWS, Azure, or GCP cloud environment against established security standards, including CIS benchmarks. 

The goal of this assessment is to identify misconfigurations. We will outline the potential impact, and provide recommendations for remediation. Example findings include: overly permissive IAM policies, open security groups, and unencrypted storage buckets. **A Cloud Configuration Review does not involve active attempts to exploit vulnerabilities**. 

For Cloud Configuration Reviews, our team follows these steps: 
- Target scope reconnaissance
- Component enumeration
  - Based on automated component discovery
- Automated component configuration assessment
  - Detail risks, based on Center for Internet Security (CIS) best practices
- Manual review of the identified misconfigurations
- Reporting, triaging, and retesting

In general, the cloud providers that we work with no longer need to know before
we perform our audit. However, each cloud provider may have their own procedure.
We've included links to procedures that we know of in the section for each provider.

### Source IP Addresses

Cloud providers may need to include IP addresses associated with pentester traffic in
their [allowlist](/getting-started/glossary/#allowlist). We'll share these addresses when you
create a Cloud Configuration Review.


## Amazon AWS

Our pentesters need access to review your AWS configurations. You should prepare:

- A dedicated AWS account for each pentester, with access to each target system.
  - Identity and Access Management (IAM) API credentials for each affected AWS account.
    - Include the following managed policies for the pentest user or role:
      - `SecurityAudit`
      - `ViewOnlyAccess`

These are the required policy Amazon Resource Names (ARN):

```
arn:aws:iam::aws:policy/SecurityAudit
arn:aws:iam::aws:policy/job-function/ViewOnlyAccess
```

If available, you should also include the architecture of your cloud environment.

### What is covered

An AWS Cloud Configuration Review will identify misconfigurations. **This is a review-based assessment and does not include active exploitation of vulnerabilities**.

Cloud Configuration Reviews meet the Security standards based on the Center for Internet Security (CIS) Benchmarks. 

[AWS CIS Benchmarks](https://www.cisecurity.org/benchmark/amazon_web_services) cover IAM, Storage, Logging, Monitoring, and Networking.

Specific services that can be covered as part of the AWS configuration review include:

1. AWS Cloudtrail
2. AWS Cloudwatch
3. AWS EC2
4. AWS ELB
5. AWS IAM
6. AWS RDS
7. AWS Redshift
8. AWS Route 53
9. AWS S3
10. AWS SES
11. AWS SNS
12. AWS SQS
13. AWS VPC

## Google Cloud Platform (GCP)

Our pentesters need access to review your GCP configurations. You should prepare:

- A dedicated GCP account for each pentester, with access to each target system.
  - GCP access keys.
  - Identity and Access Management (IAM) API credentials for each affected GCP account.
    - To provide API credentials, use a (service) account with Viewer and Security Reviewer
      permissions.

### What is covered

A GCP Cloud Configuration Review will identify misconfigurations. **This is a review-based assessment and does not include active exploitation of vulnerabilities**.

Cloud Configuration Reviews meet the Security standards based on the Center for Internet Security (CIS) Benchmarks. 

[GCP CIS Benchmarks](https://www.cisecurity.org/benchmark/google_cloud_computing_platform) address the following areas: 

1. GCP Identity and Access Management
2. GCP Logging and Monitoring
3. GCP Networking
4. GCP Virtual Machines
5. GCP Storage
6. GCP Cloud SQL Database Services
7. GCP BigQuery

## Microsoft Azure

Our pentesters need access to review your Azure configurations. You should prepare:
- A dedicated Azure account for each pentester, with access to each target system.
  - Identity and Access Management (IAM) API credentials (read-only) for each dedicated account.

### What is covered

An Azure Cloud Configuration Review will identify misconfigurations. **This is a review-based assessment and does not include active exploitation of vulnerabilities**.

Cloud Configuration Reviews meet the Security standards based on the Center for Internet Security (CIS) Benchmarks. 

[Azure CIS Benchmarks](https://www.cisecurity.org/benchmark/azure) address the following areas: 

1. Identity and Access Management
2. Microsoft Defender
3. Storage Accounts
4. Database Services
5. Logging and Monitoring
6. Networking
7. Virtual Machines
8. Key Vault
9. AppService
