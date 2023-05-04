---
title: "IoT Penetration Testing Methodology"
linkTitle: "IoT System"
weight: 210
description: >
  Cobalt pentest methodology for IoT systems.
---

{{% pageinfo %}}
Learn how the Cobalt [Professional Services](/professional-services/) team tests IoT ecosystems.
{{% /pageinfo %}}

The Cobalt Professional Services team carries out either destructive or non-destructive testing on the physical device, as well as testing the entire ecosystem. We follow an industry standard methodology primarily based on the [Open Web App Security Project (OWASP) Top 10](https://owasp.org/www-project-top-ten/) framework.

We perform the following steps to ensure full coverage:

- [Embedded device testing](#embedded-device-testing)
- [Firmware analysis](#firmware-analysis)
- [Networking and protocol testing](#networking-and-protocol-testing)
- [Web application or cloud web interface testing](#web-application-or-cloud-web-interface-testing)
- [Mobile application testing](#mobile-application-testing)

## Embedded Device Testing

During this phase, we physically inspect the device. While doing this, we search for:

- Ethernet ports
- SD card slots
- FCC ID labels
- Internal components
- Debug ports

If any debug ports are present, we attempt to dump the firmware from memory. We also attempt to get shell access to the device by leveraging the following buses:

- UART
- SPI
- I2C
- JTAG

## Firmware Analysis

We can analyze the binaries or reverse engineer how the device functions if:

- We're able to extract the firmware from memory; or
- We're provided with the firmware.

Using simple tools such as binwalk, we can look through the file system and search for sensitive information, such as:

- Hardcoded passwords
- Encryption keys

Then, we try to modify the firmware on the device in a way that would provide persistent access to a malicious actor.

## Networking and Protocol Testing

During this phase, we discover and fingerprint any network protocols that the device is running. After identifying all of the network protocols, we attempt to exploit any known vulnerabilities.

We also attempt to exploit common communication protocols, such as:

- Bluetooth Low Energy (BLE)
- Wi-Fi
- LoRa

These communication protocols could be vulnerable to the following attacks:

- Sniffing
- Replaying
- Jamming
- Man-in-the-Middle (MITM)

We sniff radio packets to understand how the devices try to communicate, and to see whether there is any sensitive information that we can intercept.

We also test whether we can "jam" the device (stop it from communicating) or intercept packets that we can later use in a replay attack.

## Web Application or Cloud Web Interface Testing

The Professional Services team follows the OWASP Top 10 methodology for web application testing. We perform both automated and manual testing during the engagement. We attempt to intercept and modify traffic between the web application and the embedded device.

## Mobile Application Testing

For this phase, we follow the OWASP Top 10 methodology for mobile application testing. Testers perform automated and manual testing during this portion of the engagement. We attempt to intercept and modify traffic between the mobile application and the embedded device.

## Additional Methodology Information

**OWASP Top 10 for IoT (2018):**

1. Weak, guessable or hardcoded passwords
1. Insecure network services
1. Insecure ecosystem interfaces
1. Lack of secure update mechanism
1. Use of insecure or outdated components
1. Insufficient privacy protection
1. Insecure data transfer and storage
1. Lack of device management
1. Insecure default settings
1. Lack of physical hardening

**OWASP Top 10 for Mobile (2016):**

1. Improper Platform Usage
1. Insecure Data Storage
1. Insecure Communication
1. Insecure Authentication
1. Insufficient Cryptography
1. Insecure Authorization
1. Client Code Quality
1. Code Tampering
1. Reverse Engineering
1. Extraneous Functionality

**OWASP Top 10 for Web Application (2021):**

1. Broken Access Control
1. Cryptographic Failures
1. Injection
1. Insecure Design
1. Security Misconfiguration
1. Vulnerable and Outdated Components
1. Identification and Authentication Failures
1. Software and Data Integrity Failures
1. Security Logging and Monitoring Failures
1. Server-Side Request Forgery
