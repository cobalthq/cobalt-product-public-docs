---
title: "Domains"
linkTitle: "Domains"
weight: 40
description: >
  Domains (Beta) – Attack Surface Discovery.
---

{{% pageinfo %}}
Scan your Domains to discover Hosts.
{{% /pageinfo %}}

One of the largest cybersecurity challenges for enterprises today is understanding their complete attack surface and its risk posture. Oftentimes, organizations may have publicly discoverable assets that they didn’t previously know about, leaving them exposed to attack. 

Domains is an experimental attack surface discovery/monitoring (ASM) feature to help customers understand what Hosts under their Domains are externally reachable, ensuring that all assets in their environment can be properly secured.

Domains will be launched with basic functionality that allows customers to see hosts under their Domains. Ultimately, Domains will grow in feature richness to accommodate for use cases such as:

- Risks related to Hosts, e.g. risk for subdomain takeover
- Auto-enumerating Domains from DNS providers (e.g. Route53, Cloudflare, etc)
- Associate Domains/hosts with Assets / Pentests / Findings
- Scan related URLs for vulnerabilities (DAST)
- Weekly updates on new hosts in your attack surface

## How to use the Domains feature

Go to the Domains (Beta) tab in the main left navigation menu

Here you can see the Domains that have already been added, and also you can add more Domains.

For the Domains already added you can see the Scan status and how many Host have been discovered. You can use the side kebab menu to delete/remove Domains from the list.

![List_of_domains](/deepdive/listofdomains.png "List_of_domains")

Use the “Add Domain” button to add a new Domain.

When entering a Domain, please confirm that the Domain is associated with your Organization.

When a Domain is added, Cobalt will start a scan searching for Hosts on the Domain. 

Cobalt will consecutively run daily scans on all Domains in the Domains list. 

![Scan a domain](/deepdive/scanadomain.png "Scan a Domain")

When the scan has been completed, typically after a few minutes, you see the discovered hosts by clicking on the Domain in the Domains list.

At a glance you can see all hosts, their Status, when the IP was first seen by a scan, and the last pentest where the Host was included in the scope/targets.

![Hosts](/deepdive/hosts.png "List of Hosts")

You can click on a Host to see more details about the resolved IP address and open ports. Currently the scan does not support IPv6. The following ports are scanned: 43, 80, 8080, 20, 21, 22, 139, 137, 445, 53, 8443, 23, 25, 69

These results are for the past seven days to avoid being affected by short-term network issues.

![Ips and Ports](/deepdive/ipsandports.png "IPs and Ports")

Hosts are shown with the following 3 statuses:

- Open: The host has a resolvable IP and open ports
- No Ports: The host has a resolvable IP, but no open ports
- Unused: There is no resolvable IP address

You can Search for Hosts, Filter by Status and Filter by date for when the Host was first seen.

Filtering for the date can be helpful e.g. if you want to surface only Host that have been discovered within the last week.

![Search](/deepdive/search.png "Search")
