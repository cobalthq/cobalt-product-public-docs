---
title: "How to Configure SAML 2.0 for Cobalt"
linkTitle: "Okta: Gallery Cobalt App"
weight: 30
toc_hide: true
aliases: /platform-deep-dive/collaboration/organization/organization-settings/saml-sso/okta/
description: >
  Configure SAML with Okta using their gallery app for Cobalt.
---

{{% pageinfo %}}
**Disclaimer:** This guide is not relevant until June 20, 2023.

This guide is for Organization Owners who configure SAML with Okta as an identity provider (IdP) using the **[gallery Cobalt SAML app](https://www.okta.com/integrations/cobalt/)**. If you want to [create a non-gallery application for Okta](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.htm?cshid=ext_Apps_App_Integration_Wizard-saml) manually, see [how to set up the configuration](/platform-deep-dive/organization/organization-settings/saml-sso/#okta).
{{% /pageinfo %}}

If your organization [enforces SAML](/platform-deep-dive/organization/organization-settings/saml-sso/#enforce-saml-sso) in Cobalt, users will no longer be able to authenticate through the sign-in page. They must authenticate to Cobalt only through the Okta service.

## Contents

- [Supported Features](#supported-features)
- [Configuration Steps](#configuration-steps)
- [Notes](#notes)

## Supported Features

The Okta/Cobalt SAML integration supports the following features:

- IdP-initiated SSO

For more information on the listed features, visit the [Okta Glossary](https://help.okta.com/en/prod/Content/Topics/Reference/glossary.htm).

## Configuration Steps

1. Sign in to Cobalt, and go to **Settings** > **Identity & Access**. You should have an [Organization Owner](/getting-started/glossary/#organization-owner) role.
1. Under **Configure SAML**, click **Configure**. An overlay for configuring SAML opens.<br><br>
    ![SAML SSO configuration overlay in the Cobalt app](/deepdive/configure-SAML-overlay.png "SAML SSO configuration overlay in the Cobalt app")
1. In Cobalt, enter the following values from Okta. In the Okta Admin Dashboard, select the **Sign On** tab for the Cobalt SAML app, then click **Edit**. Under **Metadata details**, click **More details**.
    - **IdP SSO URL**: Enter the **Sign on URL** from Okta.
    - **IdP Certificate**: Enter the **Signing Certificate** from Okta.
    - Click **Save Configuration**.<br><br>
    ![Set the Application username format in Okta](/deepdive/Okta-SAML-configurations.png "Set the Application username format in Okta")
1. In Okta, select the **Sign On** tab for the Cobalt SAML app, then click **Edit**.
    - **Slug**: Enter your organization’s slug from Cobalt. The slug appears after `=` in the ACS URL. You can also find the slug in **Settings** > **General**.<br><br>
    ![Organization's slug in the ACS URL](/deepdive/slug-acs-url.png "Organization's slug in the ACS URL")
    - **Application username format**: Select **Email**.<br><br>
    ![Set the Application username format in Okta](/deepdive/Okta-app-username-format.png "Set the Application username format in Okta")
    - Click **Save**.
1. Done!

## Notes

The following SAML attributes are supported:

| Name      | Value          |
| --------- | -------------- |
| email     | user.userName     |
