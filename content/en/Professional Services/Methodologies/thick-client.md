---
title: "Thick Client Application Penetration Testing Methodology"
linkTitle: "Thick Client App"
weight: 220
description: >
  Cobalt pentest methodology for thick client apps.
---

{{% pageinfo %}}
Learn how the Cobalt [Professional Services](/professional-services/) team tests thick client applications.
{{% /pageinfo %}}

Once we've determined the application architecture that the thick client app is using, we perform the following engagements to ensure full coverage:

- [Information gathering](#information-gathering)
- [Client-side attacks](#client-side-attacks)
- [Network-side attacks](#network-side-attacks)
- [Server-side attacks](#server-side-attacks)

We follow an industry standard methodology primarily based on the [Open Web App Security Project (OWASP) Top 10](https://owasp.org/www-project-top-ten/) framework.

## Information Gathering

During this phase, we use static tools to determine the following for the thick client app:

- Application architecture
- Framework
- Language

## Client-Side Attacks

During this phase, we perform binary analysis and memory analysis to search for sensitive information, such as:

- Usernames
- Passwords
- API keys

During binary analysis, we perform reverse engineering and/or code decompiling.

During memory analysis, we perform:

- Process monitoring
- Registry key analysis
- File system analysis

## Network-Side Attacks

During this phase, we set up a network sniffer to verify that the application doesn't send sensitive information over cleartext during the installation or runtime to the server.

We set up a proxy to intercept HTTP and HTTPS traffic to find vulnerable APIs. We also use the proxy for other server-side attacks.

## Server-Side Attacks

During this phase, we follow the OWASP Top 10 methodology for web application testing. We perform automated and manual testing during the engagement. Pentesters attempt to intercept and modify traffic between the web application and the web server.

## Additional Methodology Information

**OWASP Top 10 for Web Application (2021):**

1. Broken Access Control
1. Cryptographic Failures
1. Injection
1. Insecure Design
1. Security Misconfiguration
1. Vulnerable and Outdated Components
1. Identification and Authentication Failures
1. Software and Data Integrity Failures
1. Security Logging and Monitoring Failures
1. Server-Side Request Forgery (SSRF)
