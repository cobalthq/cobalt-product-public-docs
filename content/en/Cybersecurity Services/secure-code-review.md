---
title: "Secure Code Review"
linkTitle: "Secure Code Review"
weight: 150
description: >
  Review details & methodology for a Secure Code Review. 
---


## Secure Code Review

A Secure Code Review is the human-led examination of software’s source code in order to identify security vulnerabilities that are the result of design flaws, but proven to be valid security issues. It is an important part of any organization's software development life cycle (SDLC) and helps improve the overall quality and security of the software and an organization's overall security posture.

Secure code reviews are a specialized type of engagement that is not included in our standard penetration testing as a service (PtaaS)  offering. This service is delivered by our Cybersecurity Services team.

| **Feature** | Description |
|---|---|
| **Fulfilled by** | Staffed by Core members & fulfilled by Cybersecurity Services |
| **Number of credits** | Starting from 8 credits*, minimum of 4 days of effort |
| **Number of testers** | Dependent on scope |
| **Collaboration** | Slack |
| **Retesting** | Yes - according to your [credit tier](https://www.cobalt.io/pentest-pricing) |
| **Earliest start date** | Earliest start date will be based on availability. <i>Typical start dates of 3-5 business dates once test is submitted to In Review</i> |
| **Test duration** | Typically between 8 - 20 days, depending on the scope. <i>The exact duration will be finalized once moved to Planned.</i> |
| **Report due date** | 5 business days after the test end date. Report will be delivered as a PDF within the **Report** section of the platform |
| **Kick off call** | Not included |
| **Debrief call** | Not included |

*dependent upon organization’s credit price 

### Methodology Details

At Cobalt, we follow [OWASP Secure Coding Guidelines](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/) when it comes to Secure Code Review. Cobalt’s Secure Code Review is a systematic examination of source code. During the secure code review, Cobalt will take into consideration the risk the code presents, the purpose and context of code, the count of lines of code, and the programming language(s) used.

Here are some steps that can be included in a secure code review:

- Analyze the software composition: Inventory open-source components and flag potential issues using software composition analysis (SCA) tools.
- Perform Static Application Security Testing: Execute an automated SAST tool to identify common vulnerabilities
- Manually validate the automated findings: Review and evaluate automated results to identify and validate true issues within critical functionality. Note: some finding classes - such as code injection - cannot be validated without active engagement of the running application. 
- Manually review business logic 
- Provide recommendations on reasonable mitigations that could address discovered issues or suggested code changes or upgrade paths to fix findings (when applicable). 

#### Software Composition Analysis 

During Software Composition Analysis (SCA), Cobalt analyzes open-source and third-party components for known vulnerabilities.

The six phases for SCA are:
1. Identification of Components
2. Vulnerability Detection
3. License Compliance
4. Version Analysis
5. Risk Assessment
6. Remediation Guidance  

#### Static Application Security Testing

Cobalt leverages Static Application Security Testing (SAST) tools when performing secure code reviews which aids in the manual efforts when searching for patterns in large codebases. A benefit for using SAST tools is that it helps identify all instances of the vulnerability in the application. Some common findings found with a SAST tool are:
- SQL injection
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Insecure cryptographic storage
- Insecure communications
- Buffer overflows
- Authorization flaws

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
