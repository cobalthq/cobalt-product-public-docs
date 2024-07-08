---
title: "Attack Surface"
linkTitle: "Attack Surface"
weight: 40
description: >
  Attack Surface Discovery and Monitoring.
aliases:
- domains
---

{{% pageinfo %}}
Scan your Domains to discover Targets.
{{% /pageinfo %}}

One of the largest cybersecurity challenges for enterprises today is understanding their complete attack surface and its risk posture. Oftentimes, organizations may have publicly discoverable assets that they didn’t previously know about, leaving them exposed to attack.

Attack Surface is an attack surface discovery/monitoring (ASM) feature to help customers understand what Targets under their Domains are externally reachable, ensuring that all assets in their environment can be properly secured.

Attack Surface was launched with basic functionality that allows customers to see targets under their Domains. Ultimately, Domains will grow in feature richness to accommodate for use cases such as:

- Risks related to Targets, e.g. risk for subdomain takeover
- Auto-enumerating Domains from DNS providers (e.g. Route53, Cloudflare, etc)
- Associate Domains/Targets with Assets / Pentests / Findings
- Scan related URLs for vulnerabilities (DAST)
- Weekly updates on new targets in your attack surface

## How to use the Attack Surface feature

Go to the Attack Surface tab in the main left navigation menu

Here you can see the Domains that have already been added, and also you can add more Domains.

For the Domains already added you can see the Scan status and how many Targets have been discovered. You can use the side kebab menu to delete/remove Domains from the list.

![List_of_domains](/deepdive/listofdomains.png "List_of_domains")

Use the “Add Domain” button to add a new Domain.

When entering a Domain, please confirm that the Domain is associated with your Organization.

When a Domain is added, Cobalt will start a scan searching for Targets on the Domain.

Cobalt will consecutively run daily scans on all Domains in the Domains list.

![Scan a domain](/deepdive/scanadomain.png "Scan a Domain")

When the scan has been completed, typically after a few minutes, you see the discovered targets by clicking on the Domain in the Domains list.

At a glance you can see all targets, their Status, when the IP was first seen by a scan, and the last pentest where the Target was included in the scope/targets.

![Targets](/deepdive/targets.png "List of Targets")

You can click on a Target to see more details about the resolved IP address and open ports. Currently, the scan does not support IPv6. The following ports are scanned: 43, 80, 8080, 20, 21, 22, 139, 137, 445, 53, 8443, 23, 25, 69

These results are for the past seven days to avoid being affected by short-term network issues.

![Ips and Ports](/deepdive/ipsandports.png "IPs and Ports")

Targets are shown with the following 3 statuses:

- Open: The target has a resolvable IP and open ports
- No Ports: The target has a resolvable IP, but no open ports
- Unused: There is no resolvable IP address

You can Search for Targets, Filter by Status and Filter by date for when the Target was first seen.

Filtering for the date can be helpful e.g. if you want to surface only Targets that have been discovered within the last week.

![Search](/deepdive/search.png "Search")

## The Attack Surface Scan

The Attack Surface Scan is a critical component of our security suite designed to identify and evaluate potential vulnerabilities within the exposed elements of your network. By scanning discovered Targets, we ensure that your attack surface remains secure against a variety of threats.

### Types of Findings

Our comprehensive scan checks for vulnerabilities across the following types of findings:

- **Credentials Disclosure**: Detects exposed credentials within files that could compromise system security.
- **Generic Tokens**: Uncovers usage of generic tokens that may lead to security breaches.
- **Weak Cipher Suites**: Evaluates the strength of cipher suites in use, flagging those that are outdated or vulnerable.
- **Missing Security Headers**: Assesses the presence of critical security headers that help protect against common web vulnerabilities.
  - `cross-origin-resource-policy`
  - `cross-origin-opener-policy`
  - `cross-origin-embedder-policy`
  - `clear-site-data`
  - `referrer-policy`
  - `x-permitted-cross-domain-policies`
  - `x-content-type-options`
  - `x-frame-options`
  - `permissions-policy`
  - `content-security-policy`
  - `strict-transport-security`
- **Takeover Risk**: Identifies potential vectors for unauthorized control of system components.
  - `No Ports` The IP of this target seems to be offline as it does not react to any port.
  - `Forward Without IP` This target refers to another domain by a CNAME, MX, or NS DNS record which does not resolve to any IP.
  - `Forward With HTTP Error` This target refers to a website or API by a CNAME DNS record which did not respond successfully.
  - `Forward With SMTP Error` This target refers to an SMTP server by an MX DNS record which did not respond successfully.
  - `Forward With DNS Error` This target refers to a DNS server by an NS DNS record which did not respond successfully.

The above list of supported scans was last edited on June 26th 2024, and will be updated as new scans are added

Note: If additional scan coverage is needed, please consider a Cobalt DAST scan. The DAST scan is much more thorough, and allows for both API scans and authenticated scans.
