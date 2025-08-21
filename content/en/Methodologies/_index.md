---
title: "Cobalt Methodologies"
linkTitle: "Methodologies"
weight: 60
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

For more information, refer to the detailed pages associated with your
asset.

- [Web](/methodologies/web-methodologies/)
- [API](/methodologies/api-methodologies/)
- [Mobile](/methodologies/mobile/)
- [Internal Network](/methodologies/internal-network/)
- [External Network](/methodologies/external-network/)
- [Cloud Configuration Review](/methodologies/cloud-configuration-review/)
- [Desktop](/methodologies/desktop/)
- [AI/LLM](/methodologies/ai-llm/)

The methodology is usually fixed, based on the Test Type or the [Asset Type](/platform-deep-dive/assets/asset-types/)
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

## Out of Scope Testing

When you engage Cobalt for a pentest, it's important to understand what's usually outside the boundaries of the test. This clarity helps manage expectations and ensures the test focuses on the most relevant areas of your digital security. Here are a few key areas that generally fall out of scope:

### Denial-of-Service (DoS/DDoS) Testing

Direct Denial-of-Service (DoS) or Distributed Denial-of-Service (DDoS) testing is **not included** in a standard Cobalt pentest.

_Why it's excluded:_

- DoS attacks are designed to crash or overwhelm services. Performing these tests could lead to significant downtime for your critical business operations.
- Uncontrolled DoS testing can be indistinguishable from a malicious attack, and it might inadvertently affect other organizations that share infrastructure with you.
- Assessing DoS/DDoS resilience usually requires specific performance and load testing. This is often done in controlled staging environments, not as part of a general security pentest.

### Third-Party Applications and Libraries

Cobalt pentests primarily concentrate on the custom code and configurations implemented. Cobalt does not delve into the inherent security of third-party applications and libraries.

For example, if you use a third-party service like Okta or Auth0 for authentication:

- Cobalt will test the connection and integration between your application and the authentication service. This includes looking for vulnerabilities in how your application communicates with Okta/Auth0, how it handles tokens, or if there are any misconfigurations that could expose your users.
- Cobalt will not test the security of Okta's or Auth0's own authentication system. The security of their underlying platform, their servers, and their internal code is the responsibility of those vendors.

_Why they're excluded:_

- The security of third-party products is primarily the vendor's responsibility. Organizations should rely on vendor security attestations, audit reports, and their own due diligence when choosing these solutions.
- Cobalt pentesters typically don't have the legal authorization or the necessary technical access to conduct in-depth testing on a third-party vendor's infrastructure.
- If third-party components are included in the scope, Cobalt testers will focus on how they are integrated and configured within your environment, rather than attempting to uncover vulnerabilities within the third-party product itself.
