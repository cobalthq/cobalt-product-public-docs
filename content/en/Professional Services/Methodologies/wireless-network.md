---
title: "Wireless Network Penetration Testing Methodology"
linkTitle: "Wireless Network"
weight: 230
description: >
  Cobalt pentest methodology for wireless networks.
---

{{% pageinfo %}}
Learn how the Cobalt [Professional Services](/professional-services/) team tests wireless networks.
{{% /pageinfo %}}

The Cobalt Professional Services team carries out wireless testing services powered by [Hak5](https://hak5.org/). We follow an industry standard methodology primarily based on the Penetration and Testing Execution Standard (PTES) and National Institute of Standards and Technology (NIST) Technical Guide to Information Security Testing and Assessment ([NIST 800-115](https://csrc.nist.gov/publications/detail/sp/800-115/final)).

We perform the following steps to ensure full coverage:

- [Intelligence gathering](#intelligence-gathering)
- [Threat modeling and vulnerability analysis](#threat-modeling-and-vulnerability-analysis)
- [Exploitation](#exploitation)
- [Post-exploitation and reporting](#post-exploitation-and-reporting)

## Intelligence Gathering

During this phase, we collect in-range Service Set Identifiers (SSID) using automated and manual methods and tools such as:

- Aircrack
- Kismet
- Wireshark

Additional details that we collect include the following:

- Signal strength
- MAC address or BSSID
- Encryption
- Authentication
- Channels
- Any associated clients and their MAC addresses

## Threat Modeling and Vulnerability Analysis

During this phase, we use data that we obtained during [intelligence gathering](#intelligence-gathering) to identify viable attack vectors into the in-scope wireless networks. This includes:

- Creating a plan for exploitation of the in-scope wireless networks
- Gathering and modifying known and available exploits

## Exploitation

During this phase, we attempt to gain access to the wireless networks by:

- Bypassing security mechanisms
- Exploiting documented vulnerabilities and misconfigurations

This involves engagements such as:

- Capturing a four-way handshake
- Attempting to crack hashes offline utilizing GPUs
- "Evil twin" attacks
- Identifying rogue access points
- Detecting RF signal leakage outside the building (on-site only)
- Testing guest wireless portals

## Post-Exploitation and Reporting

During this phase, we do the following:

- Attempt to leverage any captured and cracked user credentials on the client's network.
- Perform a segmentation test from the guest wireless network to verify that guests are segmented from the client's corporate network.

After completing post-exploitation testing, we share a detailed report with all the current findings and remediation steps. We can also provide a heatmap for on-site engagements.
