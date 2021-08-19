---
title: "Glossary"
linkTitle: "Glossary"
weight: 100
description: >
 Learn more about the language of software security.
---

{{% pageinfo %}}
The [Internet Security Glossary](https://datatracker.ietf.org/doc/html/rfc4949#section-4) includes
terms defined by the Internet Engineering Task Force. Use this glossary to supplement your knowledge.
{{% /pageinfo %}}


## Allowlist

An allowlist explicitly lets identified systems access. In networks, an allowlist can specify IP
addresses. On many systems, you can find allowlists and denylists in files like
`/etc/hosts.allow` and `/etc/hosts.deny`.

## API Endpoint

An endpoint is typically a URL used to allow two software applications to communicate with each other.
For example, `https://api.cobalt.io/orgs` is one endpoint that you can find at `https://docs.cobalt.io`.

Some endpoints include additional information that may make them seem different. For example, the
following two URLs are in fact the same endpoint, as the content after the ampersand (&) describes an
action on data sent from that URL:

- https://www.example.com/endpoint1&_prettyPrint=true
- https://www.example.com/endpoint1&_prettyPrint=false

## Asset

For pentesting, an asset is a software component of value. Cobalt can perform pentests on assets in the
following categories:

{{% asset-categories %}}

## Application Security Verification Standard (ASVS)

The [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
relates to pentests of web application technical security controls.

## Black Box Testing

Where the pentester has no knowledge of the internal details of the asset. Contrast
with gray box and black box testing.

## CIS (Center for Internet Security)

The Center for Internet Security is an independent non-profit organization which develops and
refines best practice security solutions.

One of the test criteria used by our pentesters is [CIS Controls v8](https://www.cisecurity.org/controls/v8/),
released in 2021.

## Dynamic Page

Web applications typically include _static_ and _dynamic_ web pages. A Dynamic Page includes content
that can be customized, either through an application server (server-side) or through code such as
JavaScript running in the browser (client-side).

## Gray Box Testing

Where the pentester has limited knowledge of the internal details of the asset. Contrast
with white box and black box testing.

## Jump Box

Also known as a jump host or a jump server, a jump box is a system (typically) on an internal
network or a DMZ, used to access and manage devices in a separate security zone.

Where the pentester has limited knowledge of the internal details of the asset. Contrast
with white box and black box testing.

## Mobile Screen

A mobile screen is what you see on a mobile device, such as an iPhone or an Android system. As
described by [Codepath](https://guides.codepath.com/android/Mobile-Screen-Archetypes), mobile 
screens fall into several archetypes. 

You may have multiple screens of an archtype. For example, you may have 10 mobile screens for
the onboarding archtype.

## Open Web Application Security Project (OWASP)

[OWASP](https://owasp.org/) is a nonprofit foundation with "Top 10" security
issues for different asset types, including Web apps, APIs, and Cloud systems.

## Open Source Security Testing Methodology Manual (OSSTMM)

The [OSSTMM](https://www.isecom.org/OSSTMM.3.pdf) tests the operational security of physical
locations, human interactions, and all communications on the network, whether they be wireless,
wired, analog, or digital.

## Operations Security (OpSec)

Operations Security, commonly known as OpSec, identifes critical information, and if/how it
may be used by opponents or enemies. OpSec measures can reduce security risks.

## SANS Institute

Original sponsor of a set of standards for testing networks. SANS stands for SysAdmin, Audit,
Network, and Security. The SANS Top 20 has been migrated to CIS Controls Version 8.

## Single-page Application

For more information, see https://developer.mozilla.org/en-US/docs/Glossary/SPA

## User Role

A User Role specifies the permissions or privileges associated with a user. Common examples of User Roles include:

- Global Administrator (such as a UNIX root user)
- Administrator
- Group Owner
- Workspace Administrator
- Full User
- Guest

This is not a comprehensive list. When scoping an Asset, it's important to include a complete number of user roles. If you miss a user role, you may sacrifice quality in penetration testing. 

## White Box Testing

Where the pentester has full knowledge of the internal details of the asset. Contrast
with black box and gray box testing.


### Header 3

```
This is a code block following a header.
```
