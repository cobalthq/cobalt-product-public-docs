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

- If you don't update your SAML configuration, users in your organization will have to authenticate with their email and password or using OAuth.
- Make sure to update configurations for each organization where you're an Organization Owner.
- If you don't have a legacy SAML setup, please visit [Configure SAML SSO](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/) for instructions.

## What Has Changed in the SAML Implementation

Here is a summary of updates:

- Our **Assertion Consumer Service (ACS) URL** is no longer `https://api.cobalt.io/users/saml/auth`, but is now unique per organization. To get your unique ACS URL, go to **Settings** > **Security** > **Configure SAML** in the Cobalt app.
- We no longer require a **RelayState** within the assertion.
- Organization Owners can now enable or disable [SSO enforcement](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#enforce-saml-sso).

## How to Update Your SAML Configuration

Update your SAML SSO configuration between Cobalt and your identity provider (IdP). You need to copy parameters between two systems, so it's handy to have both applications open.

1. In your identity provider:
    - Update the **ACS URL** with the current value from Cobalt. The name of this parameter may differ for different IdPs. To get the ACS URL, in Cobalt, go to **Settings** > **Security**. Under **Configure SAML**, select **Configure**, and copy the ACS URL value.
    - **For Okta**: If you're using a preconfigured [Cobalt app](https://www.okta.com/integrations/cobalt/) in Okta, you only need to update the **Slug** value. To copy your organization's slug, in Cobalt, go to **Settings** > **General**.
1. In Cobalt:
    - Go to **Settings** > **Security**.
      - Make sure that the **Enforce SAML** toggle is turned off. You can [enforce SAML](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#enforce-saml-sso) after you complete the configuration.
      - You can view your legacy configuration under **Legacy SAML Configuration**. It may not match your current setup in the IdP.
    - Under **Configure SAML**, select **Configure**.
    - Update the **IdP Certificate** with the current value from your identity provider, and select **Save Configuration** to confirm.
1. We no longer require a **RelayState** within the assertion. Remove it from the configuration in your IdP.
1. Test the configuration. In the identity provider, select the Cobalt tile. You should be authenticated to Cobalt.
