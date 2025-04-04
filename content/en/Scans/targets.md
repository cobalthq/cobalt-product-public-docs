---
title: "Targets"
linkTitle: "Targets"
weight: 10
description: >
  A target is the URL of a Web Application, Website, or API.
---
<style>
.image-box {
  margin: 20px;
  border: 1px solid #DADDE1;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

{{% pageinfo %}}
A target defines the scope of the scan.
{{% /pageinfo %}}

## What is a DAST Target?

{{% image src="/scans/Anatomy_DASTTarget.png" alt="Breakdown of a DAST Target URL" %}}

A DAST target is the specific entry point (URL or endpoint) of a web application, website, API, or any component that accepts input from the outside world. It defines the scope, or boundaries, of the security scan conducted by a DAST tool, limiting the tool to analyzing only those pages, links, or forms within the target's domain.

For instance, with a target of `https://example.com`, the scan would cover `https://example.com/app1` but not `https://app2.example.com`. Essentially, the scanner examines URLs beginning with "example.com."

### Examples of DAST Targets:

- **URLs:** These are the most common targets, representing individual web pages or sections within an application:

  - `https://www.example.com`: Top-level domain hosting the application

  - `https://example.com/blog`: Sub-folder or sub-section within the application

  - `https://admin.example.com`: Subdomain hosting a separate application

- **APIs:** Applications often use APIs for communication, and DAST can identify vulnerabilities like unauthorized access or data leaks:

  - `https://api.us.example.com`: Internal API hosted on a subdomain

  - `https://api.eu.example.com`: Separate API instance hosted independently

- **Forms:** DAST can assess the security of login forms, registration pages, and other input fields against attacks like SQL injection or cross-site scripting:

  - `https://example.com/login`: Login form within the top-level domain

  - `https://checkout.example.com`: Checkout and payment form hosted on a subdomain

### What is NOT a DAST Target:

- **Cobalt Assets:** Assets in Cobalt are non synonymous with targets. An asset is often an entire application, comprised of multiple internal and third-party systems, APIs, and other components. DAST tools don't analyze an entire codebase, but focus solely on parts that accept external input. Those components, which live within a unique URL (ie. `example.com`, `app.example.com` and `api.example.com`) would each constitute an individual target.

- **Servers or Networks:** While applications run on servers and interact with networks, DAST tools typically don't directly test these aspects.

- **Source Code:** DAST analyzes application behavior, not the code itself. That's the domain of Static Application Security Testing (SAST).

- **Third Party Apps:** External applications that customers don't have approval to run scans or test on.

A clear and well-defined DAST target ensures the scan focuses on the specific areas of an application most susceptible to external threats.

## Adding a Web or API Target

When adding a new target, you can choose between Web and API. Once the target type has been selected and saved, you can't change the type again.

To scan an API, we need its specification, the schema. You can define it with a URL pointing to the schema or uploading it. The former has the advantage of us fetching the schema before every scan, ensuring we always get the most up-to-date version.

{{% image src="/scans/2_AddTarget-API.png" alt="Add API target" %}}

## Configuring a Target

There are a few configuration options available when setting up targets.

- **Authenticated targets**: You can see a detailed explanation in [Authentication].

- **Avoided URLs**: Scans work by crawling and discovering new urls in your application. If you want to reduce the scope of the scan to
avoid scanning certain parts of the app, you can add them to Avoided URLs. These are valid examples for avoided URLs:
```
https://example.com/admin*
https://api.example.com/api/users*
https://example.com/account*
```
- **Seed Paths** (for web targets only): In a similar way, a scan starts usually from the target url. Sometimes, there are some pages that are not reachable from there. If you want to add some extra starting points for the scan, you can use seed paths. Note that only relative paths are allowed and the Avoided URLs take precedence. This is a valid example:

```
posts/search?query=cobalt
```

- **Custom Headers**: If you need to add custom headers to your requests, you can do so by adding them here. This is a valid example:
```
Header Name: Authorization
Header Value: Bearer 123456
```

<!-- links -->
[Authentication]: /platform-deep-dive/scans/target-auth

