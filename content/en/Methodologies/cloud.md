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
Cobalt supports penetration testing of systems in the following cloud environments:

- [Amazon AWS](/methodologies/amazon-aws-cloud-configuration/)
- [Google Cloud Platform (GCP)](/methodologies/gcp-cloud-configuration/)
- [Microsoft Azure](/methodologies/azure-cloud-configuration/)
{{% /pageinfo %}}

While we perform many of the same tests on different cloud configurations, each environment has unique testing requirements.

<!-- I cover needed content from
https://cobaltio.zendesk.com/hc/en-us/articles/360057567991-Cloud-Configuration-Review-VS-Cloud-Network-Pentest
here: -->

We test cloud assets based on the cloud pentest methodologies listed on this
page. If you want a network pentest of your cloud asset, ask us for an [External
Network Pentest](/methodologies/external-network/).

## Common Requirements

Cobalt assesses your selected cloud environment, as well as all internal and external components. Cobalt follows an industry standard methodology primarily based on:

- Security best practices of specific cloud providers
- OWASP standards for [Cloud Providers](https://owasp.org/www-pdf-archive/Cloud-Top10-Security-Risks.pdf) (PDF) and [Application Security Verification Standard (ASVS)](/getting-started/glossary/#application-security-verification-standard-asvs)

![Cloud configuration review process](/methodologies/cloud-configuration-review-process.png "Cloud configuration review process")

In general, the cloud providers that we work with no longer need to know before
we perform our pentests. However, each cloud provider may have their own procedure.
We've included links to procedures that we know of in the section for each provider.

### Source IP Addresses

Cloud providers may need to include IP addresses associated with pentest traffic in
their [allowlist](/getting-started/glossary/#allowlist). We'll share these addresses when you create an actual pentest.

### Testing Parameters

When you create a pentest that involves a cloud provider, we'll share the information
that your cloud provider may require, including:

- Peak bandwidth
- Peak queries per second
- Escalation traffic requirements
- Emergency contact information

## Other Cloud Providers

We've done pentests on other cloud providers. You can refer to the
[Common Requirements](#common-requirements) listed earlier.

{{% alert title="Note" color="primary" %}}
Cloud providers may require notification before we perform a pentest. For
more information, consult the documentation for your cloud provider.
{{% /alert %}}

## Additional Requirements

{{% additional-requirements %}}
