<b>Dependency</b>:

- [ ] Verify that if application assets, such as JavaScript libraries, CSS stylesheets or web fonts, are hosted externally on a content delivery network (CDN) or external provider, Subresource Integrity (SRI) is used to validate the integrity of the asset.
- [ ] Verify that all unneeded features, documentation, samples, configurations are removed, such as sample applications, platform documentation, and default or example users.
- [ ] Verify that all components are up to date, preferably using a dependency checker during build or compile time.

<b>Unintended Security Disclosure Requirements</b>:

- [ ] Verify that the HTTP headers or any part of the HTTP response do not expose detailed version information of system components.
- [ ] Verify that web or application server and framework error messages are configured to deliver user actionable, customized responses to eliminate any unintended security disclosures.
- [ ] Verify that web or application server and application framework debug modes are disabled in production to eliminate debug features, developer consoles, and unintended security disclosures.

<b>HTTP Security Headers Requirements</b>:

- [ ] Verify that a content security policy (CSPv2) is in place that helps mitigate impact for XSS attacks like HTML, DOM, JSON, and JavaScript injection vulnerabilities.
- [ ] Verify that a suitable X-Frame-Options or Content-Security-Policy: frame-ancestors header is in use for sites where content should not be embedded in a third-party site.
- [ ] Verify that all responses contain X-Content-Type-Options: nosniff.
- [ ] Verify that all API responses contain Content-Disposition: attachment; filename="api.json" (or other appropriate filename for the content type).
- [ ] Verify that HTTP Strict Transport Security headers are included on all responses and for all subdomains.
- [ ] Verify that a suitable "Referrer-Policy" header is included, such as "no-referrer" or "same-origin".
- [ ] Verify that every HTTP response contains a content type header specifying a safe character set (e.g., UTF-8, ISO 8859-1).

<b>Validate HTTP Request Header Requirements</b>:

- [ ] Verify that the supplied Origin header is not used for authentication or access control decisions, as the Origin header can easily be changed by an attacker.
- [ ] Verify that the cross-domain resource sharing (CORS) Access-Control-Allow-Origin header uses a strict white-list of trusted domains to match against and does not support the "null" origin.
- [ ] Verify that the application server only accepts the HTTP methods in use by the application or API, including pre-flight OPTIONS.