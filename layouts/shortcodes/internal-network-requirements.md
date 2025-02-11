Because Cobalt pentesters execute pentests for internal networks remotely, they need:

- Access to the internal corporate network through a stable VPN connection.

OR

- A lightweight Linux server inside the network that serves as a [jump box](/getting-started/glossary/#jump-box) from which pentesters can scan and test the internal network during the assessment.

Depending on your network setup, do the following:

- For networks running on Amazon Web Services (AWS) machines:
  - [Create a Kali Virtual Machine (VM)](https://aws.amazon.com/marketplace/pp/prodview-fznsw3f7mq7to) inside AWS.
  - Set up key-based SSH access for each pentester.

- For networks that do not use a cloud network setup:
  - Request a custom OVA Image from your TPM.
    
    OR 

  - [Download a Kali VMWare/VirtualBox image](https://www.kali.org/get-kali/).
  - Set up key-based SSH access for each pentester.
