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
Web application pentesting is a structured process in which pentesters simulate real-world attacks to identify security vulnerabilities in web applications. This ensures robust security controls, protects sensitive data, and strengthens overall application security. {{% /pageinfo %}}

Cobalt follows an industry-standard methodology based primarily on the OWASP Application Security Verification Standard (ASVS) v5.0, the OWASP Testing Guide, and the OWASP Top 10 2025 risks. Cobalt's approach combines manual and automated testing techniques, using best-in-class security tools to ensure comprehensive coverage.

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

During the assessment, Cobalt evaluates application security through [black-box](http:///methodologies/#black-box-testing) or [grey-box](http:///methodologies/#grey-box-testing) testing methodologies, identifying security flaws in business logic, authentication, authorization, and input handling.

Standard web application pentests include testing of APIs that serve application content. For more in-depth API testing, you can:

- create a dedicated API pentest *or*  
- create a combined Web \+ API pentest

To learn which methodology aligns with your use case, refer to [Selecting Your Test Type: Web or API](http:///methodologies/web-api-test-type).

## Target Scope Reconnaissance

During this phase, Cobalt's pentesters gather and analyze publicly available information about the target application, including:

- Application URLs and subdomains  
- Business logic overview and key functionalities  
- Identification of critical assets and high-value targets  
- Enumeration of third-party libraries, CDN dependencies, and external service integrations

Cobalt's pentesters confirm the following before proceeding:

- The ability to reach and scan the target(s)  
- Testing permissions and authentication mechanisms  
- Application functionality

{{% alert title="Tools" color="primary" %}} 
Cobalt pentesters may use reconnaissance scanning tools such as:

- Burp Suite (Professional or Community)  
- Zed Application Proxy (ZAP) Scanner  
- Curl  
- retire.js (for detecting known vulnerable JavaScript libraries)  
- OWASP Dependency-Check

{{% /alert %}}

## Business and Application Logic Mapping

Cobalt manually reviews the application's business logic, workflows, and access controls. We analyze the following security aspects:

- User Roles & Access Control Mapping: Reviewing Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) models  
- Business Logic Abuse Scenarios: Identifying vulnerabilities that could bypass intended workflows  
- Session & Authentication Mechanisms: Evaluating session management, Multi-Factor Authentication (MFA) protections, fallback authentication mechanisms, and defenses against hybrid credential stuffing and password spray attacks  
- Client-Side vs. Server-Side Controls: Ensuring proper enforcement on the server-side  
- Threat Model Review: Assessing whether the application has documented threat models covering critical flows such as authentication, authorization, payments, and sensitive data access  
- Insecure Design Assessment: Identifying architectural and design-level weaknesses, including missing security controls that were never built into the application (per ASVS V1 and OWASP SAMM)

{{% alert title="Tools" color="primary" %}} 
Cobalt pentesters may use application logic analysis tools such as:

- Burp Suite Pro/Community  
- OWASP Zed Attack Proxy {{% /alert %}}

## Automated Web Crawling and Web Scanner Configuration

Automated scans are fine-tuned to maximize detection accuracy while minimizing noise. This phase includes:

- Identifying unauthenticated and authenticated endpoints  
- Enumerating input fields, hidden parameters, and dynamic pages  
- Ensuring all sections of the application are included in security scans  
- Identifying exposed CI/CD metadata, artifact endpoints, or Software Bill of Materials (SBOM) disclosures

{{% alert title="Tools" color="primary" %}} 
Cobalt pentesters may use web crawling and scanning tools such as:

- Burp Suite Pro/Community  
- Dirb {{% /alert %}}

## Vulnerability Scanning

### Unauthenticated Scanning

Cobalt's pentesters assess the application from the perspective of an external, unauthenticated attacker. This phase helps identify vulnerabilities that are exposed to the public or prior to login. In this part of the pentest process, our pentesters:

- Perform automated scanning of publicly accessible endpoints and services  
- Enumerate available routes, APIs, and metadata (e.g., error messages, headers)  
- Test for improper access controls on restricted resources  
- Identify information disclosure through verbose errors, misconfigured headers, or open directories  
- Check for security misconfiguration, including: missing or insecure HTTP security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy), default credentials on accounts or services, exposed administrative panels, cloud storage misconfigurations (e.g., open S3 buckets), enabled debug or testing endpoints, and static secrets or API keys embedded in configurations or source code  
- Assess login functionality for brute-force resilience, enumeration vectors, and insecure implementations  
- Check for exposed administrative panels, forgotten endpoints, or outdated components  
- Test for sensitive information disclosure through improperly handled error conditions, including stack traces, database error messages, version disclosures, and application state leakage in error responses

### Authenticated Scanning

Cobalt's pentesters leverage authenticated sessions to identify security risks that require privileged access. This phase includes:

- Automated scanning using authenticated user sessions  
- Verification of session management flaws, including: session fixation, JWT `aud`/`iss`/scope claim validation, token lifetime enforcement, failure to invalidate tokens on logout, and session identifier exposure in URLs  
- Manual business logic validation and anti-automation testing  
- Identification of weak authentication mechanisms  
- Multi-Factor Authentication (MFA) bypass testing and assessment of insecure fallback mechanisms when MFA is unavailable  
- Testing for insecure deserialization and data integrity failures within authenticated workflows (e.g., tampered serialized session objects, unsigned update payloads, unverified data from untrusted sources)

{{% alert title="Tools" color="primary" %}} Cobalt pentesters may use vulnerability scanning tools such as:

