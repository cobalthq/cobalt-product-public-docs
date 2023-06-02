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

In this article:

- [SAML SSO Overview](#saml-sso-overview)
- [General Configuration Workflow](#general-configuration-workflow)
- [Enforce SAML SSO](#enforce-saml-sso)
- [Configuration Instructions for Specific Identity Providers](#configuration-instructions-for-specific-identity-providers)
- [Troubleshoot Your SAML SSO Configuration](#troubleshoot-your-saml-sso-configuration)

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

Learn how to configure SAML SSO with Azure Active Directory (Azure AD) as IdP.

{{%expand "Click to view instructions." %}}
<br>
To configure SAML SSO with Azure Active Directory (Azure AD):

1. In Azure AD, create an enterprise non-gallery application for Cobalt.
    - Select **Enterprise applications**, then select **New application**.
    - Select **Non-gallery application**.
    - Select **Create your own application**.
    - Enter a name for your application, then select **Create**.
    - Wait for the application to load.
1. Enable SSO for the application.
    - On the application page, select **Set up single sign-on**.
    - On the **Select a single sign-on method** screen, select **SAML**.
    - Under **Basic SAML Configuration**, enter:
       - **Identifier (Entity ID)**: `https://api.cobalt.io/users/saml/metadata`
       - **Reply URL** (Assertion Consumer Service URL): **ACS URL** from Cobalt (unique value for each organization).<br>Copy the value in the Cobalt app in **Settings** > **Identity & Access** > **Configure SAML**.
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
1. Test your configuration.
1. If the test is successful, assign users to the application.
{{% /expand %}}

### Duo

Learn how to configure SAML SSO with Duo as IdP. For more information, refer to Duo [documentation](https://duo.com/docs/sso-generic).

{{%expand "Click to view instructions." %}}
<br>
To create a SAML app for Cobalt in Duo:

1. In the Duo Admin Panel, go to **Applications**, and select **Protect an Application**. For details, read this [instruction](https://duo.com/docs/sso-generic).
1. Under **Metadata**, copy the following values. You will need to add them to Cobalt in the next step.
    - **Single Sign-On URL**
    - **Certificate**
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP SSO URL**: Enter **Single Sign-On URL** from Duo.
    - **IdP Certificate**: Enter **Certificate** from Duo.
1. Still in Cobalt, copy the **ACS URL** value, then select **Save Configuration**.
1. Go back to Duo. Under **Service Provider**, enter:
    - **ACS URL**: **ACS URL** from Cobalt.
    - **Entity ID**: `https://api.cobalt.io/users/saml/metadata`
1. In Duo, complete the **SAML Response** section with:
    - **NameID format**: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`
    - **NameID attribute**: `mail`
    - **Signature algorithm**: `SHA256`
    - **Signing options**: Select **Sign response** and **Sign assertion**.
    - **Map attributes**:
      - **IdP Attribute**: `mail`
      - **SAML Response Attribute**: `email`
1. Complete other required steps.
1. Assign users to the application.
1. Test the integration.

{{% /expand %}}

### Google

Learn how to configure SAML SSO with Google as IdP. For more information, refer to Google [documentation](https://support.google.com/a/answer/6087519?hl=en).

{{%expand "Click to view instructions." %}}
<br>
To create a SAML app for Cobalt in the Google Admin console:

1. In the Google Admin console, go to **Menu** > **Apps** > **Web and mobile apps**. Follow this [instruction](https://support.google.com/a/answer/6087519?hl=en) for more details.
1. Select **Add App** > **Add custom SAML app**.
1. On the **App Details** page, enter general information for the integration, then select **Continue**.
1. On the **Google Identity Provider details** page, locate the following values. You will need to add them to Cobalt in the next step.
    - **SSO URL**
    - **Certificate**
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP SSO URL**: Enter **SSO URL** from the Google Admin console.
    - **IdP Certificate**: Enter **Certificate** from the Google Admin console.
1. Still in Cobalt, copy the **ACS URL** value, then select **Save Configuration**.
1. Go back to the Google Admin console. In the **Service Provider Details** window, enter:
    - **ACS URL**: **ACS URL** from Cobalt
    - **Entity ID**: `https://api.cobalt.io/users/saml/metadata`
1. Leave the **Signed Response** option unselected (default).
1. On the **Attribute Mapping** page, add an attribute `email`, and select **Basic Information** and **Primary Email**.
1. Complete other required steps.
1. Test the integration.
1. If the test is successful, assign users to the application.

{{% /expand %}}

### Okta

<!--You can set up SAML SSO with Okta in two ways:

- Use the [gallery Cobalt app](https://www.okta.com/integrations/cobalt/) in Okta. Learn [how to configure SAML using the gallery Cobalt app](/platform-deep-dive/organization/organization-settings/saml-sso/okta/).
- _(Recommended)_ Create a non-gallery SAML app for Cobalt manually. To learn more, read Okta's [documentation](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm?cshid=ext_Apps_App_Integration_Wizard-saml).

If you create an application for Okta **manually**, use the following parameters.-->

Create a **non-gallery SAML application** for Cobalt manually. For more information, refer to Okta [documentation](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm?cshid=ext_Apps_App_Integration_Wizard-saml).

Currently, the Cobalt SAML gallery app in Okta doesn't support new SAML settings.

{{%expand "Click to view instructions." %}}
<br>
To create a non-gallery SAML app for Cobalt in Okta:

1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**. You will need the following values in the next steps:
    - **ACS URL**
    - **Entity ID**<br><br>
    ![Configure a non-gallery SAML app for Okta in the Cobalt app](/deepdive/configure-non-gallery-SAML-app-in-Okta-1.png "Configure a non-gallery SAML app for Okta in the Cobalt app")
1. In Okta, in the Admin Console, go to **Applications** > **Applications**.
1. Select **Create App Integration**.
1. In the overlay that appears, select **SAML 2.0** as the sign-in method, and then select **Next**.
1. On the **General Settings** tab, enter general information for the integration, then select **Next**.
1. On the **Configure SAML** tab, under **General**, enter SAML details:
    -  **Single sign-on URL**: Enter **ACS URL** from Cobalt.
    - **Audience URI (SP Entity ID)**: Enter `https://api.cobalt.io/users/saml/metadata`.
    - Leave the **Default RelayState** field blank.
    - For other fields, use default values.<br><br>
    ![Configure a non-gallery SAML app in Okta](/deepdive/configure-non-gallery-SAML-app-in-Okta-2.png "Configure a non-gallery SAML app in Okta")
1. Still on the **Configure SAML** tab, under **Attribute Statements (optional)**, add the following mapping attribute:
    - **email**: `user.email`<br><br>
    ![Set Attribute Statements in the Cobalt SAML app in Okta](/deepdive/Okta-manual-app-attributes.png "Set Attribute Statements in the Cobalt SAML app in Okta")
1. Select **Next**.
1. On the **Feedback** tab, select **I'm an Okta customer adding an internal app**, and then select **Finish**.
1. Once you've created a SAML application, on the **Sign on** tab, under **Metadata details**, click **More details**.<br>You need the following values to complete the configuration in Cobalt:
    - **Sign on URL**
    - **Signing Certificate**<br><br>
    ![Configure a non-gallery SAML app in Okta](/deepdive/configure-non-gallery-SAML-app-in-Okta-3.png "Configure a non-gallery SAML app in Okta")
1. In Cobalt, enter the following values from Okta, and then select **Save Configuration**.
    - **IdP SSO URL**: Enter **Sign on URL** from Okta.
    - **IdP Certificate**: Enter **Signing Certificate** from Okta.
1. Test the integration.
1. If the test is successful, assign users to the application.

{{% /expand %}}

### OneLogin

Learn how to configure SAML SSO with OneLogin as IdP. For more information, refer to OneLogin [documentation](https://developers.onelogin.com/saml).

{{%expand "Click to view instructions." %}}
<br>
To configure SAML SSO with OneLogin:

1. Create a custom application connector for Cobalt. Follow OneLogin instructions to [build a SAML Custom Connector (Advanced)](https://onelogin.service-now.com/support?id=kb_article&sys_id=912bb23edbde7810fe39dde7489619de&kb_category=93e869b0db185340d5505eea4b961934).
1. In OneLogin, enter the following values for configuration parameters:
    - **Audience (EntityID)**: `https://api.cobalt.io/users/saml/metadata`
    - **Recipient**, **ACS (Consumer) URL Validator**, and **ACS (Consumer) URL**: ACS URL (unique value for each organization).<br>Copy the value in the Cobalt app in **Settings** > **Identity & Access** > **Configure SAML**.
    - **SAML initiator**: OneLogin
    - **SAML nameID format**: Email
    - **SAML issuer type**: Specific
    - **SAML signature element**: Assertion
1. In OneLogin, navigate to your application connector. On the **SSO** tab, under **SAML Signature Algorithm**, select **SHA-256**.
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP SSO URL**: Enter **SAML 2.0 Endpoint (HTTP)** from OneLogin.
    - **IdP Certificate**: Enter **X.509 Certificate** from OneLogin.<br>
    You can find these parameters in OneLogin on the **SSO** tab of your application connector.
1. Navigate to your application connector in OneLogin. On the **Parameters** tab, select **Add Parameter**.
    - Under **Field name**, enter `email`, then select **Include in SAML assertion**, and select **Save**.
    - Under **Value**, select **Email**, and select **Save**.
1. To test your configuration, sign in to OneLogin as your assigned user. You should see a custom application for Cobalt that you configured.
1. Select this application to sign in to Cobalt.
1. If the test is successful, assign users in OneLogin:
    - Go to **Administration**.
    - In the menu, select **Users** > **Users**.
    - Assign users to your application.
{{% /expand %}}

## Troubleshoot Your SAML SSO Configuration

If your SAML SSO configuration doesn't work, you can delete it by selecting **Delete Configuration**. Then you can configure SAML SSO once again.

To get help, contact your Customer Success Manager (CSM) or support@cobalt.io.

| Troubleshooting Tip | Details |
|---|---|
| Ensure that all values match between your identity provider and Cobalt. | Mapped parameters in both setups must match. |
| Ensure that the IdP certificate is accurate. | Copy the IdP certificate once again.<br>• Include `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br>• Make sure there are no extra whitespaces. |
| Ensure that you added users to the Cobalt platform. | We don’t support user provisioning through an IdP. When leveraging an IdP, make sure that there is an established identity for a user in Cobalt.<br>To establish an identity in Cobalt, a user needs to create a password and sign in to Cobalt. All subsequent sign-ins (after the user identity is established in Cobalt) are initiated through the organization's IdP. |
| Assign users to the Cobalt application in the IdP system. | Add users to the new SAML application that you've set up. |
