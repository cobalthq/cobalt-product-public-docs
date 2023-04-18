---
title: "SAML Migration: Update Your Configuration"
linkTitle: "Update SAML"
weight: 30
description: >
  Learn how to update your SAML configuration from legacy to the new setup.
---

{{< pageinfo >}}
<p>On April 24, 2023, we made some changes to our SAML implementation. To avoid any disruptions to authentication, update your SAML configuration.</p><p>During the transition period, your existing SAML SSO setup will be valid. After the transition period, we'll stop supporting legacy configurations.</p>
{{< /pageinfo >}}

This page is for [Organization Owners](/getting-started/glossary/#organization-owner) who have set up their SAML SSO configuration **before April 24, 2023**.

- If you don't update your SAML configuration, users in your organization will have to authenticate with their email and password or using Google authentication (if relevant).
- Make sure to update configurations for each organization where you're an Organization Owner.
- If you don't have a legacy SAML setup, please visit [Configure SAML SSO](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/) for instructions.

## What Has Changed in the SAML Implementation

Here is a summary of updates:

- Our **Assertion Consumer Service (ACS) URL** is no longer `https://api.cobalt.io/users/saml/auth`, but is now unique per organization. To get your unique ACS URL, go to **Settings** > **Identity & Access** > **Configure SAML** in the Cobalt app.
- We no longer require a **RelayState** within the assertion.
- Organization Owners can now enable or disable [SSO enforcement](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#enforce-saml-sso).

## How to Update Your SAML Configuration

There are two ways to migrate to the new SAML implementation:

- **Option 1**: Create a new SAML app with your identity provider (IdP). For details, see our [instructions](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow).
- **Option 2**: Update your existing SAML configuration between Cobalt and your IdP, as described below.

Before updating your existing configuration, note the following:

- To avoid disrupting anyone's workflows, choose a time when the impact on users is minimal.
- You need to copy parameters between two systems, so it's handy to have both applications open.
- You can refer to [instructions for some popular IdPs](#instructions-for-specific-identity-providers) below.

Here's a general workflow to **update your existing SAML configuration**:

1. In your identity provider:
    - Update the <span style="background-color: #ECE6FA; padding: 2px;">**ACS URL**</span> with the current value from Cobalt. The name of this parameter may differ for different IdPs. To get the ACS URL, in Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**, and copy the ACS URL value.
1. In Cobalt:
    - Go to **Settings** > **Identity & Access**.
      - Make sure that the **Enforce SAML** toggle is turned off. You can [enforce SAML](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#enforce-saml-sso) after you complete the configuration.
      - You can view your legacy configuration under **Legacy SAML Configuration**. It may not match your current setup in the IdP.
    - Under **Configure SAML**, select **Configure**.
    - Update the <span style="background-color: #ECE6FA; padding: 2px;">**IdP Certificate**</span> with the current value from your identity provider, and select **Save Configuration** to confirm.
1. We no longer require a <span style="background-color: #ECE6FA; padding: 2px;">**RelayState**</span> within the assertion. Delete it from the configuration in your IdP.
1. Test the configuration. In the identity provider, select the Cobalt tile. You should be authenticated to Cobalt.

## Instructions for Specific Identity Providers

Learn how to update your existing SAML configuration with the following IdPs:

- [Okta](#okta)
- [Azure AD](#azure-ad)
- [Duo](#duo)
- [Google](#google)
- [OneLogin](#onelogin)

### Okta

<!--If you're using a preconfigured [Cobalt app](https://www.okta.com/integrations/cobalt/) in Okta, you only need to update the **Slug** value. To copy your organization's slug, in Cobalt, go to **Settings** > **General**.-->

To update your existing SAML configuration with Okta:

1. In Okta, go to your SAML application for Cobalt. On the **General** tab, under **SAML Settings**, select **Edit**, then select **Next**.
    - **Single sign-on URL**: Enter **ACS URL** from Cobalt.
    - Delete the **Default Relay State** value.<br><br>
    ![Update SAML settings in the Cobalt SAML app in Okta](/deepdive/Cobalt-Okta-SAML-app-update-1.png "Update SAML settings in the Cobalt SAML app in Okta")
1. In Okta, go the **Sign On** tab, and select **Edit**. Under **SAML 2.0**, select **More details**.
    - Download the **Signing Certificate**.<br><br>
    ![Download the Signing Certificate in the Cobalt SAML app in Okta](/deepdive/Cobalt-Okta-SAML-app-update-2.png "Download the Signing Certificate in the Cobalt SAML app in Okta")
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter the **Signing Certificate** from Okta.<br><br>
    ![Update SAML settings for Okta in Cobalt](/deepdive/Cobalt-Okta-SAML-app-update-3.png "Update SAML settings for Okta in Cobalt")

If you want to set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [Okta](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#okta).

### Azure AD

To update your existing SAML configuration with Azure AD:

1. In Azure AD, go to your SAML application for Cobalt.
    - **Reply URL (Assertion Consumer Service URL)**: Enter **ACS URL** from Cobalt.
    - Delete the **Relay State** value.
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Certificate (Base64)** from Azure AD.

If you want to set up a new application, follow this [instruction](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#azure-ad).

### Duo

To update your existing SAML configuration with Duo:

1. In Duo, go to your SAML application for Cobalt.
    - **Assertion Consumer Service (ACS) URL**: Enter **ACS URL** from Cobalt.
    - Delete the **Default Relay State** value.
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Certificate** from Duo.

If you want to set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [Duo](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#duo).

### Google

To update your existing SAML configuration with Google:

1. In the Google Admin console, go to your SAML application for Cobalt.
    - **ACS URL**: Enter **ACS URL** from Cobalt.
    - Delete the **Start URL** value (RelayState).
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Certificate** from Google.

If you want to set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [Google](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#google).

### OneLogin

To update your existing SAML configuration with OneLogin:

1. In OneLogin, go to your SAML application for Cobalt.
    - **Recipient**, **ACS (Consumer) URL Validator**, and **ACS (Consumer) URL**: Enter **ACS URL** from Cobalt.
    - Delete the **RelayState** value.
1. In Cobalt, go to **Settings** > **Identity & Access**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **X.509 Certificate** from OneLogin.

If you want to set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [OneLogin](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#onelogin).

## Troubleshoot Your SAML SSO Configuration

If the updated SAML configuration doesn't work, see our [troubleshooting tips](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#troubleshoot-your-saml-sso-configuration).

When updating your existing SAML configuration, ensure that:

- The **ACS URL** and **Entity ID** are correct in the IdP system.
- The **Relay State** in the IdP system is blank. We no longer support it in the new SAML implementation.
- The organization's **Slug** is accurate. The slug appears after `=` in the ACS URL. You can also find the slug in **Settings** > **General**.<br><br>
![Organization's slug in the ACS URL](/deepdive/slug-acs-url.png "Organization's slug in the ACS URL")

To get help, contact your Customer Success Manager (CSM) or support@cobalt.io.
