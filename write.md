V1- XPath Injection
Finding Title:

Finding Description:
XPath Injection vulnerability arises when user-supplied input is directly used to construct XPath queries for XML data processing. When an application receives user input as part of dynamic XPath expressions used to query an XML database, there is potential for an XPath injection attack to occur. An attacker can submit malicious payloads which jumble with the backend source code and cause the target application to behave in unintended ways.  Depending on the payload supplied an attacker can exploit an XPath injection vulnerability and gain access to sensitive data, bypass authentication, meddle with the application logic and allow attackers to elevate privileges (if XML data is used for authentication).

Sample Proof-of-Concept:

Recommendations:
Input validation before using user provided input for XPath queries. 
Identify XPath query characters such as ‘=’, ‘@’, and more and block or reject them. Whitelist allowed characters. 
Use parameterised XPath queries. 
Use generic error messages. Attackers may gain information about backend technology and framework via verbose error messages. 

References:
http://projects.webappsec.org/w/page/13247005/XPath%20Injection
https://owasp.org/www-community/attacks/XPATH_Injection#
https://www.soapui.org/docs/security-testing/security-scans/xpath-injection/
https://capec.mitre.org/data/definitions/83.html



Checklist Section: Validation, Sanitization and Encoding -> Output encoding and Injection Prevention Requirements
Coverage Checklist Items:

Verify that the application protects against XPath injection or XML injection attacks.
Verify that the application protects against OS command injection and that operating system calls use parameterized OS queries or use contextual command line output encoding.
Verify that the application projects against JavaScript or JSON injection attacks, including for eval attacks, remote JavaScript includes, CSP bypasses, DOM XSS, and JavaScript expression evaluation.
Verify that output encoding preserves the user's chosen character set and locale, such that any Unicode character point is valid and safely handled.
Verify that data selection or database queries (e.g. SQL, HQL, ORM, NoSQL) use parameterized queries, ORMs, entity frameworks, or are otherwise protected from database injection attacks.
Verify that context-aware, preferably automated - or at worst, manual - output escaping protects against reflected, stored, and DOM based XSS.
Verify that output encoding is relevant for the interpreter and context required. For example, use encoders specifically for HTML values, HTML attributes, JavaScript, URL Parameters, HTTP headers, SMTP, and others as the context requires, especially from untrusted inputs (e.g. names with Unicode or apostrophes, such as ねこ or O'Hara).
Verify that the application protects against LDAP Injection vulnerabilities, or that specific security controls to prevent LDAP Injection have been implemented.
Verify that the application protects against Local File Inclusion (LFI) or Remote File Inclusion (RFI) attacks.
Verify that where parameterized or safer mechanisms are not present, context-specific output encoding is used to protect against injection attacks, such as the use of SQL escaping to protect against SQL injection.
