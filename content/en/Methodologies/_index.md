---
title: "Cobalt Testing Methodologies"
linkTitle: "Methodologies"
weight: 7
no_list: true
description: >
  An overview of Cobalt methodologies.
aliases:
    - /getting-started/pentest-objectives/methodologies/
    - /platform-deep-dive/pentests/pentest-process/methodologies/
---

{{% pageinfo %}}
Cobalt pentesters follow specific methodologies for different test and asset types.
{{% /pageinfo %}}

By default, our pentesters test for industry standard vulnerabilities from:

- [Open Web Application Security Project (OWASP)](https://owasp.org).
  - Includes different "Top 10" lists for web, API, mobile, AI/LLM, and cloud systems.
- [Open Source Security Testing Methodology Manual (OSSTMM)](https://www.isecom.org/OSSTMM.3.pdf) (PDF).
  - Used for internal and external networks.

For more information on how we pentest, refer to the detailed pages associated with your
asset.

- [Web](/methodologies/web-methodologies/)
- [API](/methodologies/api-methodologies/)
- [Mobile](/methodologies/mobile/)
- [Internal Network](/methodologies/internal-network/)
- [External Network](/methodologies/external-network/)
- [Cloud Configuration Review](/methodologies/cloud-configuration-review/)
- [Desktop](/methodologies/desktop/)
- [AI/LLM](/methodologies/ai-llm/)

The Methodology is usually fixed, based on the Test Type or the [Asset Type](/platform-deep-dive/assets/asset-types/)
you defined earlier. If you choose a combined asset type, such as Web + API, you
can limit the test to either of the individual methodologies:

![Choice of Methodologies](/gsg/WebOrAPI.png "Choose a pentest methodology for Web + API assets")
