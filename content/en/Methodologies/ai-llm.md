---
title: "AI/LLM Pentest Methodologies"
linkTitle: "AI/LLM Methodologies"
weight: 269
description: >
  Review Cobalt pentest methodologies for an AI/LLM application.
---

At Cobalt, we follow an industry-standard methodology based on the [OWASP Top 10 for Large Language Model Applications]([https://genai.owasp.org/llm-top-10/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)). 

Cobalt offers two levels of Artificial Intelligence (AI) and Large Language Model (LLM) pentesting of Web and Web + API Assets.

- [LLM/AI Prompt Injection](#llm-prompt-injection) (+4 credits)
Focus on testing the security of your AI systems against prompt injection attacks. These attacks manipulate the AI’s input to generate malicious output, which can compromise the system’s integrity and confidentiality. Prompt Injection AI/LLM pentests are run as an Agile pentest with an [automated report](/platform-deep-dive/pentests/reports/#pentest-report-types).

- [Full Coverage LLM](#llm) (+16 credits)
Test your LLMs against the [Open Web Application Security Project (OWASP) Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/). Our tests check whether your AI applications are protected against unauthorized access, data breaches, and disruptions. For full coverage of your LLM and its web and API connections, this is run as a Comprehensive pentest, which includes a final pentest analysis and report.

For a Full Coverage LLM, we perform the following steps to ensure complete coverage:

### Targeted scope initial reconnaissance
Testers examine the provided documentation and scope provided in the brief. Using various tools, testers then confirm the presence of different sets of components and technologies within the environment. 

### Application Services
Cobalt examines the application for any Overreliance, Sensitive information exposure, Insecure output handling, or other sensitive areas that can impact downstream services. The testers will explore the application to identify if the following items are present and attainable: information leakage, exposure, and filter bypass. LLMs need to be monitored, validated, and secure. 

Testers will attempt to imply misleading information and insecure code/software upon the LLM. Finally, testers will check output handling to identify cases of Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and Server-Side Request Forgery (SSRF), privilege escalation, or remote code execution on backend systems.

### Training Dataset & Processing
Cobalt also tests for malicious data injection and content injection that can impact the LLM’s training data, which may lead to reputational damage and exploitation. Cobalt will review that vetting and input filters are implemented and if attackers can inject malicious or falsified data into the model data. Testers will also check whether the training dataset is prone to unintentional exposure and leakage.

### LLM Production Services
Cobalt testers also interact with the LLM to identify any exploitable prompt injections and Model Denial of Service (DoS) misconfigurations. Cobalt testers will explore direct and indirect prompt injections to achieve unauthorized access, exfiltration of data, or documentation of prompt replays. Additionally, testers will check for input validation, rate limits, and if resource monitoring is in place to thwart denial of service attacks.

Cobalt will also review LLM functionality and permissions to ensure that excessive agency is not present and that the model has access control and network restrictions to maintain confidentiality, integrity and availability.

### Plugins 
Cobalt also tests any installed plugins for exploitations that pertain to overreliance, sensitive information exposure, or insecure output handling, as with the application services portion of testing. Additionally, Cobalt will review insecure plugin design and excessive agency. Plugins are prone to URL manipulation, unauthorized access, and repository takeover. Plugins may have disproportionate access to critical systems and information that can be exploited. 

### Downstream Services
Cobalt will review services to confirm that library exploitation, plugin scams, compromised packages, and outdated or depreciated third-party components with documented vulnerabilities have not impacted training data. Additionally, testers will review whether any configurations are in place for human approval and if authorization is implemented in downstream systems.

## Additional Methodology Information:
The [2025 OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) identifies the following vulnerabilities:

- **LLM01**: Prompt Injection
- **LLM02**: Sensitive Information Disclosure
- **LLM03**: Supply Chain
- **LLM04**: Data and Model Poisoning
- **LLM05**: Improper Output Handling 
- **LLM06**: Excessive Agency
- **LLM07**: System Prompt Leakage
- **LLM08**: Vector and Embedding Weaknesses
- **LLM09**: Misinformation
- **LLM10**: Unbounded Consumption


[Learn more](/getting-started/planning/#aillm-pentesting) about how to scope an AI/LLM pentest.
