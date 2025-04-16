---
title: "Web Application Penetration Testing Methodology"
linkTitle: "Web Methodologies"
weight: 100
description: >
  Review Cobalt pentest methodologies for web applications, including microservices.
aliases:
    - /getting-started/pentest-objectives/methodologies/web-methodologies/
    - /platform-deep-dive/pentests/pentest-process/methodologies/web-methodologies/
---

{{% pageinfo %}}
Web application penetration testing is a structured process in which pentesters simulate real-world attacks to identify security vulnerabilities in web applications. This ensures robust security controls, protects sensitive data, and strengthens overall application security.
{{% /pageinfo %}}

Cobalt follows an industry-standard methodology based primarily on the OWASP Application Security Verification Standard (ASVS), the OWASP Testing Guide, and the OWASP Top 10 risks. Cobalt’s approach combines manual and automated testing techniques, using best-in-class security tools to ensure comprehensive coverage.

![Web application penetration testing methodology process](/methodologies/web-app-pentest-methodology-process.png "Web application penetration testing methodology process")

Penetration testing of a web application includes the following stages:

- [Target Scope Reconnaissance](#target-scope-reconnaissance)
- [Business and Application Logic Mapping](#business-and-application-logic-mapping)
- [Automated Web Crawling and Web Scanner Configuration](#automated-web-crawling-and-web-scanner-configuration)
- [Vulnerability Scanning](#vulnerability-scanning)
- [Manual Web Vulnerability Tests and Exploit Reviews](#manual-web-vulnerability-tests-and-exploit-reviews)
- [Advanced Security Testing for Modern Web Apps](#advanced-security-testing-for-modern-web-apps)
- [Ongoing Security Assessments and Continuous Testing](#ongoing-security-assessments-and-continuous-testing)
- [Reporting, Triaging, and Retesting](#reporting-triaging-and-retesting)

{{% alert title="Note" color="primary" %}}
{{% various-tools %}}
{{% /alert %}}

During the assessment, Cobalt evaluates application security through black-box or grey-box testing methodologies, identifying security flaws in business logic, authentication, authorization, and input handling. 

While web application tests cover APIs used to serve application content, additional API security tests can be requested separately. These combinations include:
- A combined Web + API test
- A Web test and a separate test for APIs

## Target Scope Reconnaissance

During this phase, Cobalt’s pentesters gather and analyze publicly available information about the target application, including:

- Application URLs and subdomains
- Business logic overview and key functionalities
- Identification of critical assets and high-value targets

Cobalt’s pentesters confirm the following before proceeding:

- The ability to reach and scan the target(s)
- Testing permissions and authentication mechanisms
- Application functionality


{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use reconnaissance scanning tools such as:

- Burp Suite (Professional or Community)
- Zed Application Proxy (ZAP) Scanner
- Curl

{{% /alert %}}

## Business and Application Logic Mapping

Cobalt manually reviews the application's business logic, workflows, and access controls. We analyze the following security aspects:

- User Roles & Access Control Mapping: Reviewing Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) models
- Business Logic Abuse Scenarios: Identifying vulnerabilities that could bypass intended workflows
- Session & Authentication Mechanisms: Evaluating session management and Multi-Factor Authentication (MFA) protections
- Client-Side vs. Server-Side Controls: Ensuring proper enforcement on the server-side

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use application logic analysis tools such as:

- Burp Suite Pro/Community
- OWASP Zed Attack Proxy
{{% /alert %}}

## Automated Web Crawling and Web Scanner Configuration

Automated scans are fine-tuned to maximize detection accuracy while minimizing noise. This phase includes:

- Identifying unauthenticated and authenticated endpoints
- Enumerating input fields, hidden parameters, and dynamic pages
- Ensuring all sections of the application are included in security scans

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use web crawling and scanning tools such as:

- Burp Suite Pro/Community
- Dirb
{{% /alert %}}

## Vulnerability Scanning

### Unauthenticated Scanning

Cobalt’s pentesters assess the application from the perspective of an external, unauthenticated attacker. This phase helps identify vulnerabilities that are exposed to the public or prior to login. In this part of the pentest process, our pentesters:
- Perform automated scanning of publicly accessible endpoints and services
- Enumerate available routes, APIs, and metadata (e.g., error messages, headers)
- Test for improper access controls on restricted resources
- Identify information disclosure through verbose errors, misconfigured headers, or open directories.
- Assess login functionality for brute-force resilience, enumeration vectors, and insecure implementations
- Check for exposed administrative panels, forgotten endpoints, or outdated components

### Authenticated Scanning

Cobalt’s pentesters leverage authenticated sessions to identify security risks that require privileged access. This phase includes:
- Automated scanning using authenticated user sessions
- Verification of session management flaws (e.g., session fixation, JWT misconfigurations)
- Manual business logic validation and anti-automation testing
- Identification of weak authentication mechanisms


{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use vulnerability scanning tools such as:

- WPScan
- SQLmap
- Nuclei
- Burp Suite Pro/Community
{{% /alert %}}

## Manual Web Vulnerability Tests and Exploit Reviews

This phase focuses on manual security testing to uncover vulnerabilities that automated scanners miss. It includes:
- Injection Attacks (SQL, XSS, Command Injection, SSRF, etc.)
- Broken Access Controls & IDOR Testing (OWASP Top 10 2021: #1 Risk)
- Session Management Attacks (Session Hijacking, Token Replay, Cookie Tampering)
- Weak Cryptographic Implementations (Improper storage of credentials, weak encryption)
- Modern Web App Attacks (DOM-based XSS, CSP Bypasses, Prototype Pollution)
- Microservices Security (CORS misconfigurations, unauthorized API interactions)
- Business Logic
- Testing the web server for external network vulnerabilities. **Note: This is not a full external network penetration test.**


{{% alert title="Tools" color="primary" %}}
Cobalt pentesters use multiple testing and exploitation tools, such as:

- Burp Suite Pro/Community (Intruder & Repeater)
- OWASP ZAP
- Dirble
- JWT_Tool (for JWT manipulation testing)
- Corsy (for CORS misconfiguration testing)
{{% /alert %}}

## Advanced Security Testing for Modern Web Apps

With the rise of Single Page Applications (SPAs), microservices, and cloud-based applications. Cobalt performs additional security tests, including:
- Client-Side JavaScript Security Audits (Detection of vulnerable dependencies, inline script injection risks)
- WebSockets & Real-Time Communication Testing
- Cross-Origin Resource Sharing (CORS) Exploitability Checks

## Ongoing Security Assessments and Continuous Testing

Cobalt provides real-time security feedback throughout the engagement, enabling:
- Collaboration with developers and security teams
- Ongoing risk analysis & vulnerability triaging
- Proactive remediation guidance


## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}
