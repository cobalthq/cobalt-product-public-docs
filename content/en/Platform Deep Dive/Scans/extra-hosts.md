---
title: "Extra Hosts"
linkTitle: "Extra Hosts"
weight: 40
description: >
  Add extra hosts to include further domains in Web Application scans.
---

## Description

{{% image src="/deepdive/scans/extra-hosts/ExtraHosts_List.png" alt="Extra Hosts page" %}}

An extra host serves the purpose of including non-origin domains in the scope of a Web target's scan. 
Oftentimes, a web application will send requests to a domain that's different from where it was loaded from. By default, those interactions won't be taken into account when scanning for vulnerabilities. However, if these domains are specified as extra hosts, they will be included by the scanner.
> Example: If your target is a Single-Page App (SPA), this could be a problem. In a SPA, the web app is pretty much built in Javascript, and the server-side application is invoked via an API. Sometimes, this API sits under app.example.com/api, but it's very frequent to see the API on a dedicated host, such as api.example.com.

## Configuration

{{% image src="/deepdive/scans/extra-hosts/ExtraHosts_Create.png" alt="Extra Hosts form" %}}

Every extra host needs to have a domain, which should not include a protocol. It's important for the domain to consist of a FQDN and an optional subdomain. During submission, the domain will be checked for reachability. If the domain is not reachable an error will show and prevent the extra host from getting created.

Extra hosts can be configured similarly to API targets, although the options are more restricted. If needed, an extra host can be provided with custom headers and cookies. These can be used for any kind of purpose, ranging from authentication to security requirements.

{{% image src="/deepdive/scans/extra-hosts/ExtraHosts_CustomHeaders.png" alt= "Custom Header" %}}

{{% image src="/deepdive/scans/extra-hosts/ExtraHosts_CustomCookies.png" alt= "Custom Cookies" %}}

Both headers and cookies can be removed by clicking on the trash icon next to every entry. 
Since removing these may negatively impact future scan results, there's a confirmation step required for every removal.