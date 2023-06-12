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

## Aggregated Risk

{{% aggregated-risk-definition %}}

The [risk](/platform-deep-dive/pentests/findings/severity-levels/) of an individual finding is the likelihood multiplied by the impact (Risk = Likelihood * Impact).

## Allowlist

An allowlist explicitly lets identified systems access. In networks, an allowlist can specify IP
addresses. You can typically find allowlists and denylists in files like
`/etc/hosts.allow` and `/etc/hosts.deny`.

## API Endpoint

An endpoint is typically a URL used to allow two software applications to communicate with each other. For example, `https://api.cobalt.io/orgs` is one endpoint that you can find at `https://api.cobalt.io`.

When [scoping a pentest for an API asset](/getting-started/planning/#api), ignore specific **parameters** and **HTTP methods** for each endpoint. For example, these are two different HTTP requests for the same endpoint:

- `GET https://api.cobalt.io/pentests`
- `POST https://api.cobalt.io/pentests`

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

## Asset Tag

{{% asset-tag-definition %}}

Learn [how to use asset tags](/getting-started/assets/#asset-tags).

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

## Black-Box Testing

Where the pentester has no knowledge of the internal details of the asset. Contrast
with [gray-box](#gray-box-testing) and [white-box testing](#white-box-testing).

Also known as "opaque-box testing."

## Center for Internet Security (CIS)

The Center for Internet Security is an independent nonprofit organization which develops and
refines best practice security solutions.

One of the test criteria used by our pentesters is [CIS Controls v8](https://www.cisecurity.org/controls/v8),
released in 2021.

## Cobalt Average

{{% cobalt-average-definition %}}

Learn more about the [Insights](/platform-deep-dive/assets/insights/) page and using this [metric](/platform-deep-dive/assets/insights/#charts) to analyze your assets.

## Cobalt Users

When using the Cobalt platform, you may encounter a variety of user roles. Review a list of permissions associated with each role in [User Roles and Permissions](/platform-deep-dive/collaboration/user-roles/).

<!-- Per https://zombie.atlassian.net/browse/DOCS-5 I should add info from an internal
spreadsheet, but need to find pull code in Hugo -->

### Pentest Team Member

{{% team-member-definition %}}

Learn more about the [permissions](/platform-deep-dive/collaboration/user-roles/#pentest-team-member) associated with this role.

A Pentest Team Member does not have to be an [Organization Owner](#organization-owner) or an [Organization Member](#organization-member).

### Organization Owner

{{% org-owner-definition %}}

Learn more about the [permissions](/platform-deep-dive/collaboration/user-roles/#organization-owner) associated with this role.

An Organization Owner may also be a [Pentest Team Member](#pentest-team-member).

### Organization Member

{{% org-member-definition %}}

Learn more about the [permissions](/platform-deep-dive/collaboration/user-roles/#organization-member) associated with this role.

An Organization Member may also be a [Pentest Team Member](#pentest-team-member).

### Pentester

{{% pentester-definition %}} Learn more about the [Pentester role](/platform-deep-dive/collaboration/user-roles/#pentester).

### Pentest Lead

{{% pentest-lead-permissions %}}

### In-House Pentester

{{% in-house-pentester-definition %}} An In-House Pentester role has the same privileges as a [Pentest Team Member](#pentest-team-member), with additional access to pentester functionality.

A customer can invite pentesters from their organization, a third-party company, or both to complete In-House Pentests on the Cobalt [Pentest Management Platform (PMP)](/pmp/).

### Cobalt Staff

{{% cobalt-staff-permissions %}}

## Common Platform Enumeration (CPE)

As defined by [NIST](https://nvd.nist.gov/products/cpe), Common Platform Enumeration (CPE) is a structured naming scheme for information technology systems, software, and packages. The official [CPE Dictionary](https://nvd.nist.gov/products/cpe) is hosted and maintained by NIST.

## Compliance Audit

As [defined](https://csrc.nist.gov/glossary/term/compliance_audit) by NIST, a comprehensive review of an organization's adherence to governing documents such as whether:

- A Certification Practice Statement satisfies the requirements of a Certificate Policy
- An organization adheres to its Certification Practice Statement

## Customer Letter

{{% customer-letter %}}

{{% learn-more-reports %}}

## Dynamic Web Page

A web page with dynamic content that a user can interact with. The content can be built on the server or the client side. Contrast with [Static Web Pages](#static-web-page).

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

## Gray-Box Testing

Where the pentester has limited knowledge of the internal details of the asset. Contrast
with [white-box](#white-box-testing) and [black-box testing](#black-box-testing).

Also known as "translucent-box testing."

## Graylisting

Graylisting is a method of protecting email users from spam. A Mail Transfer Agent (MTA) using graylisting temporarily rejects emails from senders that they don't recognize. The originating server tries to resend the email after a delay. If the email is legitimate, the MTA accepts it.

## In-House Pentest

{{% in-house-pentest-definition %}} You can launch In-House Pentests using the [Pentest Management Platform (PMP)](/pmp/).

## Jump Box

Also known as a jump host or a jump server, a jump box is a system (typically) on an internal
network or a DMZ. Jump boxes are used to access and manage devices in a separate security zone.

Where the pentester has limited knowledge of the internal details of the asset. Contrast
with [white-box](#white-box-testing) and [black-box testing](#black-box-testing).

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

## Pentest Tag

Pentest identifier on the Cobalt platform that starts with `#`. You can see the tag on the pentest page under the title.

![Pentest tag](/gsg/pentest-tag.png "Pentest tag")

## Projects (Cloud Assets)

All resources included in your cloud [asset](#asset). For example, [AWS defines a project](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/create-project.html) as a collection of resources associated with an asset.

## PtaaS Pentest

A pentest that [Cobalt pentesters](#pentester) perform on the Cobalt [Pentest as a Service (PtaaS)](#pentest-as-a-service-ptaas) platform for a customer. This includes the following pentest types:

- [Agile Pentest](#agile-pentest)
- [Comprehensive Pentest](#comprehensive-pentest)

Contrast with [In-House Pentest](#in-house-pentest) that a customer runs on the Cobalt [Pentest Management Platform (PMP)](/pmp/) with their [In-House Pentesters](#in-house-pentester).

### Agile Pentest

{{% agile-pentest %}}. Learn more about the [pentest types](/platform-deep-dive/pentests/pentest-types/).

You may want an Agile Pentest for:

- Recent code changes, such as after a sprint or before a release
- Specific subsets of your asset, such as:
  - A single feature such as a new RESTful [API endpoint](#api-endpoint)
  - One microservice
- You can also use an Agile Pentest to test:
  - A single OWASP or OSSTMM category
  - A specific issue, such as a [known vulnerability](#known-vulnerability)

### Comprehensive Pentest

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

## SAML Single Sign-on (SSO)

{{% sso-definition %}}

SSO based on the [SAML](#security-assertion-markup-language) 2.0 protocol works by passing authentication data in the form of digitally signed XML files (assertions) between two systems: a service provider (SP) and an identity provider (IdP).

- A **service provider** requests authentication assertions from the identity provider.
- An **identity provider** sends authentication assertions to the service provider once the user's identity is confirmed.

Depending on where the authentication workflow starts, SAML SSO can be of the following types:

- [Service provider-initiated (SP-initiated) SSO](#sp-initiated-sso)
- [Identity provider-initiated (IdP-initiated) SSO](#idp-initiated-sso)

SAML SSO provides a secure experience because user credentials are never transmitted during authentication.

### SP-Initiated SSO

In the service provider-initiated (SP-initiated) [SAML SSO](#saml-single-sign-on-sso), the authentication workflow starts on the service provider side.

- When a user signs in to the service provider system, the service provider sends an authentication request to the identity provider.
- Once the IdP has authenticated the user's identity, the user is signed in to the service provider system.

### IdP-Initiated SSO

In the identity provider-initiated (IdP-initiated) [SAML SSO](#saml-single-sign-on-sso), the authentication workflow starts on the identity provider side.

- First, a user signs in to the identity provider system, such as Okta, OneLogin, or Microsoft Azure AD.
- The user selects the app configured for their service provider in the IdP system or follows a unique URL.
- The service provider requests the IdP to authenticate the user.
- Once the user's identity is authenticated on the IdP side, the user is signed in to the service provider system.

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

Contrast with [Traditional Web Application](#traditional-web-application).

## Specialized Pentest

A Specialized pentest that you see in the Cobalt UI is a pentest engagement conducted by the Cobalt [Professional Services](https://www.cobalt.io/services/cybersecurity-consulting) team.

Learn more about [Professional Services pentests](/professional-services/).

## Static Web Page

A web page with static content that doesn't change depending on the user or location. Contrast with [Dynamic Web Pages](#dynamic-web-page).

## Traditional Web Application

A web application that consists of a web browser on the client side and a web server. Most of the application logic is performed on the server side.

May also be referred to as **multi-page application (MPA)**. Contrast with [Single-Page Application](#single-page-application).

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

## White-Box Testing

Where the pentester has full knowledge of the internal details of the asset. Contrast
with [black-box](#black-box-testing) and [gray-box testing](#gray-box-testing).

Also known as "clear-box testing."

## References

- [ISO/IEC 27000:2018](https://www.iso.org/obp/ui/#iso:std:iso-iec:27000:ed-5:v1:en)
- The [Internet Security Glossary](https://datatracker.ietf.org/doc/html/rfc4949#section-4)
- The Computer Security Resource Center [Glossary](https://csrc.nist.gov/glossary)
- The [Cybersecurity Glossary](https://niccs.cisa.gov/about-niccs/cybersecurity-glossary) of the
  US Cybersecurity and Infrastructure Security Agency
- [Canadian Centre for Cyber Security](https://cyber.gc.ca/en/guidance/cyber-threat-and-cyber-threat-actors)
