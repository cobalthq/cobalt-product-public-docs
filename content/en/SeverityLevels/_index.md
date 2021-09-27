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
while it is important to discover vulnerabilities, you also need to estimate the
the associated risk to the business.

When our pentesters find vulnerabilities, they classify them into one of the
following levels:

| Category      | Score | Description                                                                                                                                                     |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Critical      | 25    | Includes vulnerabilities such as admin access, remote code execution, financial theft, and more.                                                                 |
| High          | 16-24 | Impacts the security of your app/platform/hardware, including supported systems. Includes high probability vulnerabilities with at least a high business impact. |
| Medium        | 5-15  | Includes vulnerabilities that are: <br>  * Medium risk, medium impact. <br>  * Low risk, high impact. <br>  * High risk, low impact. <br>                          |
| Low           | 2-4   | Limited to minimal impact vulnerabilities. Requires unusual combination of circumstances.                                                                       |
| Informational | 1     | Does not not impact your business. Examples: Captchas, TODO.                                                                                                     |
