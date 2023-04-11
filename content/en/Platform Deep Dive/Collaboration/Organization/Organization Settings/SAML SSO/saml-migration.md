---
title: "SAML Migration: Update Your Configuration"
linkTitle: "Update SAML"
weight: 30
description: >
  Learn how to update your SAML configuration from legacy to the new setup.
---

{{< pageinfo >}}
<p>On April 26, 2023, we made some changes to our SAML implementation. To avoid any disruptions to authentication, update your SAML configuration.</p><p>We'll stop supporting our legacy SAML implementation at a later date.</p>
{{< /pageinfo >}}

This page is for [Organization Owners](/getting-started/glossary/#organization-owner) who have set up their SAML SSO configuration **before April 26, 2023**. If you don't have a legacy SAML setup, please visit [Configure SAML SSO](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/) for instructions.

Update your SAML SSO configuration between Cobalt and your identity provider (IdP). You need to copy parameters between two systems, so it's handy to have both applications open.

1. In Cobalt:
    - Navigate to **Settings** > **Security**. Under **Configure SAML**, select **Configure**.
      - You can view your legacy configuration under **Legacy SAML Configuration**. These values may not match your current setup in the IdP system.
    - Update the **IdP Certificate** with the current value from your identity provider, and select **Save Configuration** to confirm.
1. In your identity provider:
    - Update the **ACS URL** with the current value from Cobalt. The ACS URL is unique for each organization.
    - The name of this parameter may differ for different IdPs.
1. Test the configuration.
