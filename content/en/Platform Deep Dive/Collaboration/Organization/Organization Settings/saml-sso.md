---
title: "Configure SAML SSO"
linkTitle: "SAML SSO"
weight: 20
description: >
  Enable SAML SSO for your organization.
---

{{% pageinfo %}}
Cobalt supports single sign-on (SSO) through [Security Assertion Markup Language 2.0 (SAML 2.0)](/getting-started/glossary/#security-assertion-markup-language).
{{% /pageinfo %}}

SAML supports [federated identity](https://www.okta.com/identity-101/what-is-federated-identity/), which allows you to sign in to different domains with a single account. With SAML, when you sign in to Cobalt, our app verifies your identity with the identity provider (IdP) that you configured. As a service provider, Cobalt pulls SAML assertions from your IdP to authenticate your users.

As an [Organization Owner](/getting-started/glossary/#organization-owner), you can set up SAML SSO for your organization. Once you’ve enabled SSO, users need to sign in through the selected IdP and not the Cobalt {{% sign-in %}} page. This affects [Organization Owners](/getting-started/glossary/#organization-owner), [Organization Members](/getting-started/glossary/#organization-member), and [Pentest Team Members](/getting-started/glossary/#pentest-team-member).

We support the following identity providers:
<!--Update links-->
- [Azure AD](https://cobaltio.zendesk.com/hc/en-us/articles/360058406992-Azure-AD-as-IdP)
- [Duo](https://cobaltio.zendesk.com/hc/en-us/articles/360058845631-DUO-as-IdP)
- [Google](https://cobaltio.zendesk.com/hc/en-us/articles/360058845671-Google-as-IdP)
- [Okta](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Cobalt.html)
- [OneLogin](https://cobaltio.zendesk.com/hc/en-us/articles/360058406872-OneLogin-as-IdP)

## General Configuration Workflow

Configuration procedures differ for each identity provider. Here’s the general workflow:

1. Configure SAML SSO on the identity provider side.
    - For each provider, see how parameters map between their platform and Cobalt.
1. Set up the integration in the Cobalt app:
    - Navigate to the **Settings** page, and then select **Identity & Access**.
    - Under **SAML 2.0**, select **Enable**.
    - Enter parameter values that you obtained from the identity provider, and select **Save**.
    - Save the **IdP RelayState** value that appears in red.<br><br>
    ![Configure SAML SSO in the Cobalt app](/deepdive/ConfigureSAML.png "Configure SAML SSO in the Cobalt app")
1. Complete the integration in the identity provider system, and test the connection.
    - Test your SAML configuration in an incognito window before signing out of Cobalt. This will prevent any account lockout.

We don’t synchronize user datastores, so make sure that all users:

- Joined your organization in Cobalt, confirmed their email address, and created a password.
- Are provisioned within your identity provider with the same email address that they use in Cobalt.

If you have problems setting up SAML SSO, see our troubleshooting tips below.

## Troubleshoot Your SAML SSO Configuration

To get help, contact your Customer Success Manager (CSM) or support@cobalt.io. We’ll turn off SAML SSO for your organization. Then you can configure it again.

| Troubleshooting Tip | Details |
|---|---|
| Ensure that the IdP certificate is accurate. | Copy the IdP certificate once again. Make sure there are no extra whitespaces. |
| Check that the organization tokens (**IdP Relay State** in Cobalt) match in the IdP system and Cobalt. Pay attention to quotation marks. | Check that all quotation marks in the organization tokens are straight quotes `" "` and not curly quotes `“ ”`. |
| Ensure that you added users to the Cobalt platform. | We don’t support user provisioning through an IdP. When leveraging an IdP, make sure that there is an established identity for a user in Cobalt.<br>To establish an identity in Cobalt, a user needs to create a password and sign in to Cobalt. All subsequent sign-ins (after the user identity is established in Cobalt) are initiated through the organization’s IdP. |
| Ensure that the IdP issuer URL value matches between your identity provider and Cobalt. | The Issuer/Identifier ID in a SAML assertion doesn’t have to be a valid URL path. For [Okta](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Cobalt.html), the IdP issuer URL must start with `http` not `https`.  |