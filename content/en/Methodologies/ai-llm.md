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
For a full coverage AI/LLM pentest, Cobalt testers will focus on the AI/LLM-specific components of an application. As part of the pentest, Cobalt testers will also test web and/or API components that directly interact with your LLM, using the relevant OWASP Top 10 guidelines. 

Cobalt testers will use simulated attacks and analytical techniques to identify potential security vulnerabilities specific to applications leveraging Large Language Models.

For a Full Coverage LLM, Cobalt performs the following steps to ensure complete coverage:
- [Application Reconnaissance and Scope Definition](/methodologies/ai-llm/#application-reconnaissance-and-scope-definition) 
- [Interactive Probing and System Understanding](/methodologies/ai-llm/#interactive-probing-and-system-understanding)
- [Vulnerability Identification and Exploitation](/methodologies/ai-llm/#vulnerability-identification-and-exploitation)
- [Reporting, triaging, and retesting](/methodologies/ai-llm/#reporting-triaging-and-retesting)

When testing LLM applications, pentesters focus on how data is processed, how the model interacts with external systems, the security of its input and output handling, and the potential for misuse or manipulation, in addition to the security of the underlying infrastructure and APIs.

The specific techniques, tools, custom scripts, and prompt engineering frameworks pentesters use can vary between tests, as this field is rapidly evolving. Provide architectural diagrams, API documentation, and other relevant details when [describing your asset](/getting-started/assets/asset-description/#attachments).

## Application Reconnaissance and Scope Definition
During this initial phase, Cobalt pentesters gather information about the LLM application from the perspective of a malicious user. This involves identifying publicly available data and inferring the LLM's functionality to map its attack surface.

Understanding the application's attack surface helps pentesters:

- Discover potential input vectors for the LLM.
- Understand how the LLM's output is utilized.
- Identify integrated systems or third-party dependencies.

Pentesters conduct reconnaissance in the following areas:
- **Application Documentation and Public Interfaces:** Evaluate described features, API endpoints (if any), user guides, and interaction examples. This includes identifying:
  - Intended use cases and limitations.
  - Data types accepted as input and produced as output.
  - Information about the underlying model (if exposed).
  - Connected services or plugins.

- **LLM Research:** Searching for articles, forum posts, or academic papers related to the specific LLM (if known) or similar applications, to uncover known weaknesses or attack vectors.

- **Associated Infrastructure:** For web-based LLM applications, standard web application reconnaissance is performed (e.g., identifying technologies and exposed endpoints).

{{% alert title="Tools" color="primary" %}}
Cobalt may use tools such as:
- Burp Suite
- OWASP ZAP

{{% /alert %}}

## Interactive Probing and System Understanding
After gathering initial information, Cobalt pentesters actively interact with the LLM application to understand its behavior, constraints, and how it processes various inputs.

These tests involve:
- Sending a wide variety of prompts and crafted inputs.
- Observing output patterns and error messages.
- Attempting to understand the LLM's implicit rules and boundaries.

During this testing phase, pentesters use various techniques:
- Manual interaction through the application's interface.
- Prompt engineering frameworks and custom scripts for systematic probing.
- HTTP proxies (e.g., Burp Suite) to intercept and modify requests to LLM APIs.

Pentesters aim to understand:
- How the LLM responds to ambiguous, leading, or out-of-scope prompts.
- The level of sanitization or filtering applied to inputs and outputs.
- Error handling mechanisms.


## Vulnerability Identification and Exploitation
Cobalt pentesters test for vulnerabilities outlined in the OWASP Top 10 for LLM Applications. The objective is to identify weaknesses that could result in unintended behavior, data leakage, unauthorized actions, or system compromise. 

The testing focus for each OWASP LLM Top 10 category involves pentesters attempting to:

#### LLM01: Prompt Injection:
- Objective: Manipulate the LLM's input to bypass instructions or control its behavior.
- Focus: Craft inputs that override system prompts, execute hidden commands, or cause the LLM to ignore prior instructions. Includes testing for direct and indirect prompt injections.

#### LLM02: Sensitive Information Disclosure:
- Objective: Elicit sensitive data from the LLM that it should not reveal.
- Focus: Probe for PII, API keys, internal system details, proprietary algorithms, or specific training data.

#### LLM03: Supply Chain Vulnerabilities:
- Objective: Identify weaknesses in third-party components, pre-trained models, or data sources.
- Focus: Analyze dependencies (plugins, external datasets, APIs) for known vulnerabilities, and assess the risk of compromised or untrustworthy models.

#### LLM04: Data and Model Poisoning:
- Objective: Assess the risk of an attacker corrupting the training data or fine-tuning data to introduce vulnerabilities, biases, or backdoors.
- Focus:  If the LLM learns from interactions, attempt to feed it malicious or biased information to skew future outputs or behaviors.

#### LLM05: Improper Output Handling:
- Objective: Identify risks associated with how the LLM's output is parsed and used by downstream components.
- Focus: Test if LLM outputs can inject malicious code (e.g., XSS) into connected systems, or cause unexpected application behaivor due to unsanitized output.

#### LLM06: Excessive Agency:
- Objective: Determine if the LLM has been granted excessive permissions or capabilities to interact with other systems or perform actions.
- Focus: Identify all autonomous actions the LLM can take (e.g., API calls, database queries, sending emails) and attempt to trick it into performing unauthorized or harmful actions.

#### LLM07: System Prompt Leakage:
- Objective: Trick the LLM into revealing its system prompt or initial instructions.
- Focus: Use various prompt engineering techniques (e.g., role-playing, meta-questions) to make the LLM disclose its configuration, rules, or confidential instructions.

#### LLM08: Vector and Embedding Weaknesses:
- Objective: Exploit vulnerabilities related to the generation, storage, or use of vector embeddings.
- Focus: Craft inputs that result in adversarial embeddings. Try to reverse-engineer sensitive information from exposed embeddings, or find collisions leading to misclassification or unintended behavior.

#### LLM09: Misinformation:
- Objective: Assess the LLM's propensity to generate plausible but false, misleading, or harmful information (hallucinations).
- Focus: Testing with prompts designed to elicit factual inaccuracies, biased statements, or harmful advice. Evaluating the LLM's confidence in its potentially incorrect outputs.
  
#### LLM10: Unbounded Consumption:
- Objective: Identify if the LLM application is vulnerable to attacks that cause excessive resource consumption (time, computation, financial).
- Focus: Craft inputs that lead to unexpectedly long processing times, trigger recursive operations, or exploit inefficient algorithms, potentially causing denial of service or high operational costs.

{{% alert title="Tools" color="primary" %}}
Cobalt may use tools such as:
- Adversarial Robustness Toolbox (ART)
- CleverHans
- Foolbox
- Burp Suite / OWASP ZAP
- AI Fairness 360 / Fairlearn

{{% /alert %}}

## Reporting, triaging, and retesting

{{% report-triage-retest %}}

[Learn more](/getting-started/planning/#aillm-pentesting) about how to scope an AI/LLM pentest.
