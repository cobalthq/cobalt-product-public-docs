---
title: "Cobalt Penetration Testing Methodologies"
linkTitle: "Methodologies"
weight: 7
no_list: true
description: >
  An overview of Cobalt pentest methodologies.
aliases:
    - /getting-started/pentest-objectives/methodologies/
    - /platform-deep-dive/pentests/pentest-process/methodologies/
---

{{% pageinfo %}}
Cobalt pentesters follow specific methodologies for different types of assets.
{{% /pageinfo %}}

By default, our pentesters test for industry standard vulnerabilities from:

- [Open Web Application Security Project (OWASP)](https://owasp.org).
  - Includes different "Top 10" lists for web, API, mobile, and cloud systems.
- [Open Source Security Testing Methodology Manual (OSSTMM)](https://www.isecom.org/OSSTMM.3.pdf) (PDF).
  - Used for internal and external networks.

For more information on how we pentest, refer to the detailed pages associated with your
asset.

- [Web](/methodologies/web-methodologies/)
- [API](/methodologies/api-methodologies/)
- [Mobile](/methodologies/mobile/)
- [Internal Network](/methodologies/internal-network/)
- [External Network](/methodologies/external-network/)
- [Cloud](/methodologies/cloud/)
- [Desktop](/methodologies/desktop/)
- [Azure AD](/methodologies/azure-ad/)

In most cases, the Methodology is fixed, based on the [Asset Type](/platform-deep-dive/assets/asset-types/)
you defined earlier. However, if you selected a combined asset type, such as Web + API, you
can limit the test to either of the individual methodologies:

![Choice of Methodologies](/gsg/WebOrAPI.png "Choose a pentest methodology for Web + API assets")

Review the methodology for your asset, from the links shown earlier. Each methodology
includes default requirements based on standards such as:

- [OWASP](/getting-started/glossary/#open-web-application-security-project-owasp)
- [OSSTMM](/getting-started/glossary/#open-source-security-testing-methodology-manual-osstmm)

You're welcome to include additional requirements.

Next, you'll want to set up and share [Test Credentials](/getting-started/pentest-objectives/test-credentials/) for your
pentesters.
