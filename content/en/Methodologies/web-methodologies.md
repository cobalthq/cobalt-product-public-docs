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
Web application penetration testing is a process in which a tester uses simulated attacks to identify potential security vulnerabilities in a web application.
{{% /pageinfo %}}

We follow an industry-standard methodology primarily based on the OWASP Application Security Verification Standard (ASVS) and Testing Guide. In support, we use a number of manual and automated tools, described in the following steps, to ensure full coverage.

![External internal network pentest methodology process](/methodologies/external-internal-network-pentest-methodology-process.png "External internal network pentest methodology process")

Penetration testing of a web application includes the following stages:

- [Target scope reconnaissance](#target-scope-reconnaissance)
- [Business and application logic mapping](#business-and-application-logic-mapping)
- [Automated web crawling and web scanner configuration tweaking](#automated-web-crawling-and-web-scanner-configuration-tweakings)
- [Authenticated vulnerability scanning / Manual crawling](#authenticated-vulnerability-scanning--manual-crawling)
- [Manual web vulnerability tests / exploit reviews / microservices](#manual-web-vulnerability-tests--exploit-reviews--microservices)
- [Ongoing assessments](#ongoing-assessments)
- [Reporting, triaging, and retesting](#reporting-triaging-and-retesting)

{{% alert title="Note" color="primary" %}}
{{% various-tools %}}
{{% /alert %}}

Cobalt pentesters do not need access to the source code of your application, unless you specify it as a requirement. We look at the application logic by working with your app.

Tests of a Web asset include tests of APIs used to populate content on that asset. If you have additional APIs, you may consider setting up:

- A combined Web + API test
- A separate test for APIs

## Target Scope Reconnaissance

Based on the pentest brief prepared by the client, Cobalt pentesters search for
information about the targets and investigate the scope. This information
includes:

- Web application URLs
- Descriptions of application logic
- Functions critical to the business

Pentesters then confirm that they can:

- Reach and scan the targets
- Test the functionality of the application

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use reconnaissance scanning tools such as:

- Recon-ng
- Dnscan
- Dirble
- Aquatone
- Masscan
{{% /alert %}}

## Business and Application Logic Mapping

Pentesters manually examine the target applications to map:

- Business functions
- Workflows
- Underlying processes

They also build a matrix of the access controls within the application based on
supported roles and actions. Our pentesters use this matrix to plan further security
tests, which determines:

- How well these controls are enforced
- How an attacker can bypass these controls

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use application logic analysis tools such as:

- Burp Suite Pro/Community
- Postman
- OWASP Zed Attack Proxy
{{% /alert %}}

## Automated Web Crawling and Web Scanner Configuration Tweakings

Our pentesters use both commercial and freeware security tools to assess the targeted
application. They'll modify these tools as needed, to make sure that scanning can find
security issues on every segment of your asset, and the application as a whole.

In addition, our pentesters run automated crawls to:

- Identify any pages are available to unauthenticated users
- Determine the full site tree

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use web crawling and scanning tools such as:

- Nmap
- Burp Suite Pro/Community
- Nikto
{{% /alert %}}

## Authenticated Vulnerability Scanning / Manual Crawling

In this part of the pentest process, our pentesters:

- Use automated tools for web application crawling
  - Verify the results manually
- Run manual crawling tests for better coverage
  - Verify authentication on protected areas of the application

With automated scanning, our pentesters:

- Assess the application using the authenticated sessions where applicable

Our pentesters use extreme caution to minimize impact on the targeted system.

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use vulnerability scanning tools such as:

- WPScan
- Burp Suite Pro/Community
- sqlmap
{{% /alert %}}

## Manual Web Vulnerability Tests / Exploit Reviews / Microservices

Cobalt pentesters use tool-assisted manual tests to identify and analyze the
following parts of the app for vulnerabilities:

- Functionality
- Business logic
- Deployment

The assessment identifies published vulnerabilities, including those listed in the 

- OWASP Top 10
- CVE reports or tracked by CVE entries

Our pentesters also consider the workflows and business logic into consideration
when they identify vulnerabilities in the application.

The assessment includes tests for vulnerabilities such as:

- Injection attacks that probe the robustness of server-validation routines
- Session management flaws that could allow user impersonation
- Flaws in access control that expose data or enable users to gain elevated privileges

If the application includes microservices, our pentesters focus on interactions
between different systems. They examine the implementation of:

- Access control management
- Cross-Origin Resource Sharing (CORS)

We thoroughly examine:

- Access control management
  - Cross-Origin Resource Sharing (CORS) implementation
- Vulnerabilities outlined in the OWASP [API Security Project](https://owasp.org/www-project-api-security/)

For each finding, pentesters determine the risk associated with each issue by:

- Demonstrating how the issue could be exploited
- Evaluating its impact within the context of the business function, data, and
  users of the asset
- Setting up a Proof-of-Concept exploitation to:
  - Demonstrate the presence of the vulnerability
  - Minimize potential adverse impact to the application, its data, and its underlying systems

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters use multiple testing and exploitation tools, such as:

- Burp Suite Pro/Community
- OWASP ZAP
- Dirble
- Nuclei
{{% /alert %}}

## Ongoing Assessments

Our pentesters report their findings, in real time, through the Cobalt platform.
They also:

- Assess all risks
- Recommend steps for remediation

You're welcome to communicate with our pentesters for each of their findings.

## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}
