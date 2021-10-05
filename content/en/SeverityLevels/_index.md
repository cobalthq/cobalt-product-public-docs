---
title: "Severity Levels"
linkTitle: "Severity Levels"
weight: 400
description: >
  Pentest report severity levels.
---

{{% pageinfo %}}
When our pentesters find vulnerabilities, they should also identify severity
levels, to help you prioritize them.
{{% /pageinfo %}}

As noted by [OWASP](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology), 
while it is important to discover vulnerabilities, it's also important to understand
the associated risk to the business.

We follow the standard risk model described by OWASP, where:

```
Risk = Likelihood * Impact
```

When our pentesters find vulnerabilities, they use the standard OWASP risk model
and then classify them into one of the following levels:

| Category      | Score | Description                                                                                                                                                     |
|:-------------|:------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Critical      | 25    | Includes vulnerabilities such as administrative access, remote code execution, financial theft, and more.                                                                 |
| High          | 16-24 | Impacts the security of your application/platform/hardware, including supported systems. Includes high probability vulnerabilities with a high business impact. |
| Medium        | 5-15  | Includes vulnerabilities that are: <br>  * Medium risk, medium impact. <br>  * Low risk, high impact. <br>  * High risk, low impact. <br>                          |
| Low           | 2-4   | Specifies minimal impact vulnerabilities. Such vulnerabilities do not appear, except in an unusual combination of circumstances.                                                                       |
| Informational | 1     | Notes vulnerabilities of minimal risk to your business. Examples: Captchas, TODO.                                                                                                     |

{{% alert title="Note" color="note" %}}
We've set up our severity levels to more closely match standards such as the
[Common Vulnerability Scoring System](https://www.first.org/cvss/specification-document#Qualitative-Severity-Rating-Scale). This varies from standard practice with software logging systems.
{{% /alert %}}

