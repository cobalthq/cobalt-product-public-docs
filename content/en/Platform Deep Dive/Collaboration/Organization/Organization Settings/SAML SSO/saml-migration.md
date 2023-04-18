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

- Our **Assertion Consumer Service (ACS) URL** is no longer `https://api.cobalt.io/users/saml/auth`, but is now unique per organization. To get your unique ACS URL, go to **Settings** > **Security** > **Configure SAML** in the Cobalt app.
- We no longer require a **RelayState** within the assertion.
- Organization Owners can now enable or disable [SSO enforcement](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#enforce-saml-sso).

## How to Update Your SAML Configuration

Update your SAML SSO configuration between Cobalt and your identity provider (IdP). You need to copy parameters between two systems, so it's handy to have both applications open. See [instructions for some popular IdPs](#instructions-for-specific-identity-providers) below.

1. In your identity provider:
    - Update the <span style="background-color: #ECE6FA; padding: 2px;">**ACS URL**</span> with the current value from Cobalt. The name of this parameter may differ for different IdPs. To get the ACS URL, in Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**, and copy the ACS URL value.
1. In Cobalt:
    - Go to **Settings** > **Security**.
      - Make sure that the **Enforce SAML** toggle is turned off. You can [enforce SAML](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#enforce-saml-sso) after you complete the configuration.
      - You can view your legacy configuration under **Legacy SAML Configuration**. It may not match your current setup in the IdP.
    - Under **Configure SAML**, select **Configure**.
    - Update the <span style="background-color: #ECE6FA; padding: 2px;">**IdP Certificate**</span> with the current value from your identity provider, and select **Save Configuration** to confirm.
1. We no longer require a <span style="background-color: #ECE6FA; padding: 2px;">**RelayState**</span> within the assertion. Delete it from the configuration in your IdP.
1. Test the configuration. In the identity provider, select the Cobalt tile. You should be authenticated to Cobalt.

## Instructions for Specific Identity Providers

Learn how to update your SAML configuration with the following IdPs:

- [Okta](#okta)
- [Azure AD](#azure-ad)
- [Duo](#duo)
- [Google](#google)
- [JumpCloud](#jumpcloud)
- [OneLogin](#onelogin)
- [Ping](#ping)

### Okta

<!--If you're using a preconfigured [Cobalt app](https://www.okta.com/integrations/cobalt/) in Okta, you only need to update the **Slug** value. To copy your organization's slug, in Cobalt, go to **Settings** > **General**.-->

To update your existing SAML configuration with Okta:

1. In Okta, go to your SAML application for Cobalt.
    - **Single sign-on URL**: Enter **ACS URL** from Cobalt.
    - Delete the **Default Relay State** value.
1. In Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Signing Certificate** from Okta.

To set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [Okta](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#okta).

### Azure AD

To update your existing SAML configuration with Azure AD:

1. In Azure AD, go to your SAML application for Cobalt.
    - **Reply URL (Assertion Consumer Service URL)**: Enter **ACS URL** from Cobalt.
    - Delete the **Relay State** value.
1. In Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Certificate (Base64)** from Azure AD.

If you want to set up a new application, follow this [instruction](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#azure-ad).

### Duo

To update your existing SAML configuration with Duo:

1. In Duo, go to your SAML application for Cobalt.
    - **Assertion Consumer Service (ACS) URL**: Enter **ACS URL** from Cobalt.
    - Delete the **Default Relay State** value.
1. In Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Certificate** from Duo.

If you want to set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [Duo](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#duo).

### Google

To update your existing SAML configuration with Google:

1. In the Google Admin console, go to your SAML application for Cobalt.
    - **ACS URL**: Enter **ACS URL** from Cobalt.
    - Delete the **Start URL** value (RelayState).
1. In Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Certificate** from Google.

To set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [Google](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#google).

### JumpCloud

To update your existing SAML configuration with JumpCloud:

1. In JumpCloud, go to your SAML application for Cobalt.
    - **ACS URL**: Enter **ACS URL** from Cobalt.
    - Delete the **Default RelayState** value.
1. In Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Public certificate** from JumpCloud.

To set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [JumpCloud](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#jumpcloud).

### OneLogin

To update your existing SAML configuration with OneLogin:

1. In OneLogin, go to your SAML application for Cobalt.
    - **Recipient**, **ACS (Consumer) URL Validator**, and **ACS (Consumer) URL**: Enter **ACS URL** from Cobalt.
    - Delete the **RelayState** value.
1. In Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **X.509 Certificate** from OneLogin.

To set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [OneLogin](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#onelogin).

### Ping

To update your existing SAML configuration with Ping:

1. In Ping, go to your SAML application for Cobalt.
    - **ACS**: Enter **ACS URL** from Cobalt.
    - Delete the **RelayState** value.
1. In Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
    - **IdP Certificate**: Enter **Signing Certificate** from Ping.

To set up a new application, see the [general workflow](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#general-configuration-workflow) and configuration parameters for [Ping](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#ping).

## Troubleshoot Your SAML SSO Configuration

If the updated SAML configuration doesn't work, see our [troubleshooting tips](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#troubleshoot-your-saml-sso-configuration).

To get help, contact your Customer Success Manager (CSM) or support@cobalt.io.
