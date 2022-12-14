---
title: "Glossary"
linkTitle: "Glossary"
weight: 400
description: >
 Learn more about the language of software security.
---

{{% pageinfo %}}
If you don't see a term defined on this page, refer to one of the governmental or industry standards
cited in the [References](#references).
{{% /pageinfo %}}

The definitions included in this page may vary from the cited standards, based on how
we configure and use Cobalt software.

## Agile Pentest

{{% agile-pentest %}}. Learn more about the [pentest types](/platform-deep-dive/pentests/pentest-types/).

You may want an Agile Pentest for:

- Recent code changes, such as after a sprint or before a release
- Specific subsets of your asset, such as:
  - A single feature such as a new RESTful [API endpoint](#api-endpoint)
  - One microservice
- You can also use an Agile Pentest to test:
  - A single OWASP or OSSTMM category
  - A specific issue, such as a [known vulnerability](#known-vulnerability)

## Allowlist

An allowlist explicitly lets identified systems access. In networks, an allowlist can specify IP
addresses. You can typically find allowlists and denylists in files like
`/etc/hosts.allow` and `/etc/hosts.deny`.

## API Endpoint

An endpoint is typically a URL used to allow two software applications to communicate with each other. For example, `https://api.cobalt.io/orgs` is one endpoint that you can find at `https://docs.cobalt.io`.

Some [RESTful API](#restful-api) endpoints include additional information that may make them seem different. For example, the following two URLs are in fact the same endpoint, as the content after the ampersand (&) describes an action on data sent from that URL:

- example.com/endpoint1&_prettyPrint=true
- example.com/endpoint1&_prettyPrint=false

[GraphQL operates](https://graphql.org/learn/serving-over-http/#uris-routes) on a single API endpoint. Functionally, GraphQL queries and mutations are similar to RESTful GET, POST, PUT, and other commands.

## API Scope

See [API Endpoint](#api-endpoint) for how we look at RESTful and GraphQL APIs. To scope our work, when we need information about your API, we need numbers for either:

- RESTful [API endpoints](#api-endpoint)
- [GraphQL queries and mutations](#graphql-queries-and-mutations)

## Asset

{{% asset-definition %}} Cobalt can perform pentests on assets in the
following categories:

{{% asset-categories %}}

## Application Security (AppSec)

Application security is the practice of using security software, hardware, techniques,
best practices, and procedures to protect computer applications from external security
threats.
[Source: TechTarget](https://www.techtarget.com/searchsoftwarequality/definition/application-security).

## Application Security Verification Standard (ASVS)

The [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard)
relates to pentests of web application technical security controls.

## Attacker

Sometimes also known as a threat actor, malicious hacker, "black hat hacker," or "cracker." May be 
an individual, a group, or even a nation-state. Specified as "attacker" in Cobalt pentest reports.

## Attestation Letter

{{% attestation-letter %}}

{{% learn-more-reports %}}

## Attestation Report

{{% attestation-report %}}

{{% learn-more-reports %}}

## Automated Report

{{% automated-report %}}

You can't customize an Automated Report. {{% learn-more-reports %}}

## Black Box Testing

Where the pentester has no knowledge of the internal details of the asset. Contrast
with gray box and white box testing.

Also known as "opaque box testing."

## Center for Internet Security (CIS)

The Center for Internet Security is an independent nonprofit organization which develops and
refines best practice security solutions.

One of the test criteria used by our pentesters is [CIS Controls v8](https://www.cisecurity.org/controls/v8),
released in 2021.

## Cobalt Users

When using the Cobalt UI, you may encounter a variety of different users, in the following
roles:

- Organization Roles: If you're a Cobalt customer, your account may have one or more of the following roles:
  - Organization Owner
  - Organization Member
  - Pentest Team Member

- Pentester Roles: Cobalt pentesters who are assigned to your pentest have one of two roles:
  - Lead
  - Pentester

  Some Cobalt pentesters may be a Lead in one test, a Pentester in a second test, and
  possibly no role and no involvement in your other pentests.

Select Cobalt employees may be assigned as administrators, as Cobalt Staff.

You can review a list of permissions associated with each organization role in the following
article: [What do the user roles mean?](https://cobaltio.zendesk.com/hc/en-us/articles/360057093472-What-do-the-user-roles-mean-).

<!-- Per https://zombie.atlassian.net/browse/DOCS-5 I should add info from an internal
spreadsheet, but need to find pull code in Hugo -->

### Organization Owner

In the Cobalt UI, you'll see this user role as "Owner." Users in that role can:

{{% org-owner-permissions %}}

{{%expand "Learn more." %}}

An Organization Owner is the administrator for a customer organization within the Cobalt app. As such, they can:

- Manage users on the **Organization** tab of the **People** page:
  - Add/remove the users of their choice, by their email addresses, as an [Organization Member](#organization-member) or Organization Owner.
  - View the email addresses of users.
  - Change user roles, from an Organization Owner to Organization Member and conversely.

- View collaborators, the members of their pentest team. That team includes:
  - Pentest Team Member, typically an organization employee.
  - Pentest Lead, the Cobalt pentester responsible for the pentest.
  - Pentester, one or more additional Cobalt pentesters who are helping with the pentest.
  Smaller pentests may only have a Pentest Lead.

- An Organization Owner may also be a [Pentest Team Member](#pentest-team-member).

- Manage [multi-factor authentication (MFA)](#multi-factor-authentication) as well as [SAML](#security-assertion-markup-language) settings for the users in their organization. We support two-factor authentication with a mobile authenticator app.

- If an Organization Owner represents a partner company that manages pentests for third parties, they can enable [co-branded pentest reports](../checklist/#co-branded-reports).

An Organization Owner also has top-level (sudo) administrative privileges for their
organizations in the Cobalt app.

{{% /expand%}}

### Organization Member

In the Cobalt UI, you'll see this user role as "Member." Users in that role can:

{{% org-member-permissions %}}

{{%expand "Learn more." %}}
<!-- This is only a test commit -->

An Organization Member is a user of the Cobalt app who can create an [asset](#asset) as well
as a [pentest](#pentest). That user can also see the pentesters who are working on their asset.
If allowed by their {{% ptaas-tier %}}, they can also manage integration with Jira and GitHub (Cloud only).

- An Organization Member may also be a [Pentest Team Member](#pentest-team-member).

{{% /expand%}}

### Pentest Team Member

A Pentest Team Member is a customer (organization) representative during a specific pentest.
That user can review and respond to each [finding](#finding) identified by a Cobalt Pentester or Pentest Lead.

That Pentest Team Member can also add one or more users as a Pentest Team Member. 

A Pentest Team Member does not have to be an Organization Owner or an Organization Member.

### Pentest Lead

A Pentest Lead is a Cobalt pentester who leads other Cobalt pentesters in their efforts to test
an asset. When applicable, the Pentest Lead also drafts the [pentest report](#pentest-report) (for [Comprehensive Pentests](#comprehensive-pentest)).

We don’t assign a Pentest Lead to [Agile Pentests](#agile-pentest).

### Pentester

A Pentester is a Cobalt pentester who works with a Pentest Lead to test a specific asset.

### Cobalt Staff

Cobalt Staff members may help you manage the users in your organization. They may also help
manage work on your pentests.

## Compliance Audit

As [defined](https://csrc.nist.gov/glossary/term/compliance_audit) by NIST, a comprehensive review of an organization's adherence to governing documents such as whether:

- A Certification Practice Statement satisfies the requirements of a Certificate Policy
- An organization adheres to its Certification Practice Statement

## Comprehensive Pentest

{{% comprehensive-pentest %}}. Learn more about [Comprehensive Pentests](/platform-deep-dive/pentests/pentest-types/).

You may want a Comprehensive Pentest for:

- A comprehensive [security audit](#security-audit) of your software
- Broad subsets of your asset, such as:
  - API with all the [endpoints](#api-endpoint) that it includes
  - All microservices
- A [compliance audit](#compliance-audit) based on a specific framework, such as [SOC 2](https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html)
- All categories from the [OWASP Top 10](https://owasp.org/www-project-top-ten/) list
- M&amp;A due diligence, to identify and eliminate possible risks for all parties involved
- A specific customer of third-party attestation request

## Customer Letter

{{% customer-letter %}}

{{% learn-more-reports %}}

## Dynamic Web Page

Many applications have web pages with dynamic content, which can be built on the server or the client. Contrast with [Static Web Pages](#static-web-page).

## Environment

In the context of a Cobalt pentest, you can specify one of three options for an environment:

{{% environment %}}

## Finding

{{% finding-definition %}} We include findings in vulnerability
reports, as something that a threat actor can exploit.

When you select [Full Report + Finding Details](/platform-deep-dive/pentests/reports/report-contents/#appendix-a---finding-details),
we add a detailed list of findings to your report, which includes:

{{% finding-details %}}

## Full Report

{{% full-report %}}

{{% learn-more-reports %}}

## Full Report + Finding Details

{{% full-report-findings %}} {{% learn-more-reports %}}

## GraphQL API

Per https://graphql.org, GraphQL is a query language for your API. A GraphQL API is designed with a single endpoint.

For pentests of a GraphQL API, Cobalt needs the number of [queries and mutations](https://graphql.org/learn/queries/) that you’ve configured. Also see [API Endpoint](#api-endpoint).

## GraphQL Queries and Mutations

For more information, see https://graphql.org/learn/queries/

## Gray Box Testing

Where the pentester has limited knowledge of the internal details of the asset. Contrast
with white box and black box testing.

Also known as "translucent box testing."

## Jump Box

Also known as a jump host or a jump server, a jump box is a system (typically) on an internal
network or a DMZ. Jump boxes are used to access and manage devices in a separate security zone.

Where the pentester has limited knowledge of the internal details of the asset. Contrast
with white box and black box testing.

## Known Vulnerability

A "well-known" security vulnerability. Documented in a security bulletin or a CVE
(Common Vulnerabilities and Exposures) from [MITRE](https://cve.mitre.org).

In Cobalt pentest reports, you may see this as a published or documented vulnerability.

## Mitigate

To apply preventative measures. Based on problems identified by a pentest or incident report.
Examples:

- Install security updates on potentially affected servers
- Review and update a codebase for issues identified on specific files

Contrast with [remediate](#remediate). This reflects how we use **mitigate** at
Cobalt, and differs slightly from the NIST definition of 
[mitigate](https://csrc.nist.gov/glossary/term/mitigate).

## Mobile Screen

A mobile screen is what you see on a mobile device, such as an iPhone or an Android system. As described by [Codepath](https://guides.codepath.com/android/Mobile-Screen-Archetypes), mobile screens fall into several archetypes.

You may have multiple screens of an archetype. For example, you may have 10 mobile screens for the onboarding archetype.

For pentests of a mobile [asset](#asset), we need the number of screens that you have, for each operating system that you support.

## Multi-factor Authentication
<!-- `Multi-factor` is consistent with Google terminology  -->

Authentication which uses two or more different factors, which may include:
- Something you know, such as a password or a PIN number
- Something you have, such as an identity token
- Something you are, which works with biometric authentication
<!-- source: https://csrc.nist.gov/glossary/term/mfa -->

## Open Web Application Security Project (OWASP)

[OWASP](https://owasp.org) is a nonprofit foundation with "Top 10" security
issues for different asset types, including Web apps, APIs, and Cloud systems.

## Open Source Security Testing Methodology Manual (OSSTMM)

The [OSSTMM](https://www.isecom.org/OSSTMM.3.pdf) tests the operational security of physical
locations, human interactions, and all communications on the network, whether they be wireless,
wired, analog, or digital.

## Operations Security (OpSec)

Operations Security, commonly known as OpSec, identifies critical information, and if/how it
may be used by opponents or enemies. OpSec measures can reduce security risks.

## Pentest

Short for penetration test. As described in the [Getting Started Guide](/getting-started/),
you can draft a pentest. Once you submit it for review, Cobalt reviews your pentest and assigns
a [Pentest Lead](#pentest-lead) and frequently one or more [Pentesters](#pentester) who then
test the [asset](#asset) specified in your pentest.

## Pentest as a Service (PtaaS)

Combines manual and human testing with a modern delivery platform to deploy
penetration testing programs. 

## Pentest Report

A summary of all vulnerability reports, including observations on positive security measures. Target audiences: executives, security engineers, and developers. Includes:

- Executive Summary 
  - Describes the tests performed with criteria.
- Executive Analysis
  - Includes a high-level summary of vulnerabilities.

- Scope of Work

  {{% scope-of-work %}}

- Summary of Findings
  - Trends and critical issues
  - Auto-generated graphs
- Summary of Recommendations
  - Highlights of the work we recommend to remediate findings
- Post-Test Remediation
  - List of details with type, severity, state, and resolution
- Finding Details
  - More information on each finding

Within Cobalt, this is also known as a Report or a Final Report. For more information, see [Pentest Reports](/platform-deep-dive/pentests/reports/).

## Projects (Cloud Assets)

All resources included in your cloud [asset](#asset). For example, [AWS defines a project](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/create-project.html) as a collection of resources associated with an asset.

## Remediate

To fix a vulnerability identified by a pentest or incident report. Examples:

- Install a security update on an affected server
- Update directly affected code

Contrast with [mitigate](#mitigate). This reflects how we use **remediate** at
Cobalt, and differs slightly from the NIST definition of 
[remediation](https://csrc.nist.gov/glossary/term/remediation).

## Resource Group (Cloud)

A set of resources in a cloud [asset](#asset). For more information, see [Google GCP documentation](https://cloud.google.com/monitoring/groups).

## RESTful API

Per [TechTarget](https://www.techtarget.com/searchapparchitecture/definition/RESTful-API), "A RESTful API is an architectural style for an application program interface ([API](https://www.techtarget.com/searchapparchitecture/definition/application-program-interface-API)) that uses HTTP requests to access and use data." Also see [API Endpoint](#api-endpoint).

## Route (Software)

As defined by [Manning](https://freecontent.manning.com/routing-with-react-in-modern-front-end-web-applications/), in software, it's a system for resource navigation. If you're working in the browser, you might be familiar with routing as it relates to:

- URLs
- Resources, such as paths to images and scripts, functions, and so on

If you’re working on the server, matching incoming request paths to resources from a database.

## Security Assertion Markup Language

As defined by the Organization for the Advancement of Structured Information Standards (OASIS),
the [Security Assertion Markup Language (SAML)](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=security)
SAML is an XML-based framework for communicating user authentication, entitlement, and attribute information.

## Security Audit

As [defined](https://csrc.nist.gov/glossary/term/security_audit) by NIST, an independent review and examination of a system’s records and activities to determine the adequacy of system controls, ensure compliance with established security policy and procedures, detect breaches in security services, and recommend any changes that are indicated for countermeasures.

## SANS Institute

Original sponsor of a set of standards for testing networks. SANS stands for SysAdmin, Audit,
Network, and Security. The SANS Top 20 has been migrated to CIS Controls Version 8.

## Scope of Work

Cobalt may refer to this as the "scope" of your pentest. {{% scope-of-work %}}

## Single-Page Application

For more information, see https://developer.mozilla.org/en-US/docs/Glossary/SPA

## Static Web Page

Some applications are built solely on HTML, and do not change depending on the user or location. Contrast with [Dynamic Web Pages](#dynamic-web-page).

## User Role

{{% user-role %}}

When [scoping a pentest](/getting-started/planning/#scope-the-pentest), specify the number of roles that you want to test.

## Vulnerability

A security issue discovered during a pentest. Also a specific weakness which can be exploited
by a [threat actor](https://niccs.cisa.gov/about-niccs/cybersecurity-glossary#T), such as an
attacker who crosses privilege boundaries (and performs unauthorized actions) within a computer system.

Contrast with [Known Vulnerability](#known-vulnerability). A vulnerability may be part of a
[finding](#finding).

## Vulnerability Management

The cyclical practice of identifying, classifying, remediating, and mitigating vulnerabilities.
At Cobalt, we focus on manual pentests (enhanced with automated tools). Also see [Vulnerability
Assessment and Management](https://niccs.cisa.gov/about-niccs/cybersecurity-glossary#V), as
defined by the US Cybersecurity and Infrastructure Agency (CISA).

## Vulnerability Report (Manual)

A document that provides information about one specific finding. Cobalt vulnerability reports are based on manual tests. Such reports include:

- Step-by-step notes on how the tester identified each vulnerability (when possible)
- Locations, such as files or hardware
- Recommendations to remediate

## Vulnerability Report (Automated)

A document created by an automated scanning tool. Primarily used to list known vulnerabilities
associated with specific code patterns.

## Vulnerability Type

How Cobalt classifies the [vulnerability](#vulnerability). Examples include:

- Client Side Injection
- Server Security Misconfiguration > Lack of Password Confirmation
- Broken Authentication and Session Management

## Web Page

A hypertext document on the web. Web applications typically include static and dynamic web pages.

- A [Static Web Page](#static-web-page) contains stable content that appears the same for every user who opens the page.
- A [Dynamic Web Page](#dynamic-web-page) includes content that can be customized, either through an application server (server-side) or through code such as JavaScript running in the browser (client-side).

## White Box Testing

Where the pentester has full knowledge of the internal details of the asset. Contrast
with black box and gray box testing.

Also known as "clear box testing."

## References

- [ISO/IEC 27000:2018](https://www.iso.org/obp/ui/#iso:std:iso-iec:27000:ed-5:v1:en)
- The [Internet Security Glossary](https://datatracker.ietf.org/doc/html/rfc4949#section-4)
- The Computer Security Resource Center [Glossary](https://csrc.nist.gov/glossary)
- The [Cybersecurity Glossary](https://niccs.cisa.gov/about-niccs/cybersecurity-glossary) of the
  US Cybersecurity and Infrastructure Security Agency
- [Canadian Centre for Cyber Security](https://cyber.gc.ca/en/guidance/cyber-threat-and-cyber-threat-actors)
