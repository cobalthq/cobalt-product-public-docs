---
title: "Secure Code Review Methodologies"
linkTitle: "Secure Code Review Methodology"
weight: 300
description: >
  Review methodologies for a Secure Code Review Engagement.

---

At Cobalt, we follow [OWASP Secure Coding Guidelines](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/) when it comes to Secure Code Review. Cobalt’s Secure Code Review is a systematic examination of source code. During the secure code review, Cobalt will take into consideration the risk the code presents, the purpose and context of code, the count of lines of code, and the programming language(s) used.

Here are some steps that can be included in a secure code review:

- Analyze the software composition: Inventory open-source components and flag potential issues using software composition analysis (SCA) tools.
- Perform Static Application Security Testing: Execute an automated SAST tool to identify common vulnerabilities.
- Manually validate the automated findings: Review and evaluate automated results to identify and validate true issues within critical functionality. **Note:** Some finding classes - such as code injection - cannot be validated without active engagement of the running application. 
- Manually review business logic. 
- Provide recommendations on reasonable mitigations that could address discovered issues or suggested code changes or upgrade paths to fix findings (when applicable). 

{{% alert title="Note" color="primary" %}}
{{% various-tools %}}
{{% /alert %}}

#### Software Composition Analysis 

During Software Composition Analysis (SCA), Cobalt analyzes open-source and third-party components for known vulnerabilities.

The six phases for SCA are:
1. Identification of Components
2. Vulnerability Detection
3. License Compliance
4. Version Analysis
5. Risk Assessment
6. Remediation Guidance  

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use Software Composition Analysis tools such as:

- Semgrep Pro
- OWASP Dependency-Check
- Snyk Open Source
- Trivy
- Sonatype
- Jfrog Xray
{{% /alert %}}

#### Static Application Security Testing

Cobalt leverages Static Application Security Testing (SAST) tools when performing secure code reviews which aids in the manual efforts when searching for patterns in large codebases. A benefit for using SAST tools is that it helps identify all instances of the vulnerability in the application. Some common findings found with a SAST tool are:
- SQL injection
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Insecure cryptographic storage
- Insecure communications
- Buffer overflows
- Authorization flaws

{{% alert title="Tools" color="primary" %}}
Cobalt pentesters may use Static Application Security Testing tools such as:

- Semgrep Pro
- Bearer
- Checkmarx
- Fortify
- Snyk
- SonarQube
- Veracode 
{{% /alert %}}

#### Manual Review of Business Logic

Performing manual secure code review is essential for discovering business logic flaws and to verify the results of the SAST tools. Below are some examples of the areas of focus during a manual Secure Code Review.
- Input Validation
- Output Encoding
- Authentication and Password Management
- Session Management
- Access Control
- Cryptographic Practices
- Error Handling and Logging
- Data Protection
- Communication Security
- System Configuration
- Database Security
- File Management
- Memory Management
- General Coding Practices
