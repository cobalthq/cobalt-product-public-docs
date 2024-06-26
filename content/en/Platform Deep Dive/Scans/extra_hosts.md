---
title: "Extra Hosts"
linkTitle: "Extra Hosts"
weight: 10
description: >
  An extra host is a non-origin domain that a Web Application sends requests to.
---

{{% pageinfo %}}
An extra host tells the scanner which additional domains to follow and create requests for
{{% /pageinfo %}}

## What is an Extra Host?

![Extra Hosts page](/deepdive/scans/extra-hosts/ExtraHosts_List.png "Extra Hosts page")

An extra host serves the purpose of including non-origin domains in the scope of a Web target's scan. 
Oftentimes, a web application will send requests to a domain that's different from where it was loaded from. By default, those interactions won't be taken into account when scanning for vulnerabilities. However, if these domains are specified as extra hosts, they will be included by the scanner.

![Extra Hosts form](/deepdive/scans/extra-hosts/ExtraHosts_Create.png "Extra Hosts form")

Every extra host needs to have a domain, which should not include a protocol. It's important for the domain to consist of a FQDN and an optional subdomain. During submission, the domain will be checked for reachability. If the domain is not reachable and error will show and prevent the extra host from getting created.

Extra hosts can be configured similarly to API targets, although the options are more restricted. If needed, an extra host can be provided with custom headers and cookies. These can be used for any kind of purpose, ranging from authentication to security requirements.

![Custom Header](/deepdive/scans/extra-hosts/ExtraHosts_CustomHeaders.png "Custom Header")

![Custom Cookies](/deepdive/scans/extra-hosts/ExtraHosts_CustomCookies.png "Custom Cookies")