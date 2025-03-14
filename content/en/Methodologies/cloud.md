---
title: "Cloud Configuration Pentests"
linkTitle: "Cloud Configuration Pentest Methodologies"
weight: 0
description: >
  Review methodologies for Cloud Configurations.
aliases:
    - /getting-started/pentest-objectives/methodologies/cloud/
    - /platform-deep-dive/pentests/pentest-process/methodologies/cloud/
---

{{% pageinfo %}}
{{% pentest-rigor %}}
{{% /pageinfo %}}

We support penetration testing of systems in the following cloud environments:

- Amazon AWS
- Google Cloud Platform (GCP)
- Microsoft Azure

While we perform many of the same tests on different cloud configurations, each environment
has unique testing requirements.

## Cloud Network Pentest
<!-- I cover needed content from
https://cobaltio.zendesk.com/hc/en-us/articles/360057567991-Cloud-Configuration-Review-VS-Cloud-Network-Pentest
here: -->

We test cloud assets based on the cloud pentest methodologies listed on this
page. If you want a network pentest of your cloud asset, ask us for an [External
Network Pentest](/methodologies/external-network/).

## Common Requirements

Cobalt assesses your selected cloud environment, as well as all internal and external components. Cobalt
follows an industry standard methodology primarily based on:

- Best practices established by your cloud provider
- [Application Security Verification Standard (ASVS)](/getting-started/glossary/#application-security-verification-standard-asvs).

The Cobalt team of pentesters do not need access to the underlying web application
source code, unless you specify it as a requirement.

We follow an industry standard methodology primarily based on the OWASP ASVS
Testing Guide. Our team takes the following steps to ensure full coverage:

- Target scope reconnaissance
- Component enumeration
  - Based on automated component discovery
- Automated component configuration assessment
  - Detail risks, based on Center for Internet Security (CIS) best practices
- Automated / manual review of externally exposed services
  - Basic vulnerability assessments
- Architectural design analysis
- Reporting, triaging, and retesting

![Cloud pentest flow](/gsg/CloudPentest.png)

In general, the cloud providers that we work with no longer need to know before
we perform our pentests. However, each cloud provider may have their own procedure.
We've included links to procedures that we know of in the section for each provider.

### Source IP Addresses

Cloud providers may need to include IP addresses associated with pentest traffic in
their [allowlist](/getting-started/glossary/#allowlist). We'll share these addresses when you
create an actual pentest.

### Testing Parameters

When you create a pentest that involves a cloud provider, we'll share the information
that your cloud provider may require, including:

- Peak bandwidth
- Peak queries per second
- Escalation traffic requirements
- Emergency contact information

## Amazon AWS

Our pentesters need access to test your AWS systems. To that end, you should prepare:

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

You should also include the architecture of your cloud configuration.

### What is covered

Cloud Configuration Reviews meet the Security standards based on the Center for Internet Security (CIS) Benchmarks. AWS CIS Benchmarks cover IAM, Storage, Logging, Monitoring, and Networking.

#### Specific checks categories that are covered as part of the Pentest

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

Our pentesters need access to test your GCP systems. To that end, you should prepare:

- A dedicated GCP account for each pentester, with access to each target system.
  - GCP access keys.
  - Identity and Access Management (IAM) API credentials for each affected GCP account.
    - To provide API credentials, use a (service) account with Viewer and Security Reviewer
      permissions.

### What is covered

Cloud Configuration Reviews meet the Security standards based on the Center for Internet Security (CIS) Benchmarks. GCP CIS Benchmarks cover IAM, Storage, Logging, Monitoring, Virtual Machines, Cloud SQL DB Services, BigQuery, and Networking.

#### Specific checks categories that are covered as part of the Pentest

1. GCP Identity and Access Management
2. GCP Logging and Monitoring
3. GCP Networking
4. GCP Virtual Machines
5. GCP Storage
6. GCP Cloud SQL Database Services
7. GCP BigQuery

## Microsoft Azure

Our pentesters need access to test your Azure systems. To that end, you should prepare:
- A dedicated Azure account for each pentester, with access to each target system.
  - Identity and Access Management (IAM) API credentials (read-only) for each dedicated account.

### What is covered

Cloud Configuration Reviews meet the Security standards based on the Center for Internet Security (CIS) Benchmarks. Azure CIS Benchmarks cover IAM, Microsoft Defender, Storage Accounts, Database Services, Logging, Monitoring, Key Vault, AppService and Networking.

#### Specific checks categories that are covered as part of the Pentest

1. Identity and Access Management
2. Microsoft Defender
3. Storage Accounts
4. Database Services
5. Logging and Monitoring
6. Networking
7. Virtual Machines
8. Key Vault
9. AppService

## Other Cloud Providers

We've done pentests on other cloud providers. You can refer to the
[Common Requirements](#common-requirements) listed earlier.

{{% alert title="Note" color="primary" %}}
Cloud providers may require notification before we perform a pentest. For
more information, consult the documentation for your cloud provider.
{{% /alert %}}

## Additional Requirements

{{% additional-requirements %}}
