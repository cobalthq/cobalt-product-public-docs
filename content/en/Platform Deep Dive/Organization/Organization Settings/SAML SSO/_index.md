---
title: "Configure SAML SSO"
linkTitle: "SAML SSO"
weight: 20
aliases: /platform-deep-dive/collaboration/organization/organization-settings/saml-sso/
description: >
  Enable SAML SSO for your organization.
---

{{% pageinfo %}}
Cobalt supports **identity provider-initiated SAML single sign-on (SSO)**. As an Organization Owner, you can configure SAML SSO with your preferred identity provider.
{{% /pageinfo %}}

## SAML SSO Overview

{{% sso-definition %}} The Cobalt SSO service is based on the [Security Assertion Markup Language 2.0 (SAML 2.0)](/getting-started/glossary/#security-assertion-markup-language) specifications. Learn more about [SAML SSO](/getting-started/glossary/#saml-single-sign-on-sso).

Cobalt supports [identity provider-initiated (IdP-initiated) SSO](/getting-started/glossary/#idp-initiated-sso), where the authentication workflow starts on the identity provider side. There are a number of identity provider solutions that you can leverage to implement SSO with Cobalt, such as Okta, OneLogin, Microsoft Azure AD, and more.

- To access Cobalt, users must sign in to the identity provider system and select the configured Cobalt app.
- Cobalt acts as the service provider. When a user attempts to sign in to Cobalt from the IdP system, Cobalt requests the IdP to authenticate the user. Once the authentication is complete, the IdP sends a SAML assertion to Cobalt, and the user is signed in.
- SAML SSO authentication from the Cobalt sign-in page (SP-initiated SSO) is not possible.
<br><br>

![Cobalt identity provider-initiated SAML SSO](/deepdive/Cobalt-IdP-initiated-SAML-SSO-process.png "Cobalt identity provider-initiated SAML SSO")

## General Configuration Workflow

As an [Organization Owner](/getting-started/glossary/#organization-owner), you can configure SAML SSO for your organization with your preferred identity provider. Configuration procedures differ for each IdP. See [configuration instructions](#configuration-instructions-for-specific-identity-providers) for some popular IdPs below.

Once you've enabled SSO, users can sign in to Cobalt through the configured IdP. This affects the following roles:

{{% owner-member-team-member %}}

If [SAML SSO enforcement](#enforce-saml-sso) is off, users can authenticate in the following ways:

- Through SAML SSO
- With their email and password
- Using Google authentication (OAuth 2.0), if relevant

Here’s a general configuration workflow for SAML SSO:

1. Create a Cobalt application within the selected identity provider.
    - For each provider, see how configuration parameters map between their platform and Cobalt.
1. Set up the integration in the Cobalt app.
    - Navigate to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - Enter the following values from your identity provider:
      - **IdP SSO URL**
      - **IdP Certificate** (Make sure to include `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.)
    - Select **Save Configuration**.<br>
    ![Configure SAML SSO in the Cobalt app](/deepdive/configure-saml-sso-overlay.png "Configure SAML SSO in the Cobalt app")
1. Complete the configuration in the identity provider system. Enter the following values from Cobalt:
    - **ACS URL** (unique value for each organization). Example: `https://login.app.cobalt.io/login/callback?connection=example-org`, where the string after `=` is the organization's **slug** (`example-org`).
    - **Entity ID**: `https://api.cobalt.io/users/saml/metadata`
1. Test your SAML configuration.
1. If the test is successful, assign users to the SAML app in the IdP.
1. Notify users that now they can sign in through the selected identity provider. We don't send any notifications to users.

We don’t synchronize user datastores, so make sure that all users:

- Joined your organization in Cobalt, confirmed their email address, and created a password.
- Are provisioned within your identity provider with the same email address that they use in Cobalt.

If you have problems setting up SAML SSO, see our [troubleshooting tips](#troubleshoot-your-saml-sso-configuration).

## Enforce SAML SSO

SAML SSO enforcement reqiures organization users to sign in to Cobalt only through [SAML SSO](/getting-started/glossary/#saml-single-sign-on-sso). Once the enforcement is on, other authentication methods will no longer work. This affects the following roles:

{{% owner-member-team-member %}}

To enforce SAML SSO for your organization:

1. Navigate to **Settings** > **Identity & Access**. You must have SAML SSO configured.
1. Under **SAML Single Sign-on (SSO)**, turn on the **Enforce SAML** toggle, and confirm your action.<br><br>
    ![Manage SAML enforcement for your organization](/deepdive/SAML-enforcement.png "Manage SAML enforcement for your organization")
1. Notify users that now they must sign in through the selected identity provider. We don't send any notifications, so make sure that SAML enforcement doesn't disrupt your workflows.

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
       - **Identifier (Entity ID)**: `https://api.cobalt.io/users/saml/metadata`
       - **Reply URL** (Assertion Consumer Service URL): **ACS URL** from Cobalt (unique value for each organization). Copy the value in the Cobalt app in **Settings** > **Identity & Access** > **Configure SAML**.
       - **Sign on URL**: Leave this field blank.
       - **Relay State**: Leave this field.
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
    - Under **Set up [Your App]**, copy **Login URL**.
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP SSO URL**: Enter **Login URL** from Azure AD.
    - **IdP Certificate**: Enter **Certificate (Base64)** from Azure AD.
1. [Test your configuration](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal-setup-sso#test-single-sign-on).
1. If the test is successful, [assign users](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal-assign-users#assign-a-user-account-to-an-enterprise-application) to the application.

### Duo

To set up SAML SSO with Duo, read their [documentation](https://duo.com/docs/sso-generic).

| For This Parameter in Cobalt | Enter This Value from Duo |
|---|---|
| IdP SSO URL | Single Sign-On URL |
| IdP Certificate | Certificate |

<br>

| For This Parameter in Duo | Enter This Value from Cobalt |
|---|---|
| Assertion Consumer Service (ACS) URL | ACS URL (unique value for each organization) |
| Entity ID | `https://api.cobalt.io/users/saml/metadata` |

In Duo, complete the **SAML Response** section with:

- **NameID format**: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`
- **NameID attribute**: `mail`
- **Signature algorithm**: `SHA256`
- **Signing options**: Select **Sign response** and **Sign assertion**.
- **Map attributes**:
  - **IdP Attribute**: `mail`
  - **SAML Response Attribute**: `email`

### Google

For instructions on how to enable SAML SSO with Google, read their [guide](https://support.google.com/a/answer/6087519?hl=en).

| For This Parameter in Cobalt | Enter This Value from Google |
|---|---|
| IdP SSO URL | SSO URL |
| IdP Certificate | Certificate |

<br>

| For This Parameter in Google | Enter This Value from Cobalt |
|---|---|
| ACS URL | ACS URL (unique value for each organization) |
| Entity ID | `https://api.cobalt.io/users/saml/metadata` |

In the Google Admin console, configure the following:

- On the **Service Provider Details** page, leave the **Signed Response** option unselected (default).
- On the **Attribute Mapping** page, add an attribute `email`, and select **Basic Information** and **Primary Email**.

Once you've completed the setup, your application for Cobalt appears in the Google Workspace.

### Okta

<!--You can set up SAML SSO with Okta in two ways:

- Use the [gallery Cobalt app](https://www.okta.com/integrations/cobalt/) in Okta. Learn [how to configure SAML using the gallery Cobalt app](/platform-deep-dive/organization/organization-settings/saml-sso/okta/).
- _(Recommended)_ Create a non-gallery SAML app for Cobalt manually. To learn more, read Okta's [documentation](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm?cshid=ext_Apps_App_Integration_Wizard-saml).

If you create an application for Okta **manually**, use the following parameters.-->

We recommend creating a non-gallery SAML application for Cobalt manually. For details, read Okta's [documentation](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm?cshid=ext_Apps_App_Integration_Wizard-saml).

| For This Parameter in Cobalt | Enter This Value from Okta |
|---|---|
| IdP SSO URL | Sign on URL (Identity Provider Single Sign-On URL) |
| IdP Certificate | Signing Certificate (X.509 Certificate) |

<br>

| For This Parameter in Okta | Enter This Value from Cobalt |
|---|---|
| Single sign-on URL | ACS URL (unique value for each organization) |
| Audience URI (SP Entity ID) | `https://api.cobalt.io/users/saml/metadata` |

<br>

In Okta:

- Leave the **Default RelayState** field empty.
- In **Attribute Statements**, add the following mapping attribute:
  - **email**: `user.email`<br><br>
  ![Set Attribute Statements in the Cobalt SAML app in Okta](/deepdive/Okta-manual-app-attributes.png "Set Attribute Statements in the Cobalt SAML app in Okta")

### OneLogin

For more information about setting up SAML SSO with OneLogin, refer to their [documentation](https://developers.onelogin.com/saml).

To configure SAML SSO with OneLogin:

1. Create a custom application connector for Cobalt. Follow OneLogin instructions to [build a SAML Custom Connector (Advanced)](https://onelogin.service-now.com/support?id=kb_article&sys_id=912bb23edbde7810fe39dde7489619de&kb_category=93e869b0db185340d5505eea4b961934). Enter the following values for configuration parameters in OneLogin:
    - **Audience (EntityID)**: `https://api.cobalt.io/users/saml/metadata`
    - **Recipient**, **ACS (Consumer) URL Validator**, and **ACS (Consumer) URL**: ACS URL (unique value for each organization). Copy the value in the Cobalt app in **Settings** > **Identity & Access** > **Configure SAML**.
    - **SAML initiator**: OneLogin
    - **SAML nameID format**: Email
    - **SAML issuer type**: Specific
    - **SAML signature element**: Assertion
1. In OneLogin, navigate to your application connector. On the **SSO** tab, under **SAML Signature Algorithm**, select **SHA-256**.
1. Configure parameters in the Cobalt app in **Settings** > **Identity & Access** > **Configure SAML**. Enter the following values from OneLogin. You can find them on the **SSO** tab of your application connector.
    - **IdP SSO URL**: SAML 2.0 Endpoint (HTTP)
    - **IdP Certificate**: X.509 Certificate
1. Navigate to your application connector in OneLogin.
1. On the **Parameters** tab, select **Add Parameter**.
    - Under **Field name**, enter `email`, then select **Include in SAML assertion**, and select **Save**.
    - Under **Value**, select **Email**, and select **Save**.
1. To test your configuration, sign in to OneLogin as your assigned user. You should see a custom application for Cobalt that you configured. Select this application to sign in to Cobalt.
1. If the test is successful, assign users in OneLogin:
    - Go to **Administration**.
    - In the menu, select **Users** > **Users**.
    - Assign users to your application.

## Troubleshoot Your SAML SSO Configuration

If your SAML SSO configuration doesn't work, you can delete it by selecting **Delete Configuration**. Then you can configure SAML SSO once again.

To get help, contact your Customer Success Manager (CSM) or support@cobalt.io.

| Troubleshooting Tip | Details |
|---|---|
| Ensure that all values match between your identity provider and Cobalt. | Mapped parameters in both setups must match. |
| Ensure that the IdP certificate is accurate. | Copy the IdP certificate once again.<br>• Include `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br>• Make sure there are no extra whitespaces. |
| Ensure that you added users to the Cobalt platform. | We don’t support user provisioning through an IdP. When leveraging an IdP, make sure that there is an established identity for a user in Cobalt.<br>To establish an identity in Cobalt, a user needs to create a password and sign in to Cobalt. All subsequent sign-ins (after the user identity is established in Cobalt) are initiated through the organization's IdP. |
| Assign users to the Cobalt application in the IdP system. | Add users to the new SAML application that you've set up. |
