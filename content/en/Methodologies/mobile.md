---
title: "Mobile Pentest Methodologies"
linkTitle: "Mobile Methodologies"
weight: 110
description: >
  Review methodologies for Mobile Apps.
aliases:
    - /getting-started/pentest-objectives/methodologies/mobile/
    - /platform-deep-dive/pentests/pentest-process/methodologies/mobile/
---

{{% pageinfo %}}
{{% pentest-rigor %}}
{{% /pageinfo %}}

We use the penetration testing objectives listed on this page. If you want to know more
about each methodology, navigate to the [Pentest Methodologies](..) page associated with your asset.

## Mobile

The Cobalt team of pentesters do not need access to the underlying mobile application source code,
unless you specify it as a requirement.

When you set up a pentest for a mobile asset in the UI, you'll see the following in the
**Objectives** text box:

```
Coverage of OWASP top 10, ASVS and application logic.
```

Learn more about these objectives from OWASP:

- [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-top-10)
- [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard)

### Share Mobile App Files

We look at application logic by working with your app. To support our pentesters, share the .ipa (iOS) and/or the .apk (Android) 
files when you [Define Your Assets](/getting-started/assets/). You may also share this information in the private Slack channel
for your pentest.

### Methodology Details

We follow an industry standard methodology primarily based on the OWASP Application Security
Verification Standard (ASVS) and Testing Guide. Our team takes the following steps to ensure
full coverage:

Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key for more information on each step.

{{% expand "Target scope reconnaissance" %}}
</br>
Based on the Pentest Brief prepared by the client, Cobalt pentesters search for
information about the targets and investigate the scope. This information
includes:

- Understanding workflows
- Understanding business logic
- Mapping the attack surface of the application

Pentesters then confirm that they can:

- Reach and scan the targets
- Test the functionality of the application

{{% mobile-scan-tools %}}

{{% /expand %}}

{{% expand "Automated and manual testing" %}}
</br>

Our pentesters use a range of manual techniques and automated tools to ensure
proper coverage. They analyze your mobile app dynamically. They also
assess the archive as well as the local file.

Our pentesters focus on:

- Communication channels
- Traffic that the application exchanges with external endpoints
- Inter-Process Communication (IPC)

Our pentesters may also reverse engineer the application for insight and try to access sensitive data.

For backend tests, they use [API Pentest Methodologies](/methodologies/api-methodologies/).

{{% mobile-scan-tools %}}

{{% /expand %}}

{{% expand "Exploit discovered vulnerabilities" %}}
</br>

When our pentesters discover a vulnerability, they use various techniques to measure the impact on the following aspects of your data:

- Confidentiality
- Integrity
- Availability

Our pentesters use various privilege escalation methods to impersonate different users, possibly
to impact the security posture of the application.
 
{{% mobile-scan-tools %}}

{{% /expand %}}

{{% expand "Report, triage, and retest" %}}
</br>

Pentesters report and triage all findings as they work. We share details through our online platform. 
We encourage you to address critical findings as we discover them. Our pentesters can retest findings, based
on your [PtaaS tier](/platform-deep-dive/credits/ptaas-tiers/).

As our pentesters document findings, they provide:

- Detailed steps to fix or remediate findings
- Advice on what you can do to improve your security

{{% /expand %}}

![Mobile pentest flow](/gsg/MobilePentest.png)

## Additional Requirements

{{% additional-requirements %}}