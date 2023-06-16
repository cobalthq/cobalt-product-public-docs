---
title: "External Network Penetration Testing Methodology"
linkTitle: "External Network Methodologies"
weight: 130
description: >
  Review Cobalt pentest methodologies for external networks, including instances of Microsoft Office 365.
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

- [Target scope reconnaissance](#target-scope-reconnaissance)
- [Service discovery](#service-discovery)
- [Vulnerability scans](#vulnerability-scans)
- [Manual assessment](#manual-assessment)
- [Additional testing](#additional-testing)
- [Report, triage, and retest](#report-triage-and-retest)

The Cobalt security assessment team carries out testing **without** the following, unless it's required as part of the pentest scope:

- Detailed network or infrastructure diagrams
- Any accounts or additional user information

However, you're welcome to add network diagrams and other details when [describing your asset](/getting-started/assets/asset-description/).

## Target Scope Reconnaissance

Our pentesters search for all information that a malicious user might find. For example, to connect to the internet, you typically have shared some information:

- To receive email, you need to post a mail server address.
- To set up a web server, you need to post its URL and more.

Pentesters determine what information is available during this initial phase of testing. They examine the following:

- [Your corporate website](#your-corporate-website)
- [Other web locations and databases](#other-web-locations-and-databases)
- [Your domain names](#your-domain-names)
- [Public records](#public-records)

### Targets

#### Your Corporate Website

Our pentesters evaluate your website in ways that could interest a potential attacker, including:

- Locations (URLs)
- Contact details (such as phone numbers, email, and physical addresses)
- Domain information
- Links to other servers within an organization
- Other companies with links to your website
- Information on the security policy of your organization

#### Other Web Locations and Databases

Our pentesters search for information on your asset from other websites and databases, especially anything related to publicly traded companies.

Pentesters then evaluate what information the organization makes public, especially anything that goes beyond what's required by local laws. They also evaluate news articles and press releases for more clues about your security policy.

#### Your Domain Names

Our pentesters use "whois" databases to identify the domains that you own. These domains
provide information about your network infrastructure.

#### Public Records

Public records about your organization may include information about the people responsible for administering your domain, such as their:

- Name
- Address
- Telephone number

Attackers may use social engineering to get additional information, such as the details of hardware and software purchases. It also gives clues about where the best place to target an attack may be.

### Tools

During this phase, pentesters use multiple reconnaissance scanning tools, such as:

- Nmap
- DirBuster
- Shodan
- Censys.io

The tools that pentesters use may vary from test to test.

With these tools, pentesters can find:

- IP addresses
- Networks
- Open ports
- Webcams
- Printers
- Other devices connected to the internet

With this information, our pentesters can identify potential weaknesses, including:

- Accidental leaks of sensitive information
- Open network ports
- Unsecured network devices
- Unpatched software
- Leaked or exposed assets on [pastebins](https://pastebin.com/)

## Service Discovery

After gathering all available information, our pentesters probe the resources associated
with your asset. These tests involve several stages.

### Port Scans

Our pentesters start with complete port scans on the IP address ranges for your asset. From this information, our pentesters can identify public-facing machines and resources, along with their functionality. For example, the following services require access to the outside world:

- Firewalls
- Mail servers
- Office 365 servers
- Web servers
- FTP servers
- More

All of these services leave characteristic signatures on a port scan.

### Beyond Port Scans

Based on the results of the initial port scan, our pentesters work to identify:

- The types of applications running on externally exposed machines
- Version numbers for identified software
- Operating systems on which the software runs

In some cases, an externally exposed host may have open services that don't have functions associated with them. Pentesters can identify and target them for testing.

{{% alert title="Tools" color="primary" %}}
During this phase, pentesters use multiple service discovery tools, such as:

- Nmap
- Aquatone
- EyeWitness
- testssl.sh

The tools that pentesters use may vary from test to test.
{{% /alert %}}

As certain vulnerabilities and exploits could paralyze, damage, or alter the content of the network, our pentesters do not perform these attacks. They do make note of the possible risks. For example, our pentesters won't run exploits that:

- Disable certain services
- Deny service from outside systems
- May affect customers (such as with a Denial of Service (DoS) attack)
- Disable the ability of an organization to function

## Vulnerability Scans

Our pentesters follow up by identifying vulnerabilities in the external-facing portion of the network. Their goal is to penetrate external endpoints and gain access to the internal LAN and the organization's resources.

If a potential attacker achieves this goal, an organization could face:

- Leaks of sensitive or confidential information from the organization's network. Such leaks could include:
  - Personnel records
  - Payment data
  - Other financial records
- Attackers who use the mail gateway or website as the source of spam email. Other sites may blacklist the organization's domain and automatically reject legitimate email correspondence.
- Defacing of the website. Attackers may even substitute their own version of the website where current or potential customers sign in.
  - The organization could lose credibility or even potential customers.
- Service disruptions. Such attacks could put out of action organization's resources, either temporarily or permanently.

{{% alert title="Tools" color="primary" %}}
During this phase, pentesters use multiple vulnerability scanning tools, such as:

- Metasploit
- Nessus
- Nmap
- Burp Suite Community/Professional
- Nikto

The tools that pentesters use may vary from test to test.
{{% /alert %}}

## Manual Assessment

During manual assessment, our pentesters focus on specific identified resources associated with your external network. In most cases, pentesters focus on visibly open services related to:

- Web
- FTP
- Email (incoming and outgoing)
- Firewalls
- Routers
- DNS servers
- Other services that are in place on the external IP address range
  - Includes Office 365

While pentesters perform checks based on the specifics of a given situation, we share the following "typical" scenario:

### Domain Name System (DNS)

Network users need the ability to query DNS servers. If you have your own DNS server, a failure could affect your internet connection.
If an attacker gets access to your DNS server, they could find out how:

- The domain sends and receives email
- Servers that support your website

One serious DNS configuration error would allow unknown internet users to perform a DNS zone transfer, which could allow attackers to access more valuable information about your network.

### Routers

All connections between networks and the Internet typically go through a border router managed by the Internet Service Provider (ISP).
We locate all visible routers, establish the manufacturer and operating system (OS), then check for potential vulnerabilities. Our tests include:

- Checking software, to make sure your routers are patched and up to date
- Default user accounts such as `admin`
- Attempts to access the router using various databases of well-known default passwords and settings

### Firewalls

A firewall is designed to be the main gateway to an organization, with rules to protect internal resources. They are not an
"out-of-the-box" solution. Our pentesters look for:

- Firewalls that are configured for the specific needs of your business
- Firewall software that's up to date with patches and maintenance
- Configuration errors that could leave a path into the corporate LAN

Our pentesters test your firewall rules based on attacks, such as:

- Buffer overflows
- IP spoofing
- Corrupted IP packets
- Attacks against open services

### Web Servers

Web servers are vulnerable to defacement attacks, or could be used as a launching pad for further attacks against internal networks.
Our pentesters scan all web servers (client side) for potential exploits and vulnerabilities that could leave the door open for a potential
attacker, such as:

- Poor patching policy
- Default installation

### Email Servers

Our pentesters check SMTP, POP3, and IMAP on the mail gateway for open relay vulnerabilities. Your mail servers should:

- Accept mail _only_ for the organization's domains
- Not relay mail for other domains

Attackers could exploit an open relay to flood the mail server with spam. Some ISPs blacklist domains which are known to send spam.

Our pentesters examine the mail server using a variety of methods, such as sending emails to non-existent domains.

### Remote Sites and Virtual Private Networks

You may have set up a corporate network to connect to other offices over a VPN. While VPNs support secure communication, they may be vulnerable
to the same configuration problems as firewalls, because firewalls handle the VPN. If someone 
makes a mistake when they configure your VPN, that can lead to an attack vector to a
corporate network.

### Verifying Use of Secure Versions

As researchers discover vulnerabilities and security flaws in software, software vendors release patches for their products. Our pentesters
search for outdated and unpatched versions of software. They run tests against published and patched exploits.

Older versions have lower security thresholds and leave data vulnerable. According to the [SANS Institute](https://www.sans.org/),
some of the most common vulnerabilities are based on outdated versions of Office 365. Cobalt can help you with that.

### Ensuring Security of Legacy Protocols

Our pentesters can test legacy protocols such as POP3, IMAP, and SMTP for known vulnerabilities and security flaws.

{{% alert title="Tools" color="primary" %}}
During this phase, pentesters use manual testing and exploitation tools, such as:

- Burp Suite Community/Professional
- Metasploit
- sqlmap
- Postman

The tools that pentesters use may vary from test to test.
{{% /alert %}}

## Additional Testing

Cobalt pentesters use various custom and publicly available tools throughout a pentest, such as:

- Port scanners
- Automated vulnerability scanners
- HTTP proxies
- Exploits
- Custom scripts
- Security applications

## Report, Triage, and Retest

{{% report-triage-retest %}}
