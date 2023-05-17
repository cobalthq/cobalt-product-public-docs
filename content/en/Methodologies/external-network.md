---
title: "External Network Pentests"
linkTitle: "External Network Methodologies"
weight: 130
description: >
  Review methodologies for External Networks. Includes instances of Microsoft Office 365.
aliases:
    - /getting-started/pentest-objectives/methodologies/external-network/
    - /platform-deep-dive/pentests/pentest-process/methodologies/external-network/
---

{{% pageinfo %}}
{{% pentest-rigor %}}
{{% /pageinfo %}}

We use the penetration testing methodologies listed on the page. If you want to know more
about each methodology, navigate to the page associated with your asset.

## External Networks

The Cobalt team of pentesters can proceed with a minimum of information, such as the IP addresses
in question. However, you can include the following details in the scope of your desired pentest:

- Network diagrams
- Infrastructure diagrams
- Accounts (even temporary accounts for pentests)
- User information

When you set up a pentest for an external network asset in the UI, you'll see the following in the
**Objectives** text box:

```
Coverage of OSSTMM and SANS top 20 security controls.
```

Learn more about these objectives:

- [Open Source Security Testing Methodology Manual (OSSTMM)](https://www.isecom.org/OSSTMM.3.pdf) (PDF)
- SANS Top 20 Security Controls [CIS Controls v8](https://www.sans.org/blog/cis-controls-v8/)

### Methodology Details

We follow an industry standard methodology primarily based on the OSSTMM standard for
penetration testing. Our team takes the following steps to ensure full coverage:

Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key for more information on each step.

{{% expand "Target scope reconnaissance" %}}
</br>
Our pentesters search for all information that a malicious user might find. For example, to
connect to the internet, you typically have shared some information. For example:

- To receive email, you need to post a mail server address
- To set up a web server, you need to post its URL and more

Our pentesters may go further in the following areas:

**Your Corporate Website**

Our pentesters evaluate your website in ways that could interest a potential attacker, including:

- Locations (URLs)
- Contact details (such as phone numbers, email, and physical addresses)
- Domain information
- Links to other servers within an organization
- Other companies with links to your website
- Information on the security policy of your organization 

**Other Web Locations and Databases**

Our pentesters search for information on your asset from other websites and databases. They
focus on information from publicly traded companies. They'll evaluate the public information
that they find, including the information that goes beyond what's required by local laws.

They also evaluate news articles and press releases for more clues about your security policy.

**Your Domain Names**

Our pentesters use "whois" databases to identify the domains that you own. These domains
provide information about your network infrastructure.

**Public Records**

Public records, such as those available on "whois" databases, may include the:

- Name
- Address
- Telephone number

Attackers may use social engineering to get extra information. They may look for details such as purchase of hardware and software.

**Tools**

Our pentesters use tools such as:

- Shodan
- Censys.io

With these tools, they can find:

- IP addresses
- Attached networks
- Open ports
- Webcams
- Printers
- Other devices connected to your network

With this information, our pentesters can identify potential weaknesses, including:

- Accidental leaks of sensitive information
- Open network ports
- Unsecured network devices
- Unpatched software
- Leaked or exposed assets on [pastebins](https://pastebin.com/)

{{% /expand %}}


{{% expand "Service discovery" %}}
</br>

After gathering all available information, our pentesters probe the resources associated
with your asset. These tests involve several stages:

**Port Scans**

Our pentesters start with complete port scans on the IP address ranges for your asset. From
this information, our pentesters can identify public-facing machines and resources, along with
their functionality. For example, the following services require access to the outside world:

- Firewalls
- Mail servers
- Office 365 servers
- Web servers
- FTP servers
- More

All of these services leave characteristic signatures on a port scan.

**Beyond Port Scans**

Based on the initial port scan, our pentesters work to identify:

- Applications running on externally exposed machines
- Version numbers for identified software and Operating Systems (OS)

In some cases, exposed hosts may have unused open services that our pentesters may try to access.

**Our Pentesters Use Caution**

As certain vulnerabilities and exploits could paralyze, damage, or alter the content of the
network, our pentesters do not perform these attacks. They do make note of the possible risks.

For example, our pentesters won't run exploits that:

- Disable certain services
- Deny service from outside systems
- May affect customers (such as with a Denial of Service (DoS) attack)

Our pentesters do not disable the ability of your organization to function.

**Tools**

Our pentesters may use the following service discovery tools (and more):

- Nmap
- Aquatone
- Eyewitness
- testssl.sh

{{% /expand %}}

{{% expand "Vulnerability scans" %}}
</br>

Our pentesters follow up by identifying vulnerabilities in the external-facing portion of the
network. Their goal is to penetrate external endpoints, in a way that allows access to the
internal network and organization resources. 

If a potential attacker achieves this goal, an organization could face: 

- Leaks of sensitive or confidential information being leaked from the organization's network. Such leaks could include:
  - Personnel records
  - Payment data
  - Other financial records
<br>
- Attackers who use the mail gateway or website as the source of spam:
  - This could lead to others who blacklist the domain of the organization
  - Others could reject legitimate emails from the organization
<br>
- Defacing of the website. Attackers may even substitute their own version of the website where current or potential customers sign in.
  - The organization could lose credibility or even potential customers
<br>
- Service disruptions. Such attacks could disrupt or disable services.

**Tools**

Our pentesters may use the following service discovery tools (and more):

- Metasploit
- Nessus
- Nmap
- Burp Suite Community/Professional
- Nikto

{{% /expand %}}

{{% expand "Manual assessment. Includes DNS, routers, firewalls, web, email, and more" %}}
</br>

During manual assessment, our pentesters focus on specific identified resources associated with your external network.
In most cases, we focus on visibly open services related to:

- Web
- FTP
- Email (incoming and outgoing)
- Firewalls
- Routers
- DNS servers
- Other services that are in place on the external IP address range
  - Includes Office 365

While pentesters perform checks based on the specifics of a given situation, we share the following "typical" scenario:

**Domain Name System (DNS)**

Network users need the ability to query DNS servers. If you have your own DNS server, a failure could affect your internet connection.
If an attacker gets access to your DNS server, they could find out how:

- The domain sends and receives email
- Servers that support your website

One serious DNS configuration error would allow unknown internet users to perform a DNS zone transfer, which could allow attackers to access
more valuable information about your network.

**Routers**

All connections between networks and the Internet typically go through a border router managed by the Internet Service Provider (ISP).
We locate all visible routers, establish the manufacturer and operating system (OS), then check for potential vulnerabilities. Our tests include:

- Checking software, to make sure your routers are patched and up to date
- Default user accounts such as `admin`
- Attempts to access the router using various databases of well-known default passwords and settings

**Firewalls**

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

**Web Servers**

Web servers are vulnerable to defacement attacks, or could be used as a launching pad for further attacks against internal networks.
Our pentesters scan all web servers (client side) for potential exploits and vulnerabilities that could leave the door open for a potential
attacker, such as:

- Poor patching policy
- Default installation

**Email Servers**

Our pentesters check SMTP, POP3, and IMAP on the mail gateway for open relay vulnerabilities. Your mail servers should:

- Accept mail _only_ for the organization's domains
- Not relay mail for other domains

Attackers could exploit an open relay to flood the mail server with spam. Some ISPs blacklist domains which are known to send spam.

Our pentesters examine the mail server using a variety of methods, such as sending emails to non-existent domains.

**Remote Sites and Virtual Private Networks**

You may have set up a corporate network to connect to other offices over a VPN. While VPNs support secure communication, they may be vulnerable
to the same configuration problems as firewalls, because firewalls handle the VPN. If someone 
makes a mistake when they configure your VPN, that can lead to an attack vector to a
corporate network.

**Verifying Use of Secure Versions**

As researchers discover vulnerabilities and security flaws in software, software vendors release patches for their products. Our pentesters
search for outdated and unpatched versions of software. They run tests against published and patched exploits.

Older versions have lower security thresholds and leave data vulnerable. According to the [SANS Institute](https://www.sans.org/),
some of the most common vulnerabilities are based on outdated versions of Office 365. Cobalt can help you with that.

**Ensuring Security of Legacy Protocols**

Our pentesters can test legacy protocols such as POP3, IMAP, and SMTP for known vulnerabilities and security flaws.

**Tools**

Our pentesters may use the following service discovery tools (and more):

- Burp Suite Community/Professional
- Metasploit
- sqlmap
- Postman

{{% /expand %}}

![External network pentest flow](/gsg/ExternalNetworkPentest.png)

## Additional Requirements

{{% additional-requirements %}}
