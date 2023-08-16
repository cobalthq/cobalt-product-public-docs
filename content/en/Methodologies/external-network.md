---
title: "External Network Penetration Testing Methodology"
linkTitle: "External Network Methodologies"
weight: 130
description: >
  Review Cobalt pentest methodologies for external networks (includes instances of Microsoft Office 365).
aliases:
    - /getting-started/pentest-objectives/methodologies/external-network/
    - /platform-deep-dive/pentests/pentest-process/methodologies/external-network/
---

{{% pageinfo %}}
External network penetration testing is a process in which a tester uses simulated attacks to identify potential security vulnerabilities in an external network.
{{% /pageinfo %}}

We follow an industry-standard methodology primarily based on the [Open Source Security Testing Methodology Manual (OSSTMM)](https://www.isecom.org/OSSTMM.3.pdf).

![External network penetration testing methodology process](/methodologies/external-internal-network-pentest-methodology-process.png "External network penetration testing methodology process")

Penetration testing of an external network includes the following stages:

{{% network-stages-toc %}}

When testing Microsoft Office 365 instances, pentesters look into data security and encryption and verify access controls, in addition to testing the network that is hosting the services that are in scope.

{{% alert title="Note" color="primary" %}}
{{% various-tools %}}
{{% /alert %}}

{{% network-requirements %}}

## Target Scope Reconnaissance

{{% network-recon-intro %}}

{{% network-recon-list %}}

### Tools

During this testing phase, pentesters use multiple tools, such as:

- Nmap
- DirBuster
- Shodan
- Censys

With these tools, pentesters can find:

- IP addresses
- Networks
- Open ports
- Webcams
- Printers
- Other devices connected to the internet

With this information, our pentesters can identify potential weaknesses, such as:

- Accidental leaks of sensitive information
- Open network ports
- Unsecured network devices
- Unpatched software
- Leaked or exposed assets on [pastebins](https://pastebin.com/)

## Service Discovery

{{% network-service-discovery-intro %}}

- [Port scans](#port-scans)
- [Further investigation](#further-investigation)

{{% alert title="Tools" color="primary" %}}
During this testing phase, pentesters use multiple tools, such as:

- Nmap
- Aquatone
- EyeWitness
- testssl.sh
{{% /alert %}}

{{% network-service-discovery-limitations %}}

### Port Scans

Pentesters perform a complete port scan on the IP address ranges for your asset. From this information, pentesters can identify public-facing machines and resources, along with their functionality.

For example, the following services require access to the outside world to function:

- Firewalls
- Mail servers
- Office 365 servers
- Web servers
- FTP servers

All of these services leave characteristic signatures that a port scan can detect.

### Further Investigation

{{% network-sd-further-investigation %}}

## Vulnerability Scans

Cobalt pentesters follow up by identifying vulnerabilities in the external-facing portion of the network. Their goal is to penetrate external endpoints and gain access to the internal LAN and the organization's resources.

{{% network-vuln-scan-problems %}}
- Defacing of the website. Attackers may substitute their own version of the website where current or potential customers sign in. The organization could lose credibility or potential customers.

{{% alert title="Tools" color="primary" %}}
During this testing phase, pentesters use multiple tools, such as:

- Metasploit
- Nessus
- Nmap
- Burp Suite Community/Professional
- Nikto
{{% /alert %}}

## Manual Assessment

{{% network-manual-intro %}}

{{% network-manual-list %}}
- Other services that are in place on the external IP address range, including Office 365 services

{{% network-manual-stages-intro %}}

- [Domain Name System (DNS)](#domain-name-system-dns)
- [Routers](#routers)
- [Firewalls](#firewalls)
- [Web servers](#web-servers)
- [Email servers](#email-servers)
- [Remote sites and virtual private networks](#remote-sites-and-virtual-private-network-vpn)
- [Verifying the use of secure versions](#verifying-the-use-of-secure-versions)
- [Ensuring the security of legacy protocols](#ensuring-the-security-of-legacy-protocols)

{{% alert title="Tools" color="primary" %}}
During this testing phase, pentesters use multiple tools, such as:

- Burp Suite Community/Professional
- Metasploit
- sqlmap
- Postman
{{% /alert %}}

### Domain Name System (DNS)

For organizations to use the internet, their network users need the ability to query DNS servers. Some organizations have their own DNS server, and some rely on external DNS servers. If an organization's internal DNS server fails, this could cause their internet connection to go down.

Attackers may also obtain internal knowledge from a DNS server, such as:

- How the domain sends and receives email
- Website locations

Let's look at an example of a serious DNS configuration error that may occur. When an organization allows unknown internet users to perform a DNS zone transfer, an attacker may get access to valuable information about the network.

### Routers

{{% network-manual-routers %}}

### Firewalls

{{% network-manual-firewall %}}

### Web Servers

Web servers are vulnerable to defacement attacks, or could be used as a launching pad for further attacks against internal networks.

Cobalt pentesters scan all web servers (client side) for potential exploits and vulnerabilities, such as:

- Poor patching policy
- Default installation

### Email Servers

{{% network-manual-email %}}

### Remote Sites and Virtual Private Network (VPN)

Corporate network infrastructures may require connections to several other subsidiary offices around the globe over a VPN. While VPNs support secure communication, they may be vulnerable to the same configuration problems as firewalls, because firewalls handle the VPN.

An improperly configured VPN to a subsidiary site could be an attack vector to the main corporate network.

### Verifying the Use of Secure Versions

As researchers discover vulnerabilities and security flaws in software, software vendors release patches for their products. Our pentesters search for outdated and unpatched versions of software. They run tests against published and patched exploits.

Older versions have lower security thresholds and leave data vulnerable. According to the [SANS Institute](https://www.sans.org/), some of the most common vulnerabilities are based on outdated versions of Office 365. Cobalt can perform pentests for Office 365 instances.

### Ensuring the Security of Legacy Protocols

Cobalt pentesters can test legacy protocols such as POP3, IMAP, and SMTP for known vulnerabilities. They verify if the use of these protocols is secured against documented security flaws.

## Additional Testing

{{% network-additional-testing %}}

## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}
