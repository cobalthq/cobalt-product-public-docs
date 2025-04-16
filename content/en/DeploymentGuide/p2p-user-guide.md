---
title: "Deployment Guide"
linkTitle: "Deployment Guide"
weight: 800
no_list: true
description: >
  Cobalt Pentest Image User Guide
---

The Cobalt Pentest Image allows our testers to conduct remote penetration tests in various environments. This image provides assigned Cobalt pentesters with access to an internal network or non-public application, featuring the following components:
- **Lightweight Linux Server**: A secure, lightweight Linux server is deployed within the internal network. This server acts as a jump box or routing pass-through, enabling assigned testers to scan and test the internal network during the assessment.
- **Stable VPN Connection**: A robust VPN connection is established to ensure secure access. This creates a peer-to-peer (P2P) VPN link between your infrastructure and the dedicated Cobalt pentest infrastructure, ensuring stable and secure communication.

By leveraging this setup, Cobalt pentesters can effectively and securely perform penetration tests on your internal network, identifying vulnerabilities and enhancing your security posture.


## System Requirements
Cobalt offers two deployment options for the Pentest Image:

1. OVF/OVA Format:
**Requirements:** You need an operating system that supports compatible virtualization platforms such as VirtualBox or VMware.

2. Docker Compose:
**Requirements:** Cobalt provides a Docker-based solution that requires Docker Compose to deploy the Cobalt Pentest Image along with the provided OpenVPN configuration.

### Recommended System Resources
For optimal performance, we recommend the following system resources for the virtual image (whether using VMware, VirtualBox, or AWS):
- Virtual CPUs: 2 allocated virtual CPUs
- RAM: 8 GB
- Disk Space: 20 GB

**Note:** For the "Routing only" pentest box, the requirements are lower and auto-determined by OVA:
- Virtual CPUs: 2 allocated virtual CPUs
- RAM: 1 GB
- Disk Space: Starting from 10 GB

## Connection
There are two approaches for gateway setup:

  1. Routing only (preferred)
  Run a VM for routing only. Testers do not (and cannot) SSH into the container, and conduct tests from their machines directly. In this case Cobalt needs a list of target networks to configure corresponding P2P VPN server for routing.
  
  2. Pentest Box
  Run a VM with pentesting tools. Testers SSH into it to conduct tests from within the customer infrastructure.
  
  Important Considerations - Root Access: Pentesters require root access to the VM if the Routing option is not used. This is mandatory to ensure they have the necessary permissions to conduct a thorough assessment.

## Firewall
An Outbound connection to the customer dedicated Cobalt VPN server should be allowed. In case of OVF, the information about IP address, port and protocol (TCP or UDP) will be shared from Cobalt to the customer team separately in the event network rules need to be modified to establish the P2P connection.
When using the Docker option, the provided “cobalt.ovpn” access file (see below) contains the IP address and port (section “remote”) along with protocol (section “proto”) used for connecting to the Cobalt VPN server.

  
