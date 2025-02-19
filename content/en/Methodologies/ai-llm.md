---
title: "AI/LLM Pentest Methodologies"
linkTitle: "AI/LLM Methodologies"
weight: 269
description: >
  Review Cobalt pentest methodologies for an AI/LLM application.
---

Cobalt follows an industry-standard methodology based on the [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/). 

Cobalt offers two levels of Artificial Intelligence (AI) and Large Language Model (LLM) pentesting for Web and Web + API Assets.

### Prompt Injection (+4 credits)
Cobalt focuses on testing AI systems security against prompt injection attacks. These attacks manipulate the AI’s input to generate malicious output, which can compromise the system’s integrity and confidentiality. Prompt Injection AI/LLM pentests are run as an Agile pentest with an [automated report](/platform-deep-dive/pentests/reports/#pentest-report-types).

### Full Coverage LLM (+16 credits)
Cobalt tests LLMs against the [Open Web Application Security Project (OWASP) Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/). Cobalt checks if AI applications are protected against unauthorized access, data breaches, and disruptions. This is run as a Comprehensive pentest for full coverage of the LLM, and its web and API connections, which includes a final pentest analysis and report.

For a Full Coverage LLM, Cobalt performs the following steps to ensure complete coverage:
- [Targeted Scope Initial Reconnaissance](/methodologies/ai-llm/#targeted-scope-initial-reconnaissance) 
- [Application Services](/methodologies/ai-llm/#application-services)
- [Training Dataset & Processing](/methodologies/ai-llm/#training-dataset--processing)
- [LLM Production Services](/methodologies/ai-llm/#llm-production-services)
- [Plugins](/methodologies/ai-llm/#plugins)
- [Downstream Services](/methodologies/ai-llm/#downstream-services)


### Targeted Scope Initial Reconnaissance
Cobalt examines the documentation and scope provided in the brief. Using various tools, Cobalt then confirms the presence of different sets of components and technologies within the environment. 

### Application Services
Cobalt examines the application for any overreliance, sensitive information exposure, insecure output handling, or other sensitive areas that could impact downstream services. Cobalt will explore the application to identify if the following items are present and attainable: 
- Information leakage
- Exposure
- Filter bypass
LLMs need to be monitored, validated, and secure. 

Cobalt will attempt to imply misleading information and insecure code or software upon the LLM. Additionally, Cobalt will check output handling to identify cases of Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Server-Side Request Forgery (SSRF), privilege escalation, and remote code execution on backend systems.

### Training Dataset & Processing
Cobalt tests for malicious data injection and content injection that could impact the LLM’s training data, which may lead to reputational damage and exploitation. Cobalt will review if vetting and input filters are implemented and if attackers could inject malicious or falsified data into the model data. Cobalt will also check if the training dataset is prone to unintentional exposure and leakage.

### LLM Production Services
Cobalt interacts with the LLM to identify any exploitable prompt injections and Model Denial of Service (DoS) misconfigurations. Cobalt will explore direct and indirect prompt injections to achieve unauthorized access, exfiltration of data, or documentation of prompt replays. Additionally, Cobalt will check for input validation, rate limits, and if resource monitoring is in place to thwart DoS attacks.

Cobalt will also review LLM functionality and permissions to ensure that excessive agency is not present and that the model has access control and network restrictions to maintain confidentiality, integrity and availability.

### Plugins 
Cobalt tests any installed plugins for exploitations that pertain to overreliance, sensitive information exposure, or insecure output handling, as with the application services portion of testing. Cobalt will also review insecure plugin design and excessive agency. Plugins are prone to URL manipulation, unauthorized access, and repository takeover. Plugins may have disproportionate access to critical systems and information that an attacker could exploit. 

### Downstream Services
Cobalt will review services to confirm that library exploitation, plugin scams, compromised packages, and outdated or depreciated third-party components with documented vulnerabilities have not impacted training data. Cobalt will also review if any configurations are in place for human approval and if authorization is implemented in downstream systems.

### Additional Methodology Information:
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

{{% alert title="Tools" color="primary" %}}
Cobalt may use tools such as:

- Adversarial Robustness Toolbox (ART)
- CleverHans
- Foolbox
- Burp Suite / OWASP ZAP
- AI Fairness 360 / Fairlearn

{{% /alert %}}

[Learn more](/getting-started/planning/#aillm-pentesting) about how to scope an AI/LLM pentest.
