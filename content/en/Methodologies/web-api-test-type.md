---
title: "Selecting Your Test Type: Web or API"
linkTitle: "Selecting Your Test Type: Web or API"
toc_hide: = true
weight: 0

---

{{% pageinfo %}}

To ensure a complete and effective pentest, it’s important to understand the differences between Web Application testing and API testing, and when each is appropriate.

{{% /pageinfo %}}

## Web Application Testing
This focuses on the front-end of your application; the user interface that customers or employees interact with through a browser. Web application testing examines:
- Input validation and output encoding
- Client-side functionality and JavaScript behavior
- Authentication and session management within the UI
- Misconfigurations or data exposure visible in rendered pages or browser tools

**Recommended if:** your application has a significant web front-end with user interaction, forms, dashboards, and workflows that users access through a browser.

## API Testing

API testing targets the application’s public or private API interfaces, such as REST or GraphQL endpoints. These APIs often support the web app and mobile clients or serve as integrations for third-party systems. API testing focuses on:
- Broken object-level and function-level authorization
- Insecure direct object references (IDOR)
- Improper authentication/token handling
- Injection vulnerabilities specific to API payloads

**Recommended if:** your application exposes an API (public or private), is consumed by mobile or third-party clients, or performs complex back-end logic that isn’t visible in the front-end.

## Web + API Testing

This combined approach provides the most complete assessment, covering both the user interface and the APIs behind it. Many modern applications rely heavily on APIs even for basic web functionality, meaning vulnerabilities might exist in the API layer even if the UI appears secure. If the application exposes API endpoints for developer or end user interaction, a **combined** approach is required to ensure that the full API functionality is tested, instead of testing only what is exposed to the web application’s user interface.

**Recommended if:** your application includes a web front-end and uses APIs behind the scenes for critical functionality (e.g., login, payments, data retrieval), or if your security requirements demand a full-stack assessment.
