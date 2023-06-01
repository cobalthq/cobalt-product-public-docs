---
title: "Mobile Application Penetration Testing Methodology"
linkTitle: "Mobile Methodologies"
weight: 110
description: >
  Review Cobalt pentest methodologies for mobile applications.
aliases:
    - /getting-started/pentest-objectives/methodologies/mobile/
    - /platform-deep-dive/pentests/pentest-process/methodologies/mobile/
---

{{% pageinfo %}}
Mobile application penetration testing is a process in which a tester uses simulated attacks to identify potential security vulnerabilities in a mobile application.
{{% /pageinfo %}}

## Methodology Details

We follow an industry-standard methodology primarily based on the OWASP Mobile Application Security
Verification Standard (MASVS) and Testing Guide (MASTG). Learn more about the [OWASP Mobile Application Security (MAS)](https://mas.owasp.org/).

![Mobile application penetration testing methodology process](/methodologies/Mobile-application-penetration-test-methodology-process.png "Mobile application penetration testing methodology process")

Penetration testing of a mobile application includes the following stages:

- [Target scope reconnaissance](#target-scope-reconnaissance)
- [Automated and manual testing](#automated-and-manual-testing)
- [Exploit discovered vulnerabilities](#exploit-discovered-vulnerabilities)
- [Report, triage, and retest](#report-triage-and-retest)

The Cobalt team of pentesters do not need access to the underlying mobile application source code,
unless you specify it as a requirement.

We look at application logic by working with your app. To support our pentesters, share the .ipa (iOS) and/or the .apk (Android) files when you [Define Your Assets](/getting-started/assets/). You may also share this information in the private Slack channel for your pentest.

### Target Scope Reconnaissance

Based on the Pentest Brief prepared by the client, Cobalt pentesters search for
information about the targets and investigate the scope. This information
includes:

- Understanding workflows
- Understanding business logic
- Mapping the attack surface of the application

Pentesters then confirm that they can:

- Reach and scan the targets
- Test the functionality of the application

### Automated and Manual Testing

Our pentesters use a range of manual techniques and automated tools to ensure
proper coverage. They analyze your mobile app dynamically. They also
assess the archive as well as the local file.

Our pentesters focus on:

- Communication channels
- Traffic that the application exchanges with external endpoints
- Inter-Process Communication (IPC)

Our pentesters may also reverse engineer the application for insight and try to access sensitive data.

For backend tests, they use [API Pentest Methodologies](/methodologies/api-methodologies/).

Our pentesters may use tools such as:

- MobSF
- Frida
- Apktool
- Dex2Jar
- Objection

### Exploit Discovered Vulnerabilities

When our pentesters discover a vulnerability, they use various techniques to measure the impact on the following aspects of your data:

- Confidentiality
- Integrity
- Availability

Our pentesters use various privilege escalation methods to impersonate different users, possibly
to impact the security posture of the application.

### Report, Triage, and Retest

Pentesters report and triage all findings as they work. We share details through our online platform. 
We encourage you to address critical findings as we discover them. Our pentesters can retest findings, based
on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).

As our pentesters document findings, they provide:

- Detailed steps to fix or remediate findings
- Advice on what you can do to improve your security

## Additional Requirements

{{% additional-requirements %}}
