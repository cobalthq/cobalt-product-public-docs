<b>Generic Web Service Security Verification Requirements</b>:

- [ ] Verify that all application components use the same encodings and parsers to avoid parsing attacks that exploit different URI or file parsing behavior that could be used in SSRF and RFI attacks.
- [ ] Verify that access to administration and management functions is limited to authorized administrators.
- [ ] Verify API URLs do not expose sensitive information, such as the API key, session tokens etc.

<b>SOAP Web Service Verification Requirements</b>:

- [ ] Verify that XSD schema validation takes place to ensure a properly formed XML document, followed by validation of each input field before any processing of that data takes place.

<b>RESTful Web Service Verification Requirements</b>:

- [ ] Verify that RESTful web services that utilize cookies are protected from Cross-Site Request Forgery via the use of at least one or more of the following: triple or double submit cookie pattern (see [references](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)), CSRF nonces, or ORIGIN request header checks.
- [ ] Verify that JSON schema validation is in place and verified before accepting input.
- [ ] Verify that enabled RESTful HTTP methods are a valid choice for the user or action, such as preventing normal users using DELETE or PUT on protected API or resources.