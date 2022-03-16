---
title: "Severity Levels"
linkTitle: "Severity Levels"
weight: 400
description: >
  Pentest report severity levels.
---

{{% pageinfo %}}
When our pentesters find vulnerabilities, they also identify severity
levels.
{{% /pageinfo %}}

As noted by [OWASP](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology), 
while you need to find vulnerabilities, you should also understand
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

The OWASP Risk Rating Methodology specifies High, Medium, and Low levels. We've 
added Critical and Informational levels to help you prioritize our findings.

When our pentesters find vulnerabilities, they use the standard OWASP risk model
and then classify them into one of the following levels:

| Category      | Score | Description                                                                                                                                                     |
|:-------------|:------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Critical      | 25    | Includes vulnerabilities that require immediate attention.                                                                 |
| High          | 16-24 | Impacts the security of your application/platform/hardware, including supported systems. Includes high probability vulnerabilities with a high business impact. |
| Medium        | 5-15  | Includes vulnerabilities that are: medium risk, medium impact; low risk, high impact; high risk, low impact.                         |
| Low           | 2-4   | Specifies common vulnerabilities with minimal impact.
| Informational | 1     | Notes vulnerabilities of minimal risk to your business.                                                                                                     |
