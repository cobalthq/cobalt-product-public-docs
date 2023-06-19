---
title: "Azure Active Directory Penetration Testing Methodologies"
linkTitle: "Azure AD Methodologies"
weight: 220
description: >
  Review Cobalt pentest methodologies for Azure Active Directory.
---

{{% pageinfo %}}
Azure Active Directory (AD) is a cloud-based identity and access management solution by Microsoft.

Penetration testing of Azure AD is a process in which a tester uses simulated attacks to identify potential security vulnerabilities in the service.
{{% /pageinfo %}}

## Introduction

Azure AD provides a solution for managing user identity and access on the cloud and on-premises, compared to Active Directory with only on-premises infrastructure. Learn more about [Azure AD](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis) and [how it compares to Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-compare-azure-ad-to-ad).

Due to its prevalence, Azure AD often becomes a target for cyberattacks. Here are some examples:

- Because it's a hybrid technology, there are access control risks such as on-premises to cloud and cloud to on-premises.
- A threat actor can access the on-premises Active Directory controller through a compromised system on the cloud or access Azure AD through the on-premises Windows systems.
- An attacker can exploit a detected vulnerability in web applications on Azure. Then they may get access to the cloud or on-premises Azure AD infrastructure.

## Methodology Details

Penetration testing of an Azure AD service includes the following stages:

- [Reconnaissance](#reconnaissance)
- [Initial access](#initial-access)
- [Enumeration](#enumeration)
- [Lateral movement](#lateral-movement)
- [Persistence](#persistence)
- [Reporting, triaging, and retesting](#reporting-triaging-and-retesting)

### Reconnaissance

Based on the pentest target that you provide, our pentesters can obtain the following details about your Azure AD service:

- Tenant name and ID
- Subdomains on Azure
- Azure services used by the organization
- Email IDs
- Valid and invalid users
- Public Azure blobs

{{% alert title="Tools" color="primary" %}}
Our pentesters may use scanning tools such as:

- AADInternals
- MicroBurst
{{% /alert %}}

### Initial Access

Our pentesters can access the Azure AD environment using various techniques such as:

- [Password spraying](#password-spraying) or a brute-force attack
- [Web application vulnerabilities](#web-application-vulnerabilities)
- Illicit consent grant attack
- Function apps

Let's review some techniques in more detail.

#### Password Spraying

Our pentesters can use tools such as MSOLSpray to perform the following:

- User validation
- Tenant validation
- MFA status verification
- Identification of disabled or locked accounts
- Verification of password expiration

#### Web Application Vulnerabilities

​​A web application on Azure can run with the Azure Function Service or Azure App Service permission, such as managed identity. For applications running with [managed identity](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview) rights, an attacker can gain unauthorized access to Azure resources if they have a user's access token.

Our pentesters attempt to:

- Identify a command execution vulnerability in your web application. They execute a command to determine whether your application is running with managed identity rights.
- Obtain an access token with managed identity rights by calling the Azure Resource Manager (ARM) endpoint.
- Perform authenticated enumeration using tools such as Az PowerShell.
- Access Azure resources after authenticating to the Azure AD environment with managed identity.

### Enumeration

After gaining access to Azure AD belonging to the target organization, our pentesters perform information gathering and enumeration. They can use tools such as:

- StormSpotter
- BloodHound
- ROADTools
- Authentication via CLI:
  - Az CLI
  - Az PowerShell

### Lateral Movement

After obtaining initial access to Azure AD, our pentesters attempt to perform lateral movement attacks. This includes:

- Accessing different resources on Azure AD with the access token obtained in the previous steps. 
- Capturing the access token information of an authorized user.

Our pentesters may use various control steps to achieve this, such as:

- Azure Resources and Runbook
- Role assignment
- Runbook
- PowerShell History
- Automation account
- ARM templates
- User data
- Custom script extension
- Azure VMs (Hybrid Joined)
- Primary Refresh Token (PRT)

Let's review some of these steps in more detail.

#### Azure Resources and Runbook

In the Initial Access phase, our pentesters obtain the access token information of a user with managed identity rights over the web application.

- Pentesters authenticate to the Azure AD environment using the Az PowerShell tool with the token details they obtained.
- Then they check which Azure Resources the user can access. This allows our pentesters to identify permissions that an attacker can exploit.

#### PowerShell History

If you're a system administrator and operating on Azure AD using the PowerShell terminal, make sure that you terminate your sessions safely. System administrators perform operations on Azure AD using the following tools with a PowerShell session:

- Az PowerShell
- Az CLI

Our pentesters identify whether an attacker can obtain an access token using these tools.

### Persistence

After gaining an authorized user account with lateral movement attacks, our pentesters use different techniques to access Azure AD, such as:

- AZUREADASSOC
- Federation - Trusted Domain
- Storage Account Access Keys
- Applications and Service Principals

As an example, this is how the Applications and Service Principals technique works. To obtain user privileges with the Global Administrator rights on Azure AD, our pentesters first create an application with high privileges. Then they create an application with password reset privileges on the Global Administrator user.

### Reporting, Triaging, and Retesting

{{% report-triage-retest %}}

## Resources

- [Blog by the Cobalt pentester Orhan Yildirim](https://www.cobalt.io/blog/azure-ad-pentesting-fundamentals)