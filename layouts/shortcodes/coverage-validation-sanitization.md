<b>Sanitization and Sandboxing Requirements</b>:

- [ ] Verify that all untrusted HTML input from WYSIWYG editors or similar is properly sanitized with an HTML sanitizer library or framework feature.
- [ ] Verify that the application protects against SSRF attacks, by validating or sanitizing untrusted data or HTTP file metadata, such as filenames and URL input fields, use whitelisting of protocols, domains, paths and ports.
- [ ] Verify that the application sanitizes user input before passing to mail systems to protect against SMTP or IMAP injection.
- [ ] Verify that unstructured data is sanitized to enforce safety measures such as allowed characters and length.
- [ ] Verify that the application sanitizes, disables, or sandboxes user-supplied SVG scriptable content, especially as they relate to XSS resulting from inline scripts, and foreignObject.
- [ ] Verify that the application sanitizes, disables, or sandboxes user-supplied scriptable or expression template language content, such as Markdown, CSS or XSL stylesheets, BBCode, or similar.
- [ ] Verify that the application avoids the use of eval() or other dynamic code execution features. Where there is no alternative, any user input being included must be sanitized or sandboxed before being executed.
- [ ] Verify that the application protects against template injection attacks by ensuring that any user input being included is sanitized or sandboxed.

<b>Output encoding and Injection Prevention Requirements</b>:

- [ ] Verify that the application protects against XPath injection or XML injection attacks.
- [ ] Verify that output encoding preserves the user's chosen character set and locale, such that any Unicode character point is valid and safely handled.
- [ ] Verify that the application projects against JavaScript or JSON injection attacks, including for eval attacks, remote JavaScript includes, CSP bypasses, DOM XSS, and JavaScript expression evaluation.
- [ ] Verify that data selection or database queries (e.g. SQL, HQL, ORM, NoSQL) use parameterized queries, ORMs, entity frameworks, or are otherwise protected from database injection attacks.
- [ ] Verify that where parameterized or safer mechanisms are not present, context-specific output encoding is used to protect against injection attacks, such as the use of SQL escaping to protect against SQL injection.
- [ ] Verify that output encoding is relevant for the interpreter and context required. For example, use encoders specifically for HTML values, HTML attributes, JavaScript, URL Parameters, HTTP headers, SMTP, and others as the context requires, especially from untrusted inputs (e.g. names with Unicode or apostrophes, such as ねこ or O'Hara).
- [ ] Verify that context-aware, preferably automated - or at worst, manual - output escaping protects against reflected, stored, and DOM based XSS.
- [ ] Verify that the application protects against LDAP Injection vulnerabilities, or that specific security controls to prevent LDAP Injection have been implemented.
- [ ] Verify that the application protects against OS command injection and that operating system calls use parameterized OS queries or use contextual command line output encoding.
- [ ] Verify that the application protects against Local File Inclusion (LFI) or Remote File Inclusion (RFI) attacks.

<b>Input Validation Requirements</b>:

- [ ] Verify that all input (HTML form fields, REST requests, URL parameters, HTTP headers, cookies, batch files, RSS feeds, etc) is validated using positive validation (whitelisting).
- [ ] Verify that URL redirects and forwards only allow whitelisted destinations, or show a warning when redirecting to potentially untrusted content.
- [ ] Verify that structured data is strongly typed and validated against a defined schema including allowed characters, length and pattern (e.g. credit card numbers or telephone, or validating that two related fields are reasonable, such as checking that suburb and zip/postcode match).
- [ ] Verify that frameworks protect against mass parameter assignment attacks, or that the application has countermeasures to protect against unsafe parameter assignment, such as marking fields private or similar.
- [ ] Verify that the application has defenses against HTTP parameter pollution attacks, particularly if the application framework makes no distinction about the source of request parameters (GET, POST, cookies, headers, or environment variables).

<b>Deserialization Prevention Requirements</b>:

- [ ] Verify that deserialization of untrusted data is avoided or is protected in both custom code and third-party libraries (such as JSON, XML and YAML parsers).
- [ ] Verify that when parsing JSON in browsers or JavaScript-based backends, JSON.parse is used to parse the JSON document. Do not use eval() to parse JSON.
- [ ] Verify that the application correctly restricts XML parsers to only use the most restrictive configuration possible and to ensure that unsafe features such as resolving external entities are disabled to prevent XXE.
- [ ] Verify that serialized objects use integrity checks or are encrypted to prevent hostile object creation or data tampering.