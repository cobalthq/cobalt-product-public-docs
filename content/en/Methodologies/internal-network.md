---
title: "Internal Network Penetration Testing Methodology"
linkTitle: "Internal Network Methodologies"
weight: 140
description: >
  Review Cobalt pentest methodologies for internal networks.
aliases:
    - /getting-started/pentest-objectives/methodologies/internal-network/
    - /platform-deep-dive/pentests/pentest-process/methodologies/internal-network/
---

{{% pageinfo %}}
Internal network penetration testing is a process in which a tester uses simulated attacks to identify potential security vulnerabilities in an internal network.
{{% /pageinfo %}}

{{% osstmm-methodology %}}

![Internal network penetration testing methodology process](/methodologies/external-internal-network-pentest-methodology-process.png "Internal network penetration testing methodology process")

<!-- The diagrams for internal and external networks are identical, Aug 6, 2021. -->

Penetration testing of an external network includes the following stages:

{{% network-stages-toc %}}

{{% alert title="Note" color="primary" %}}
{{% various-tools %}}
{{% /alert %}}

{{% network-requirements %}}

## Prerequisites

{{% internal-network-requirements %}}

{{% alert title="Note" color="primary" %}}
{{% internal-network-system-req %}}
{{% /alert %}}

## Target Scope Reconnaissance

{{% network-recon-intro %}}

An attacker may have multiple avenues of exploration. Cobalt pentesters explore all of these avenues to gather information that an attacker could use to gain access to internal resources, such as:

- Brute-forcing credentials by using discovered company email formats
- Building password dictionaries containing public business information from the corporate website

{{% network-recon-list %}}

{{% alert title="Tools" color="primary" %}}
During this phase, pentesters use multiple reconnaissance scanning tools, such as:

- Nmap
- Nikto
- Shodan.io
{{% /alert %}}

## Service Discovery

{{% network-service-discovery-intro %}}

- [Port scans](#port-scans)
- [Testing for PCI](#testing-for-pci), if needed
- [Further investigation](#further-investigation)

{{% alert title="Tools" color="primary" %}}
During this phase, pentesters use multiple service discovery tools, such as:

- Nmap
- Nikto
- Metasploit
- Nessus
- testssl.sh
{{% /alert %}}

{{% network-service-discovery-limitations %}}

### Port Scans

Pentesters perform a complete port scan against the internal network ranges provided. This gives a detailed breakdown of the machines and resources running inside the corporate network and what functions they perform.

For example, the following services require access to the network to function:

- Antivirus
- Backup and file servers
- Mail servers
- Web and patch deployment servers
- Printers
- FTP servers
- Active Directory (AD) servers and clients

All of these services leave characteristic signatures that a port scan can detect.

### Testing for PCI

If needed, pentesters test the network segmentation required for the [Payment Card Industry (PCI) Digital Security Standard (DSS)](https://www.pcisecuritystandards.org/) compliance. This includes checking whether all out-of-scope systems are prevented from:

- Communicating with systems in the Cardholder Data Environment (CDE)
- Impacting the security of the CDE

### Further Investigation

{{% network-sd-further-investigation %}}

## Vulnerability Scans

Cobalt pentesters follow up by identifying vulnerabilities in the internal-facing portion of the network. Their goal is to penetrate internal endpoints and gain access to the organization's resources.

{{% network-vuln-scan-problems %}}

{{% alert title="Tools" color="primary" %}}
During this phase, pentesters use multiple vulnerability scanning tools, such as:

- Nessus
- Acunetix
- Metasploit
- Nexpose
{{% /alert %}}

## Manual Assessment

{{% network-manual-intro %}}

{{% network-manual-list %}}
- Azure Active Directory servers and all associated clients
- Printers
- File servers
- Other services that are in place on the internal IP address range

{{% network-manual-stages-intro %}}

- [Azure Active Directory networks](#azure-active-directory-networks)
- [Routers](#routers)
- [Firewalls](#firewalls)
- [Web and FTP servers](#web-and-ftp-servers)
- [Email servers](#email-servers)
- [Printers](#printers)

{{% alert title="Tools" color="primary" %}}
During this phase, pentesters use manual testing and exploitation tools, such as:

- Ettercap
- Metasploit
- sqlmap
- Responder
- hping3
{{% /alert %}}

### Azure Active Directory Networks

{{% azure-ad-definition %}} Organizations use this service on Windows domain networks.

Depending on the configuration and patch level, a pentester might find a path to take over the corporate network by compromising the Domain Controller (DC).

### Routers

{{% network-manual-routers %}}

### Firewalls

{{% network-manual-firewall %}}

### Web and FTP Servers

Web servers are vulnerable to defacement attacks, or could be used as a launching pad for further attacks against hosts based locally to the web server.

Cobalt pentesters scan all web and FTP servers in the internal network for potential exploits and vulnerabilities, such as:

- Poor patching policy
- Default installation
- Insecure credentials

### Email Servers

{{% network-manual-email %}}

### Printers

Printers inside corporate networks can be shared with the entire organization, and in some cases may be a member of an Azure AD network. These devices may use insecure default credentials or be vulnerable to web application attacks.

Our pentesters test printers against all common attacks and make sure that they use secure credentials.

## Additional Testing

{{% network-additional-testing %}}

## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}
