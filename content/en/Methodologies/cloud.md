---
title: "Cloud Configuration Review Methodologies"
linkTitle: "Cloud Configuration Review"
weight: 150
description: >
  Learn how Cobalt pentesters review cloud configurations.
aliases:
    - /getting-started/pentest-objectives/methodologies/cloud/
    - /platform-deep-dive/pentests/pentest-process/methodologies/cloud/
---

{{% pageinfo %}}
Cobalt pentesters can perform cloud configuration reviews for the following cloud providers:

- [Amazon AWS](/methodologies/amazon-aws-cloud-configuration/)
- [Google Cloud Platform (GCP)](/methodologies/gcp-cloud-configuration/)
- [Microsoft Azure](/methodologies/azure-cloud-configuration/)
{{% /pageinfo %}}

## Methodology Overview

Cobalt assesses your selected cloud environment, as well as all internal and external components. We follow an industry-standard methodology primarily based on:

- Security best practices of specific cloud providers
- OWASP standards for [Cloud Providers](https://owasp.org/www-pdf-archive/Cloud-Top10-Security-Risks.pdf) (PDF) and [Application Security Verification Standard (ASVS)](/getting-started/glossary/#application-security-verification-standard-asvs)

![Cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Cloud configuration review process")

Your cloud provider may require additional information:

- **Source IP addresses**. Cloud providers may need to include IP addresses associated with pentest traffic in their [allowlist](/getting-started/glossary/#allowlist). We'll share these addresses when you create an actual pentest.
- **Testing parameters**. When you create a pentest that involves a cloud provider, we'll share the information that your cloud provider may require, including:
  - Peak bandwidth
  - Peak queries per second
  - Escalation traffic requirements
  - Emergency contact information

{{% alert title="Note" color="primary" %}}
Cloud providers may require notification before we perform a pentest. For more information, consult the documentation for your cloud provider.
{{% /alert %}}

## Cloud Configuration Review or Cloud Network Pentest?

When you plan to test the security of your cloud environment (AWS, GCP, or Azure), you may not know **which methodology to choose**. You can look at pentesting cloud infrastructure environments from two perspectives:

- Configuration perspective:
  - [Cloud Configuration Review](#cloud-configuration-review) methodology
- Network perspective:
  - [External Cloud Network Pentest](#external-cloud-network-pentest) methodology

{{< alert title="Which Methodology is Right for You?" color="primary" >}}
For PCI compliance, the [External Network Pentest Methodology](/methodologies/external-network/) is required.

Cloud configuration reviews are not required by any compliance frameworks. Use this methodology when you:

- Move your environment from on-premises to the cloud
- Change your cloud provider
- Make significant changes to your infrastructure
{{< /alert >}}

### Cloud Configuration Review

Cloud configuration reviews are specific to Infrastructure as a service (IaaS) providers. Cobalt can perform reviews for the following providers:

- [Amazon AWS](/methodologies/amazon-aws-cloud-configuration/)
- [Google Cloud Platform (GCP)](/methodologies/gcp-cloud-configuration/)
- [Microsoft Azure](/methodologies/azure-cloud-configuration/)

Pentesters assess your cloud environment, including its internal and external components. The key stages of the assessment are:

- Component discovery and enumeration
- Component configuration assessment
- Assessment of externally exposed services
- Architectural design analysis

### External Cloud Network Pentest

When using the [External Network Penetration Testing Methodology](/methodologies/external-network/), Cobalt pentesters test your cloud network holistically. They perform:

- Testing of all services provided by your cloud provider
- Segmentation testing
- Assessment of services provided by other vendors, such as WAF, CDN, and DNS

We follow an industry-standard methodology primarily based on the [Open Source Security Testing Methodology Manual (OSSTMM)](https://www.isecom.org/OSSTMM.3.pdf).
