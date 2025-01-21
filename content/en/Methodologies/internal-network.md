---
title: "Internal Network Penetration Testing Methodology"
linkTitle: "Internal Network Methodologies"
weight: 150
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

Penetration testing of an internal network includes the following stages:
- Service discovery (#service-discovery)
- Vulnerability scans (#vulnerability-scans)
- Manual assessment (#manual-assessment)
- Additional testing
- Reporting, triaging, and retesting (#reporting-triaging-and-retesting)
  
{{% alert title="Note" color="primary" %}}
{{% various-tools %}}
{{% /alert %}}

## Prerequisites

{{% internal-network-requirements %}}

{{% alert title="Note" color="primary" %}}
{{% internal-network-system-req %}}
{{% /alert %}}

## Service Discovery

### Port Scans

Pentesters perform a complete port scan on the provided internal network ranges. This provides a detailed breakdown of the machines and services running inside the corporate network and what functions they perform.

Based on the results of the initial port scan, Cobalt’s pentesters identified the following:

- Host discovery
- Port identification
- Version numbers for services running
- Operating Systems (OS) in use

For example, the following services require access to the network to function:
- File servers
- Mail servers
- Web servers
- Network attached devices (Printers and phones)
- FTP servers
- Active Directory (AD) servers and clients

All of these services leave characteristic signatures that a port scan can detect.

{{% alert title="Tools" color="primary" %}}
During this testing phase, pentesters use multiple tools, such as:

- Nmap
- Masscan
{{% /alert %}}


## Vulnerability Scans

Cobalt’s pentesters perform vulnerability scans to provide a comprehensive test. This phase of the test is to look for cracks in the internal network that the pentester can later attempt to exploit. The following vulnerabilities are often found when performing vulnerability scans:

- Identifying misconfigurations, such as default passwords and weak permissions
- Detecting outdated software and OS
- Identifying the use of insecure network services
- Weak encryption methods 

Note: Exploitation of these vulnerabilities does not occur in this phase of the test.

{{% alert title="Tools" color="primary" %}}
During this testing phase, pentesters use multiple tools, such as:

- Nessus
- QualysGuard
- Metasploit
- Nikto
- InsightVM
{{% /alert %}}

## Manual Assessment

{{% network-manual-intro %}}

{{% network-manual-list %}}
- Web/FTP/Email/DNS servers
- Active Directory (AD) servers and all associated clients
- Domain Controllers (DC)
- Network attached devices
- SMB servers and file servers
- Other services that are in place on the internal IP address range

Note: As certain vulnerabilities and exploits could paralyze, damage, or alter the content of the network, Cobalt’s pentesters do not perform these attacks. They do make note of the possible risks. For example, Cobalt’s pentesters will not run exploits that:

- Disable certain services.
- Deny service from outside systems.
- May affect customers, such as Denial of Service (DoS) attacks.
- Disable the ability of an organization to function.

### Active Directory Environments

AD is an identity and access management solution. Organizations use this service on Windows domain networks and other OS.

Depending on the configuration and patch level, a pentester might find a path to take over the corporate network by compromising the Domain Controller (DC).

Some key areas that Cobalt’s pentesters might focus on during Active Directory testing are:

- Weak password policies
- Old or weak protocols
- Kerberos vulnerabilities
- Use of cached or cleartext credentials
- Misconfigured trust relationships
- ACDS misconfigured permissions

During the AD phase of the engagement, Cobalt’s pentesters will coordinate with your team to perform password spraying attacks. Please note that you can opt out of this.

### SMB Testing

Server Message Block (SMB) is a communication protocol that enables communication between computers and devices over a network. SMB is commonly used for file sharing, printer access, and domain services.

Cobalt’s pentesters enumerate SMB servers and attempt to exploit common vulnerabilities, such as:

- SMB message signing disabled
- Missing critical patches
- Null sessions 
- SMB file shares with weak or missing authentication
- SMB relay attacks
- Insecure SMB encryption

### Web and FTP Servers

Web servers are vulnerable to defacement attacks, or could be used as a launching pad for further attacks against hosts based locally to the web server.

Cobalt’s pentesters scan all web and FTP servers in the internal network for potential exploits and vulnerabilities, such as:

- Poor patching policy
- Default installation
- Insecure credentials

### Email Servers
Cobalt’s pentesters check SMTP, POP3, and IMAP on the mail gateway for open relay vulnerabilities. Your mail servers should:

- Accept mail _only_ for the organization’s domains.
- Not relay mail for other domains.

### Network Attached Devices
Printers inside corporate networks can be shared with the entire organization and may be a member of an AD network. These devices may use insecure default credentials or be vulnerable to web application attacks.

VOIP phones are a common presence on an internal network and can be vulnerable to misconfigurations, SIP vulnerabilities, and outdated firmware that may allow remote code execution (RCE).

Cobalt’s pentesters test printers and phones against all common attacks and make sure that they use secure credentials.

### Password Cracking
During an AD engagement, a pentester may perform offline password cracking against hashes obtained during the engagement. Some common techniques of obtaining hashes include:

- Conducting LLMNR/NBNS poisoning attacks
- Extracting NTDS.dit databases
- Performing Kerberoasting attacks
- Performing AS-REP roasting attacks
- Dumping SAM databases
- Performing attacks with Mimikatz
- Password cracking will allow Cobalt’s pentesters to escalate privileges and move laterally within the network.

{{% alert title="Tools" color="primary" %}}
During this testing phase, pentesters use multiple tools, such as:

- Ettercap
- Metasploit
- Nmap
- Responder
- Impacket
{{% /alert %}}

## Reporting, Triaging, and Retesting

{{% report-triage-retest %}}
