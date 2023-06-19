---
title: "Cobalt Penetration Testing Methodologies"
linkTitle: "Methodologies"
weight: 7
description: >
  An overview of Cobalt pentest methodologies.
aliases:
    - /getting-started/pentest-objectives/methodologies/
    - /platform-deep-dive/pentests/pentest-process/methodologies/
---

{{% pageinfo %}}
Cobalt pentesters follow specific methodologies for different types of assets.
{{% /pageinfo %}}

Learn more about each methodology:

- [Web application](/methodologies/web-methodologies/)
- [API](/methodologies/api-methodologies/)
- [Mobile application](/methodologies/mobile/)
- [Internal network](/methodologies/internal-network/)
- [External network](/methodologies/external-network/)
- [Cloud configuration](/methodologies/cloud/):
  - [Amazon AWS](/methodologies/amazon-aws-cloud-configuration/)
  - [Google Cloud Platform (GCP)](/methodologies/gcp-cloud-configuration/)
  - [Microsoft Azure](/methodologies/azure-cloud-configuration/)
- [Azure Active Directory (AD)](/methodologies/azure-ad/)

In most cases, the methodology is fixed, based on the [Asset Type](/platform-deep-dive/assets/asset-types/) you defined earlier. However, if you selected a combined asset type, such as Web + API, you can limit the test to either of the individual methodologies:

![Choice of Methodologies](/gsg/WebOrAPI.png "Choose a pentest methodology for Web + API assets")
