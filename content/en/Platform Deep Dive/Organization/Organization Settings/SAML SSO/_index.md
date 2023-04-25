---
title: "Configure SAML SSO"
linkTitle: "SAML SSO"
weight: 20
no_list: true
aliases: /platform-deep-dive/collaboration/organization/organization-settings/saml-sso/
description: >
  Enable SAML SSO for your organization.
---

{{% pageinfo %}}
Cobalt supports single sign-on (SSO) through [Security Assertion Markup Language 2.0 (SAML 2.0)](/getting-started/glossary/#security-assertion-markup-language).
{{% /pageinfo %}}

SAML supports [federated identity](https://www.okta.com/identity-101/what-is-federated-identity/), which allows you to sign in to different domains with a single account. With SAML, when you sign in to Cobalt, our app verifies your identity with the identity provider (IdP) that you configured. As a service provider, Cobalt pulls SAML assertions from your IdP to authenticate your users.

As an [Organization Owner](/getting-started/glossary/#organization-owner), you can set up SAML SSO for your organization. Once you’ve enabled SSO, users need to sign in through the selected IdP and not the Cobalt {{% sign-in %}} page. This affects [Organization Owners](/getting-started/glossary/#organization-owner), [Organization Members](/getting-started/glossary/#organization-member), and [Pentest Team Members](/getting-started/glossary/#pentest-team-member).

## General Configuration Workflow

Configuration procedures differ for each identity provider. See [configuration instructions](#configuration-instructions-for-specific-identity-providers) for some popular IdPs below.

Here’s a general configuration workflow:

1. Configure SAML SSO on the identity provider side.
    - For each provider, see how parameters map between their platform and Cobalt.
1. Set up the integration in the Cobalt app:
    - Navigate to the **Settings** page, and then select **Identity & Access**.
    - Under **SAML 2.0**, select **Enable**.
    - Enter parameter values that you obtained from the identity provider, and select **Save**.
        - For the **IdP Certificate**, make sure to include `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.
    - Save the **IdP RelayState** value that appears in red.<br><br>
    ![Configure SAML SSO in the Cobalt app](/deepdive/ConfigureSAML.png "Configure SAML SSO in the Cobalt app")
1. Complete the integration in the identity provider system, and test the connection.
    - Test your SAML configuration in an incognito window before signing out of Cobalt. This will prevent any account lockout.

We don’t synchronize user datastores, so make sure that all users:

- Joined your organization in Cobalt, confirmed their email address, and created a password.
- Are provisioned within your identity provider with the same email address that they use in Cobalt.

If you have problems setting up SAML SSO, see our [troubleshooting tips](#troubleshoot-your-saml-sso-configuration).

## Configuration Instructions for Specific Identity Providers

**You can configure SAML SSO with your preferred identity provider**. Here are instructions for some popular IdPs:

- [Azure AD](#azure-ad)
- [Duo](#duo)
- [Google](#google)
- [Okta](#okta)
- [OneLogin](#onelogin)

### Azure AD

To configure SAML SSO with Azure Active Directory (Azure AD):

1. In Azure AD, create an [enterprise non-gallery application](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal) for Cobalt.
1. [Enable SSO](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal-setup-sso) for the application. If available, follow the instructions that you see in the UI.
    - Verify that the single sign-on method for your application is SAML.
    - Under **Basic SAML Configuration**, enter:
       - **Identifier** (Entity ID): `https://api.cobalt.io/users/saml/metadata`
       - **Reply URL** (Assertion Consumer Service URL): `https://api.cobalt.io/users/saml/auth`
       - **Sign on URL**: Leave this field blank.
       - **Relay State**: Leave this field blank now. You'll need it later.
       - **Logout URL**: Leave this field blank.
    - Under **User Attributes & Claims**, add custom attribute mappings to your SAML token attributes configuration.
       - **givenname**: `user.givenname`
       - **surname**: `user.surname`
       - **emailaddress**: `user.mail`
       - **name**: `user.userprincipalname`
       - **Unique User Identifier**: `user.userprincipalname`
    - The Cobalt app expects the following attributes to be passed in the SAML response:
       <table style="border: 1px solid #E0E2E6; padding: 5px;"><thead><tr><th style="border: 1px solid #E0E2E6; padding: 5px;">Name</th><th style="border: 1px solid #E0E2E6; padding: 5px;">Source Attribute</th></tr></thead><tbody><tr><td style="border: 1px solid #E0E2E6; padding: 5px;"><code>Mail</code></td><td style="border: 1px solid #E0E2E6; padding: 5px;"><code>user.mail</code></td></tr><tr><td style="border: 1px solid #E0E2E6; padding: 5px;"><code>Othermail</code></td><td style="border: 1px solid #E0E2E6; padding: 5px;"><code>user.othermail</code></td></tr></tbody></table>
    - Under **SAML Signing Certificate**, download **Certificate (Base 64)**.
    - Under **Set up [Your App]**, copy the required values.
1. [Assign users](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal-assign-users#assign-a-user-account-to-an-enterprise-application) to the application.
1. Configure SAML settings in the Cobalt app in **Settings** > **Identity & Access** > **SAML 2.0**.
    - For these parameters, enter values from Azure AD:
      - **IdP Issuer URL**: Azure AD Identifier
      - **IdP Target URL**: Login URL
      - **IdP Certificate**: Certificate (Base64)
    - Save the **IdP Relay State** value that appears in red.
1. In Azure AD, under **Basic SAML Configuration**, paste the **IdP Relay State** value into **Relay State**.
1. [Test your configuration](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal-setup-sso#test-single-sign-on).

### Duo

To set up SAML SSO with Duo, read their [documentation](https://duo.com/docs/sso-generic).

| For This Parameter in Cobalt | Enter This Value from Duo |
|---|---|
| IdP Issuer URL | Entity ID |
| IdP Target URL | Single Sign-On URL |
| IdP Certificate | Certificate |

<br>

| For This Parameter in Duo | Enter This Value from Cobalt |
|---|---|
| Entity ID | `https://api.cobalt.io/users/saml/metadata` |
| Assertion Consumer Service (ACS) URL | `https://api.cobalt.io/users/saml/auth` |
| Default Relay State | IdP Relay State |

In Duo, complete the **SAML Response** section with:

- **NameID format**: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`
- **NameID attribute**: `mail`
- **Signature algorithm**: `SHA256`
- **Signing options**: Select **Sign response** and **Sign assertion**.
- **Map attributes**:
  - **IdP Attribute**: enter `mail`.
  - **SAML Response Attribute**: enter `email`.

### Google

For instructions on how to enable SAML SSO with Google, read their [guide](https://support.google.com/a/answer/6087519?hl=en).

| For This Parameter in Cobalt | Enter This Value from Google |
|---|---|
| IdP Issuer URL | Entity ID |
| IdP Target URL | SSO URL |
| IdP Certificate | Certificate |

<br>

| For This Parameter in Google | Enter This Value from Cobalt |
|---|---|
| ACS URL | `https://api.cobalt.io/users/saml/auth` |
| Entity ID | `https://api.cobalt.io/users/saml/metadata` |
| Start URL | IdP Relay State |

In the Google Admin console, configure the following:

- On the **Service Provider Details** page, leave the **Signed Response** option unselected (default).
- On the **Attribute Mapping** page, add an attribute `email`, and select **Basic Information** and **Primary Email**.

Once you've completed the setup, your application for Cobalt appears in the Google Workspace.

### Okta

To learn how to configure Okta as IdP, read their [documentation](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm?cshid=ext_Apps_App_Integration_Wizard-saml).

We recommend creating a SAML integration for Cobalt manually. You can also use the [Cobalt app](https://www.okta.com/integrations/cobalt/) on Okta. To learn more, see [how to configure SAML SSO with Okta](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Cobalt.html).

| For This Parameter in Cobalt | Enter This Value from Okta |
|---|---|
| IdP Issuer URL | Identity Provider Issuer|
| IdP Target URL | Identity Provider Single Sign-On URL |
| IdP Certificate | X.509 Certificate |

<br>

| For This Parameter in Okta | Enter This Value from Cobalt |
|---|---|
| Single Sign On URL | `https://api.cobalt.io/users/saml/auth` |
| Audience URI (SP Entity ID) | `https://api.cobalt.io/users/saml/metadata` |
| Default Relay State | IdP Relay State |

<br>

Okta supports the following mapping attributes:

| Name | Value |
|---|---|
| `email` | `user.email` |

### OneLogin

For more information about setting up SAML SSO with OneLogin, refer to their [documentation](https://developers.onelogin.com/saml).

To configure SAML SSO with OneLogin:

1. Create a custom application connector for Cobalt. Follow OneLogin instructions to [build a SAML Custom Connector (Advanced)](https://onelogin.service-now.com/support?id=kb_article&sys_id=912bb23edbde7810fe39dde7489619de&kb_category=93e869b0db185340d5505eea4b961934). Enter the following values for configuration parameters in OneLogin:
    - **Audience (EntityID)**: `https://api.cobalt.io/users/saml/metadata`
    - **Recipient**, **ACS (Consumer) URL Validator**, and **ACS (Consumer) URL**: `https://api.cobalt.io/users/saml/auth`
    - **SAML initiator**: OneLogin
    - **SAML nameID format**: Email
    - **SAML issuer type**: Specific
    - **SAML signature element**: Assertion
1. In OneLogin, navigate to your application connector. On the **SSO** tab, under **SAML Signature Algorithm**, select **SHA-256**.
1. Configure parameters in the Cobalt app in **Settings** > **Identity & Access** > **SAML 2.0**.
    - Insert the following values from OneLogin. You can find them on the **SSO** tab of your application connector.
       - **IdP Issuer URL**: Issuer URL
       - **IdP Target URL**: SAML 2.0 Endpoint (HTTP)
       - **IdP Certificate**: X.509 Certificate > View Details
    - Copy the **IdP Relay State** value that appears.
1. Navigate to your application connector in OneLogin.
1. On the **Configuration** tab, insert your **IdP Relay State** from Cobalt into the **RelayState** field.
1. On the **Parameters** tab, select **Add Parameter**.
    - Under **Field name**, enter `email`, then select **Include in SAML assertion**, and select **Save**.
    - Under **Value**, select **Email**, and select **Save**.
1. Assign users in OneLogin:
    - Go to **Administration**.
    - In the menu, select **Users** > **Users**.
    - Assign users to your application.
1. To test your configuration, sign in to OneLogin as your assigned user. You should see a custom application for Cobalt that you configured. Select this application to sign in to Cobalt.

## Troubleshoot Your SAML SSO Configuration

To get help, contact your Customer Success Manager (CSM) or support@cobalt.io. We’ll turn off SAML SSO for your organization. Then you can configure it again.

| Troubleshooting Tip | Details |
|---|---|
| Ensure that the IdP certificate is accurate. | Copy the IdP certificate once again.<br>• Include `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br>• Make sure there are no extra whitespaces. |
| Check that the organization tokens (**IdP Relay State** in Cobalt) match in the IdP system and Cobalt. Pay attention to quotation marks. | Check that all quotation marks in the organization tokens are straight quotes `" "` and not curly quotes `“ ”`. |
| Ensure that you added users to the Cobalt platform. | We don’t support user provisioning through an IdP. When leveraging an IdP, make sure that there is an established identity for a user in Cobalt.<br>To establish an identity in Cobalt, a user needs to create a password and sign in to Cobalt. All subsequent sign-ins (after the user identity is established in Cobalt) are initiated through the organization’s IdP. |
| Ensure that all values match between your identity provider and Cobalt. | Mapped parameters in both setups must match. |
