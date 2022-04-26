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

## Allowlist

An allowlist explicitly lets identified systems access. In networks, an allowlist can specify IP
addresses. You can typically find allowlists and denylists in files like
`/etc/hosts.allow` and `/etc/hosts.deny`.

## API Endpoint

An endpoint is typically a URL used to allow two software applications to communicate with each other.
For example, `https://api.cobalt.io/orgs` is one endpoint that you can find at `https://docs.cobalt.io`.

Some endpoints include additional information that may make them seem different. For example, the
following two URLs are in fact the same endpoint, as the content after the ampersand (&) describes an
action on data sent from that URL:

- example.com/endpoint1&_prettyPrint=true
- example.com/endpoint1&_prettyPrint=false

## Asset

For pentests, an asset is a software component of value. Cobalt can perform pentests on assets in the
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

Sometimes also known as a Threat Actor, Malicious Hacker, "Black-hat Hacker," or "Cracker." May be 
an individual, a group, or even a nation-state. Specified as "attacker" in Cobalt pentest reports.

## Attestation Letter

{{% attestation-letter %}}

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
categories:

- Organization Roles: If you're a Cobalt customer, you may be an _Org Owner_, _Org Member_, or
  a _PT Team Member_.
- Pentester Roles: If you're a Cobalt pentester, you may be a _PT Pentester_ or a _PT Lead_.

Select Cobalt employees may be assigned as administrators, as _Cobalt Staff_.

### Org Member

An _Org Member_ is a user of the Cobalt App who can create an [asset](#asset) or a
[pentest](#pentest). That user can also see the pentesters who are working on their asset.
If allowed by their {{% ptaas-tier %}}, they can also manage integration with Jira and GitHub.

### Org Owner

An _Org Owner_ can also add/remove the users of their choice, by their email addresses, as
_Org Owner_ or _Org Member_. They can also manage the [Org Members](#org-member) assigned to a
specific pentest. If allowed by their {{% ptaas-tier %}}, they can also manage
[SAML](#security-assertion-markup-language) settings for the users in their organization.

### PT Team Member

A _PT Team Member_ is a customer representative during a pentest. That user can review and
respond to each [finding](#finding) identified by a Cobalt pentester.

### PT Lead

A _PT Lead_ is a Cobalt pentester who leads other Cobalt pentesters in their efforts to test
an asset. When applicable, the _PT Lead_ also drafts the [pentest report](#pentest-report).

### PT Pentester

A _PT Pentester_ is a Cobalt pentester whose working with a _PT Lead_ to test a specific asset.

### Cobalt Staff

Cobalt Staff members may help you manage the users in your organization. They may also help
manage work on your pentests.

## Dynamic Page

Web applications typically include _static_ and _dynamic_ web pages. A Dynamic Page includes content
that can be customized, either through an application server (server-side) or through code such as
JavaScript running in the browser (client-side).

## Environment

In the context of a Cobalt pentest, you can specify one of three options for an environment:

{{% environment %}}

## Finding

A potential security flaw in an app or physical hardware. We include findings in vulnerability
reports, as something that a threat actor can exploit.

When you select [Full Report + Finding Details](/getting-started/what-to-expect/report-contents/#appendix-a---finding-details),
we add a detailed list of findings to your report, which includes:

{{% finding-details %}}

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

A mobile screen is what you see on a mobile device, such as an iPhone or an Android system. As
described by [Codepath](https://guides.codepath.com/android/Mobile-Screen-Archetypes), mobile 
screens fall into several archetypes. 

You may have multiple screens of an archtype. For example, you may have 10 mobile screens for
the onboarding archtype.

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

## Org Owner

A Cobalt term for users who have top-level (sudo) administrative privileges for their organizations
in the Cobalt app.

## Pentest

Short for penetration test.

## Pentest as a Service (PtaaS)

Combines manual and human testing with a modern delivery platform to deploy
penetration testing programs. 

## Pentest Report

A summary of all vulnerability reports, including observations on positive security measures. Target audiences: executives, security engineers, and developers. Includes:

- Executive Summary 
  - Describes tests performed with criteria
- Executive Analysis
  - High-level summary of vulnerabilities
- Scope of Work
  - Target description
  - Environment
  - In-scope Testing Methodologies
  - Assumptions and Constraints
  - Test Methodologies
  - Web app-specific issues (endpoints, fuzzing)
  - Secure test cases
- Summary of Findings
  - Trends and critical issues
  - Auto-generated graphs
- Summary of Recommendations
  - Highlights of the work we recommend to remediate findings
- Post-Test Remediation
  - List of details with type, severity, state, and resolution
- Finding Details
  - More information on each finding

Within Cobalt, this is also known as a Report or a Final Report.

## Remediate

To fix a vulnerability identified by a pentest or incident report. Examples:

- Install a security update on an affected server
- Update directly affected code

Contrast with [mitigate](#mitigate). This reflects how we use **remediate** at
Cobalt, and differs slightly from the NIST definition of 
[remediation](https://csrc.nist.gov/glossary/term/remediation).

## Security Assertion Markup Language

As defined by the Organization for the Advancement of Structured Information Standards (OASIS),
the [Security Assertion Markup Language (SAML)](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=security)
"... is an XML-based framework for communicating user authentication, entitlement, and attribute
information. As its name suggests, SAML allows business entities to make assertions regarding
the identity, attributes, and entitlements of a subject (an entity that is often a human user)
to other entities, such as a partner company or another enterprise application.

## SANS Institute

Original sponsor of a set of standards for testing networks. SANS stands for SysAdmin, Audit,
Network, and Security. The SANS Top 20 has been migrated to CIS Controls Version 8.

## Single-Page Application

For more information, see https://developer.mozilla.org/en-US/docs/Glossary/SPA

## User Role

A User Role specifies the permissions or privileges associated with a user. Common examples of User Roles include:

- Global Administrator (such as a UNIX root user)
- Administrator
- Group Owner
- Workspace Administrator
- Full User
- Guest

This is not a comprehensive list. When scoping an Asset, include a complete list of user roles.
If you miss a user role, you may sacrifice quality in penetration testing. 

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
defined by the US Cybersecurity and Infrastructure Agency (CISA)

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
