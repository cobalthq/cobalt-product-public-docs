---
title: Prevent Insecure Design in SQL
linkTitle: Prevent Insecure Design in SQL
weight: 640
description: >
  We'll address some typical design flaws when you set up SQL.
---

{{% pageinfo %}}
Review some of the risks associated with [Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/),
as it relates to SQL Learn how secure design can help minimize your risks.
{{% /pageinfo %}}

As noted by [OWASP](/getting-started/glossary/#open-web-application-security-project-owasp),
Insecure Design is "new category for 2021 focuses on risks related to design and architectural flaws".

# Prevent Insecure Design # 

## Description

Insecure design flaws are failures to follow secure design and architecture best practices by developers,
starting from the planning phase of the application. This is a broad category representing different security
weaknesses collectively known as insecure design.

## Examples

Let's explore some examples of Insecure Design.

### Scenario 1: Database Users with Too Much Access

On some databases, administrators set up application database users with administrative privileges. On such systems, attackers who exploit a database system vulnerability can: 

- Access to the complete database.
- Run operating system commands, which could compromise your servers. 

That is not a secure design.

Secure design recommends that you configure least privileges for application database users. To follow best practices for secure design:

- As suggested by the OWASP article on [SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html#least-privilege), "start from the ground up."
  - Start with read-only access. Add privileges only when needed.
  - Limit privileges to SQL accounts to specific databases.

With secure design, you can limit the impact of SQL injection to the privileges of the compromised user 

## Scenario 2 ##

**Missing Access Control**

An access control issue was found in the production application, where the attacker was able to access the superadmin dashboard and get access to the data of other users. The superadmin dashboard URL was guessed by the attacker, and due to missing access control, it granted full access to the superadmin account. 

A detailed threat modelling could have pointed out this scenario where an application user could access superadmin account. The threat model could also have recommended the developers implement strong access control, separating superadmin area of the application from the user side. 

## Scenario 3 ##

**Missing Rate Limiting**

Missing rate limiting in the coupon code in an eCommerce website leads to bots trying to bruteforce the coupon codes, attracting unnecessary traffic which leads to performance issues. 

Since this was not anticipated during the design phase, there wasn’t any preventive control to avoid this. A secure design with an application firewall to protect any bot activity and a lockout mechanism could have avoided this issue.


# Prevention #

To avoid insecure design flaws, you must:

- Collect security requirements along with business requirements, ensure sufficient resources and efforts to implement security controls as well. 

- Document abuse cases along with use cases while creating user stories. Bring security concerns during the discussions in developer meetings.

- Conduct threat modelling exercises. Dissect different functionalities and use case stories to arrive at possible threats and vulnerabilities. Take the help of security experts to enumerate threats. Create a mitigation strategy to handle possible attack scenarios.

- Conduct secure design and architecture reviews along with the security team. This highlights flaws in existing architecture and proposes solutions to create a robust design. 

- Create feedback loops, vulnerabilities identified later during the testing phase or in the production environment can help to revise threat models over time. 

- Establish a secure development lifecycle with the help of security teams. Introduce secure design principles and security checks early in the development lifecycle. 

- You can also follow [OpenSAMM](https://www.opensamm.org/) framework, an open-source framework for implementing a strategy for software security. This model can be applied organization-wide, for a single line of business, or even for an individual project and for any style of development.



# References #

- https://www.opensamm.org/
- https://owasp.org/Top10/A04_2021-Insecure_Design/
- https://www.threatmodelingmanifesto.org/
- https://github.com/OWASP/DevGuide/blob/master/02-Design/01-Principles%20of%20Security%20Engineering.md

