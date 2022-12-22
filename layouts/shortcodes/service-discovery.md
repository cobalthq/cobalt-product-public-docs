After gathering all available information, our pentesters probe the resources associated
with your asset. These tests involve several stages:

### Port Scans

Our pentesters start with complete port scans on the IP address ranges for your asset. From
this information, our pentesters can identify networked systems and resources, along with
their functionality. For example, the following services require access to the outside world:

- Firewalls
- Email servers
- Office 365 servers
- Web servers
- FTP servers
- More

Other services are common on internal networks, including:

- Antivirus
- Backup servers
- Email servers
- File servers
- Monitoring systems
- Web servers
- FTP servers
- Patch management services
- Printers
- Active Directory servers / clients
- More

All of these services leave characteristic signatures on a port scan.

### Beyond Port Scans

Based on the initial port scan, our pentesters work to identify:

- Applications running on externally exposed machines
- Version numbers for identified software and Operating Systems (OS)

In some cases, exposed hosts may have unused open services that our pentesters may try to access.

### Payment Card Industry (PCI) Digital Security Standard (DSS)

If needed, our pentesters check the network segmentation required to comply with
Payment Card Industry (PCI) Digital Security Standard (DSS) standards. This includes:

- Checking whether out-of-scope systems are blocked from systems in the Cardholder Data Environment (CDE)
- Any potential impact to the security of the CDE.

### Our Pentesters Use Caution

As certain vulnerabilities and exploits could paralyze, damage, or alter the content of the
network, our pentesters do not perform these attacks. They do make note of the possible risks.

For example, our pentesters won't run exploits that:

- Disable certain services
- Deny service from outside systems
- May affect customers (such as with a Denial of Service (DoS) attack)

Our pentesters do not disable the ability of your organization to function.

### Tools

Our pentesters may use the following service discovery tools (and more):

- Nmap
- Nikto
- Aquatone
- Metasploit
- Eyewitness
- Nessus
- testssl.sh
