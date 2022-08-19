---
title: "Best Practices for Security"
linkTitle: "Best Practices"
weight: 600
description: >
  Recommendations for developers focused on security.
---

{{% pageinfo %}}
This document collects content from [our pentesters](https://cobalt.io/our-pentesters) to
help you secure your systems.
{{% /pageinfo %}}

You want to start an [application security](../getting-started/glossary/#application-security-appsec)
program. You've read through the 2021 version of the [OWASP Top 10](https://owasp.org/Top10/).
We'll provide practical examples that you can use as patterns to secure your
[assets](../getting-started/glossary/#assets).

<!-- Plan: set up subdirectories based on each OWASP Top 10 entry. Add an `_index.md` file, with a brief description from https://owasp.org/Top10/ and add each article in that subdirectory -->
<!-- Keep the first articles in the "top-level" BestPractices subdirectory,
until we have enough articles to actually organize. -->

## Available Articles

Once we've merged content into this guide, we'll list them in the following table with the
date of release.

| Article                                                              | Release Date | Author                |
|----------------------------------------------------------------------|--------------|-----------------------|
| [Validate User Input](./input-validation)                      | 2022-08-19   | {{% payloadartist %}} |
| [Protect Against Server-Side Request Forgery](./protect-against-ssrf) | 2022-08-19   | {{% harsh-bothra %}}  |
| [Prevent Security Misconfiguration](./prevent-security-misconfig)              | 2022-08-19   | {{% shashank %}}      |

