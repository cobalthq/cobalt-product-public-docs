---
title: "Cobalt Methodologies"
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

## Testing Approaches 

Understanding the level of testing access provided to the team is critical to defining the scope and depth of testing. We offer three standard approaches:

### Black-box Testing

In a black-box engagement, testers are given no internal knowledge of the application or infrastructure. They simulate an external attacker with no privileged access, relying entirely on publicly available information and exposed functionality. This approach tests how the application performs under real-world attack conditions but may not uncover deeper or logic-based flaws due to limited visibility. Testing will cease immediately and the Customer will be contacted if the pentester gains access to the application or network.

### Grey-box Testing

In a grey-box engagement, testers are provided with partial knowledge, such as valid user credentials, limited API documentation, or an overview of the application’s architecture. This approach balances realism with efficiency, allowing deeper testing of authenticated functionality, access control, and business logic flaws while retaining an external attack perspective.

### White-box Testing

In a white-box engagement, testers are given full access to internal documentation, architecture diagrams, source code, configuration details, and test accounts with various roles. This method enables comprehensive coverage and is ideal for identifying deep-seated vulnerabilities, insecure configurations, and architectural weaknesses.