- WPScan  
- SQLmap  
- Nuclei  
- Burp Suite Pro/Community {{% /alert %}}

## Manual Web Vulnerability Tests and Exploit Reviews

This phase focuses on manual security testing to uncover vulnerabilities that automated scanners miss. It includes:

- Injection Attacks: SQL Injection, NoSQL Injection, OS Command Injection, XSS, LDAP Injection, ORM/HQL Injection, Expression Language (EL/OGNL) Injection, SSRF, and where the application integrates AI/LLM components.    
  - **Prompt Injection Testing:** *Available only with pre-coordination.* Direct prompt injection is excluded from the baseline assessment and requires advance authorization, as the backend model may be self-hosted, third-party-provided, or multi-tenant, meaning it could fall outside the client's authority to authorize or be governed by separate provider terms. Downstream handling of model output (XSS, SSRF, unsafe tool calls) remains in scope. 


- Broken Access Controls & IDOR Testing (OWASP Top 10 2025: \#1 Risk \- ASVS V8 Authorization), including Cross-Site Request Forgery (CSRF, CWE-352), path traversal, and privilege escalation  

- Session Management Attacks (Session Hijacking, Token Replay, Cookie Tampering)  

- Cryptographic Failure Testing: Deprecated or weak algorithms (MD5, SHA1, CBC mode, RSA without OAEP), improper key management and hardcoded keys, weak or predictable PRNGs (CWE-338, CWE-331), missing TLS enforcement (TLS 1.2+ with forward secrecy required), insecure password storage, and Post-Quantum Cryptography (PQC) readiness assessment for high-risk systems (per ASVS V11/V12 and ENISA PQC roadmap)  

- Modern Web App Attacks (DOM-based XSS, CSP Bypasses, Prototype Pollution)  

- Microservices Security (CORS misconfigurations, unauthorized API interactions)  

- Software Supply Chain Security: Identifying outdated, unmaintained, or vulnerable third-party components (client-side and server-side); validating SBOM completeness; assessing CI/CD pipeline security controls, including separation of duties, signed artifact enforcement, environment-scoped secrets, and tamper-evident build logs  
- Insecure Design Testing: Assessing architectural weaknesses, including missing rate limiting, absent anti-automation controls, improper trust boundary definitions, lack of tenant segregation, undefined failure states in critical business flows, and client-side enforcement of server-side security (per ASVS V1 and OWASP SAMM)  
- Security Logging & Alerting Assessment: Verifying that security-relevant events (login failures, access control violations, high-value transactions) are logged with sufficient context; confirming log integrity protections are in place; validating that active attack patterns (brute force, scanning) trigger real-time or near-real-time alerts; and confirming that penetration test activity itself generates expected alert events (per ASVS V16)  

- Mishandling of Exceptional Conditions Testing: Testing application behavior under abnormal and error conditions including malformed/missing parameters, resource exhaustion scenarios, mid-transaction network disruptions, and improper exception propagation. Specifically testing for "fail open" vulnerabilities (CWE-636), sensitive data exposure in error messages (CWE-209), uncaught exceptions revealing system state, and incomplete transaction rollback on failure (per ASVS V16.5)  

- Business Logic  

- Testing the web server for external network vulnerabilities. **Note: This is not a full external network penetration test.**

{{% alert title="Tools" color="primary" %}} Cobalt pentesters use multiple testing and exploitation tools, such as:

- Burp Suite Pro/Community (Intruder & Repeater)  
- OWASP ZAP  
- Dirble  
- JWT\_Tool (for JWT manipulation testing)  
- Corsy (for CORS misconfiguration testing)  
- retire.js (for identifying vulnerable JavaScript dependencies)  
- OWASP Dependency-Check (for server-side component vulnerability identification) {{% /alert %}}

## Advanced Security Testing for Modern Web Apps

With the rise of Single Page Applications (SPAs), microservices, cloud-based applications, and AI/LLM-integrated systems, Cobalt performs additional security tests, including:

- Client-Side JavaScript Security Audits (Detection of vulnerable dependencies, inline script injection risks)  
- WebSockets & Real-Time Communication Testing  
- Cross-Origin Resource Sharing (CORS) Exploitability Checks  
- Post-Quantum Cryptography (PQC) Readiness Assessment: For high-risk applications, evaluating whether quantum-vulnerable algorithms (e.g., RSA, ECDH for key exchange) are in use and assessing readiness for migration to NIST-standardized post-quantum algorithms (per ASVS V11/V12 and ENISA PQC roadmap)  
- CI/CD Pipeline & Software Supply Chain Security Review: Assessing build pipeline integrity controls, artifact signing and provenance validation, environment-scoped secret management, separation of duties in deployment workflows, and developer tooling security  
- LLM/AI Component Security Testing (where applicable): Testing for prompt injection, insecure output handling, excessive agency, and data leakage through AI or LLM-integrated application features  
  - Prompt injection/LLM manipulation testing: *Available only with pre-coordination.* Not included in baseline web application assessment due to variability in model hosting (self-hosted vs. third-party API vs. shared tenant) and the associated authorization and ToS considerations. 

## Ongoing Security Assessments and Continuous Testing

Cobalt provides real-time security feedback throughout the engagement, enabling:

- Collaboration with developers and security teams  
- Ongoing risk analysis & vulnerability triaging  
- Proactive remediation guidance  
- Guidance on continuous supply chain monitoring: CVE/NVD/OSV feed subscriptions, SBOM maintenance, staged rollout practices, and dependency update processes throughout the application lifecycle

## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}  
