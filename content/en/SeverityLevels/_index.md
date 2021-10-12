---
title: "Severity Levels"
linkTitle: "Severity Levels"
weight: 400
description: >
  Pentest report severity levels.
---

{{% pageinfo %}}
When our pentesters find vulnerabilities, they also identify severity
levels, to help you prioritize them.
{{% /pageinfo %}}

As noted by [OWASP](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology), 
while it is important to discover vulnerabilities, it's also important to understand
the associated risk to the business.

We follow the standard risk model described by OWASP, where:

```
Risk = Likelihood * Impact
```

In this case, the risk rating is based on the following factors:

- Likelihood: Specifies the probability of exploiting the [finding](../getting-started/glossary/#finding).
May include factors such as:

  - Skill required for an attacker to exploit a [vulnerability](../getting-started/glossary/#vulnerability)
  - Availability of documented exploits
  - Ease of exploiting the vulnerability

<br>

- Impact: Depends on the effect on technical and business operations. May include:

  - Loss of confidentiality
  - Problems with data integrity
  - Reduced availability of data or systems
  - Potential losses of money or reputation

When our pentesters find vulnerabilities, they use the standard OWASP risk model
and then classify them into one of the following levels:

| Category      | Score | Description                                                                                                                                                     |
|:-------------|:------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Critical      | 25    | Includes vulnerabilities such as administrative access, remote code execution, financial theft, and more.                                                                 |
| High          | 16-24 | Impacts the security of your application/platform/hardware, including supported systems. Includes high probability vulnerabilities with a high business impact. |
| Medium        | 5-15  | Includes vulnerabilities that are: <br>  * Medium risk, medium impact. <br>  * Low risk, high impact. <br>  * High risk, low impact. <br>                          |
| Low           | 2-4   | Specifies minimal impact vulnerabilities. Rare.
| Informational | 1     | Notes vulnerabilities of minimal risk to your business.                                                                                                     |
