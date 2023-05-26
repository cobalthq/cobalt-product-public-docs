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

We use the penetration testing methodologies listed on the page. If you want to know more
about each methodology, navigate to the page associated with your asset.

## API

The Cobalt team of pentesters do not need access to the underlying web application source code,
unless you specify it as a requirement.

When you set up a pentest for an API asset in the UI, you'll see the following in the
**Objectives** text box:

```
Coverage of OWASP top 10, ASVS and application logic.
```

Learn more about these objectives from OWASP:

- [OWASP API Security Top 10](https://owasp.org/www-project-api-security)
- [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard)

We look at application logic by working with your app.

### Methodology Details

We base our methodology primarily on the OWASP Application Security Verification Standard (ASVS)
and Testing Guide. Our team takes the following steps to ensure full coverage:

Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key for more information on each step.

{{% expand "Target scope reconnaissance" %}}
</br>

Our pentesters start by collecting the information that they need about your API. This information includes:

- API URLs
- API documentation
- The target environment
- Your business logic
- Critical workflows
- Roles and permissions available within your app

Our pentesters also confirm that they can access and run documented commands on
your API. If you require access tokens or API keys to use your API, our
pentesters may need accounts on your system, with instructions, to set that up.

{{% api-scan-tools %}}

{{% /expand %}}

{{% expand "Business and application logic mapping" %}}
</br>

Our pentesters manually examine the target application to map its:

- Business functions
- Workflows
- The underlying processes

Our pentesters also build a matrix of access controls within the app based on:

- A list of available roles
- The actions supported for each role

Our pentesters use this matrix to create additional security tests to:

- Determine how well these controls are enforced
- Identify if someone can bypass these controls

{{% api-scan-tools-part %}}

{{% /expand %}}

{{% expand "Automated web crawling and web scanner configuration tweaking" %}}
</br>

Our pentesters may use commercial and open source security tools to assess
your API. They ensure that appropriate tools cover the whole scope of the app.
They also make sure to cover every segment for security issues.

They may have to manually tweak their tools to ensure optimized performance. 

In addition, our pentesters perform automated crawls to identify:

- Pages available to unauthenticated users
- The directory tree of your website

{{% api-scan-tools %}}

{{% /expand %}}

{{% expand "Authenticated vulnerability scanning and manual crawling" %}}
</br>

Our pentesters run several tests in this area, including:

- Automated crawling tests, followed by manual verification
- Additional manual crawling tests for better coverage:
  - Includes application areas protected by authentication
  - Where applicable, our pentesters run automated scans with the authenticated session

Our pentesters use extreme caution to minimize impact on the targeted system.

{{% api-scan-tools-part %}}
- Nikto
- Nessus

{{% /expand %}}

{{% expand "Manual API vulnerability testing and exploitation" %}}
</br>

Cobalt pentesters use manual testing tools to identify and analyze the following aspects of the API asset:

- Functionality
- Workflows
- Business logic
- Vulnerabilities in deployment and implementation

The assessment identifies known vulnerabilities, including those listed in the:

- [OWASP API Top 10](https://owasp.org/www-project-api-security/)
- [CVE](https://cve.mitre.org/)

Our pentesters also:

- Run injection attacks that probe the robustness of server-validation routines
- Look for session management flaws that may allow user impersonation
- Investigate flaws in access control that expose data or enable users to gain elevated privileges

Beyond these tests, our pentesters also:

- Test how well the design and implementation protects data against unauthorized access or disclosure
- Review how the endpoints validate input
- Review how the API handles access tokens
- Review how the API responds to error conditions or invalid states
- Consider how resistant the API is to accidental misuse or unintended mistakes by a user that would lead to security issues

For microservices, our pentesters focus on the interactions between different systems. Specifically, we examine:

- Access control management
- Cross-Origin Resource Sharing (CORS) implementation
- Vulnerabilities outlined in the [OWASP API Security Project](https://owasp.org/www-project-api-security/)

Our pentesters identify the risk associated with each finding, based on:

- A demonstration of the exploit
- An evaluation of the impact on the asset, with respect to:
  - Business functionality
  - Data
  - Users

When our pentesters "exploit" a finding, they demonstrate the presence of the vulnerability
while minimizing potential adverse impact to the application, its data, and underlying systems.  

{{% api-scan-tools-part %}}
- sqlmap  
- Postman  

{{% /expand %}}

{{% expand "Ongoing assessments" %}}
</br>

Our pentesters report their findings, in real time, through the Cobalt platform.
They also:

- Assess all risks
- Recommend steps for remediation

You're welcome to communicate with our pentesters for each of their findings.

{{% /expand %}}

{{% expand "Report, triage, and retest" %}}
</br>

{{% report-triage-retest %}}

{{% /expand %}}

![API pentest flow](/gsg/APIPentest.png)

## Additional Requirements

{{% additional-requirements %}}
