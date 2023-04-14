---
title: "How to Configure SAML 2.0 for Cobalt"
linkTitle: "Okta as IdP"
weight: 20
toc_hide: true
hide_summary: true
description: >
  Configure SAML with Okta as an identity provider (IdP).
---

{{% pageinfo %}}
This guide is for Organization Owners who configure SAML with Okta as an identity provider (IdP) using the preconfigured [Cobalt SAML app](https://www.okta.com/integrations/cobalt/). If you want to [create an application for Okta](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm?cshid=ext_Apps_App_Integration_Wizard-saml) manually, see [how to set up the configuration](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#okta).
{{% /pageinfo %}}

If your organization enforces SAML in Cobalt, users will no longer be able to sign in through the sign-in page. They must authenticate to Cobalt only through the Okta service.

## Contents

- [Supported Features](#supported-features)
- [Configuration Steps](#configuration-steps)
- [Notes](#notes)

## Supported Features

The Okta/Cobalt SAML integration supports the following features:

- IdP-initiated SSO

For more information on the listed features, visit the [Okta Glossary](https://help.okta.com/en/prod/Content/Topics/Reference/glossary.htm).

## Configuration Steps

1. Sign in to Cobalt, and go to **Settings** > **Security**. You should have an [Organization Owner](/getting-started/glossary/#organization-owner) role.
1. Under **Configure SAML**, click **Configure**. An overlay for configuring SAML opens.<br><br>
    ![SAML SSO configuration overlay in the Cobalt app](/deepdive/configure-SAML-overlay.png "SAML SSO configuration overlay in the Cobalt app")
1. Enter the following values from Okta. In the Okta Admin Dashboard, select the **Sign On** tab for the Cobalt SAML app, then click **Edit**.
    - **IdP SSO URL**: Enter **Sign on URL**.
    - **IdP Certificate**: Enter **Signing Certificate**. Download the certificate, and copy the file contents including `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.
    - Click **Save Configuration**.<br><br>
    ![Set the Application username format in Okta](/deepdive/Okta-SAML-configurations.png "Set the Application username format in Okta")
1. In Okta, select the **Sign On** tab for the Cobalt SAML app, then click **Edit**.
    - **Slug**: Enter your organization’s slug from Cobalt. To copy the slug, in Cobalt, go to **Settings** > **General**.
    - **Application username format**: Select **Email**.<br><br>
    ![Set the Application username format in Okta](/deepdive/Okta-app-username-format.png "Set the Application username format in Okta")
    - Click **Save**.
1. Done!

## Notes

The following SAML attributes are supported:

| Name      | Value          |
| --------- | -------------- |
| email     | user.userName     |
