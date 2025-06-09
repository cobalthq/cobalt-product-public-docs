---
title: "API Pentest Methodologies"
linkTitle: "API Methodologies"
weight: 120
description: >
  Review methodologies for APIs. Includes microservices.
aliases:
    - /getting-started/pentest-objectives/methodologies/api-methodologies/
    - /getting-started/pentest-objectives/methodologies/api/
    - /platform-deep-dive/pentests/pentest-process/methodologies/api-methodologies/
---

{{% pageinfo %}}
{{% pentest-rigor %}}
{{% /pageinfo %}}

Cobalt follows an industry-standard methodology based primarily on the OWASP Application Security Verification Standard (ASVS), the OWASP Testing Guide, and the OWASP Top 10 risks. Cobalt’s approach combines manual and automated testing techniques, using best-in-class security tools to ensure comprehensive coverage.

This methodology focuses on identifying and mitigating security risks in API authentication, authorization, input validation, access control, cryptographic security, session management, and business logic flaws. The Core Pentesters evaluate the target API against these controls to uncover security weaknesses, including those cataloged in CVE databases and the OWASP API Security Top 10.

Penetration testing of an API includes the following stages:

- [Target Scope Reconnaissance](#target-scope-reconnaissance)
- [Business and Application Logic Mapping](#business-and-application-logic-mapping)
- [Automated API Enumeration and Scanning](#automated-api-enumeration-and-scanning)
- [Authenticated Vulnerability Scanning and Manual Crawling](#authenticated-vulnerability-scanning-and-manual-crawling)
- [Manual API Vulnerability Testing and Exploitation](#manual-api-vulnerability-testing-and-exploitation)
- [Ongoing Security Assessments and Continuous Testing](#ongoing-security-assessments-and-continuous-testing)
- [Reporting, Triaging, and Retesting](#reporting-triaging-and-retesting)

## Target Scope Reconnaissance

During this phase, Cobalt’s pentesters gather and analyze publicly available information about the target application, including:

- **Endpoint Discovery:** Identify and catalog all API endpoints—both publicly documented and covertly exposed—to establish the complete attack surface. 
- **Authentication & Session Workflows:** Map user and machine-level authentication flows and session management mechanisms, ensuring comprehensive validation of access controls.
- **Business Logic & Data Classification:** Chart critical workflows and classify data sensitivity, enabling prioritized testing of high-risk operations.
- **Reachability & Filtering:** Validate endpoint accessibility under varying network conditions and assess any applied filtering or throttling controls.

We do not perform any third-party testing during the engagement. This means functionality like third-party logins (e.g., "Login with Google," "Login with Facebook") is out of scope.

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use tools such as:

- Burp Suite (Professional or Community)
- Zed Application Proxy (ZAP) Scanner
- Postman

{{% /alert %}}

## Business and Application Logic Mapping

Cobalt’s pentesters conduct a manual assessment to map API functionalities, workflows, and security boundaries, which includes:

- **Access Control Matrix Construction:** Systematically define user roles and their permissible actions across each API endpoint and HTTP method, ensuring alignment between intended access policies and actual enforcement.
- **Sensitive Endpoint Identification:** Classify high-risk API operations that handle critical business functions or sensitive data, prioritizing them for in-depth security evaluation.
- **Business Logic Flaw Analysis:** Examine application workflows for deviations or gaps that can be exploited to bypass intended security controls or manipulate system state.

## Automated API Enumeration and Scanning

Cobalt’s pentesters use commercial and open-source API security tools to perform:

- **Schema-Driven Scanner Configuration:** Initialize automated tools with formal API specifications to guarantee exhaustive and structured testing.
- **Automated Endpoint Crawling:** Use crawler engines and collection runners to traverse every accessible path, both authenticated and unauthenticated. 
- **Payload Generation & Fuzzing:** Inject both generic and context-specific inputs to provoke anomalous behavior or uncover hidden logic.
- **Contract & Schema Validation:** Automatically verify request and response structures against their formal definitions to detect deviations.
- **Misconfiguration Detection:** Identify common security oversights in API deployments through pre-configured or custom rule sets. 

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use tools such as:

- Burp Suite (Professional or Community)
- Zed Application Proxy (ZAP) Scanner
- Ffuf
- sslscan

{{% /alert %}}

## Authenticated Vulnerability Scanning and Manual Crawling

Cobalt conducts authenticated vulnerability scanning using valid API credentials or tokens, allowing our pentesters to test your API from the perspective of a legitimate user. Within this phase, Cobalt pentesters focus on:

- **Session Token Handling:** Evaluate token lifecycle, integrity, and invalidation mechanisms to prevent unauthorized access and replay attacks.
- **Parameter Discovery:** Uncover undocumented or optional inputs that could expose hidden functionality or elevate privileges.
- **Deep Crawling:** Manually orchestrate chained and iterative requests to traverse complex workflows and trigger mass data exposure.
- **Parallel Session Crawling:** Operate multiple authenticated sessions concurrently to surface race conditions or state desynchronization issues.
- **Authentication Bypass Testing:** Manipulate request and environment parameters to circumvent intended authentication controls.

## Manual API Vulnerability Testing and Exploitation

Cobalt’s pentesters conduct manual API testing, using specialized tools to check for vulnerabilities related to:

- **Authentication & Authorization:** Manually verify authentication flows and enforce access controls, ensuring only authorized users can perform each operation.
- **Injection & Parsing:** Test untrusted inputs against backend interpreters to detect common flaws like SQL, command, or XML/JSON injection vulnerabilities.
- **Business Logic Abuse:** Assess application workflows for exploitable deviations that could compromise business rules or allow for abuse.
- **Data Exposure & Error Handling:** Evaluate response content and error messages to ensure sensitive data isn't inadvertently disclosed.
- **Access Control Evasion & Privilege Escalation:** Exploit misconfigurations or logic gaps to elevate privileges or perform unauthorized operations.
- **Forced Parameter Switching:** Swap parameter values between requests (e.g., accountFrom ↔ accountTo) to test transaction logic for vulnerabilities.

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use tools such as:

- Burp Suite (Professional or Community)
- Zed Application Proxy (ZAP) Scanner
- Postman

{{% /alert %}}

## Ongoing Security Assessments and Continuous Testing

Cobalt provides real-time security feedback throughout the engagement, enabling:
- Collaboration with developers and security teams
- Ongoing risk analysis & vulnerability triaging
- Proactive remediation guidance


## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}
