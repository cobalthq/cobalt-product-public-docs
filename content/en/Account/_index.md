---
title: "Sign In to Cobalt"
linkTitle: "Account"
weight: 90
description: >
  Manage your account access. Sign in to the Cobalt app.
---

{{% pageinfo %}}
Learn about your first steps with Cobalt after receiving a welcome email.
{{% /pageinfo %}}

## Set Up Your Account

Once you've received a welcome email from Cobalt, do the following:

1. Select **Sign In** in the email.
1. Create a strong password. To learn more, read our [password best practices](/platform-deep-dive/cobalt-account/password-best-practices/).

Once you've confirmed your email address and created a password, your Cobalt account is fully set up.

## Sign-in Methods

Depending on the configurations of your organization, you can sign in to Cobalt in the following ways:

- Through [SAML single sign-on](#saml-sso), if configured. Go to your identity provider system to sign in to Cobalt, or follow a unique URL.
  - If your organization has [enforced SAML](/platform-deep-dive/organization/organization-settings/saml-sso/#enforce-saml-sso), authentication from the Cobalt {{% sign-in %}} page is not possible.
- From the Cobalt {{% sign-in %}} page, with:
  - Your email address and password.
  - Your Google account with which you were invited to Cobalt.<br><br>
    ![Cobalt Sign In page](/gsg/Cobalt-sign-in-page.png "Cobalt Sign In page")

{{< alert title="Tip" color="primary" >}}
If you have problems signing in, see [Troubleshoot Sign-in Issues](/platform-deep-dive/cobalt-account/account-recovery/).
{{< /alert >}}

## SAML SSO

We support [identity provider-initiated single sign-on (SSO)](/getting-started/glossary/#idp-initiated-sso) based on the [Security Assertion Markup Language](/getting-started/glossary/#security-assertion-markup-language) 2.0 (SAML 2.0) protocol. SAML-based SSO is available to all [PtaaS tiers](/platform-deep-dive/credits/ptaas-tiers/).

Navigate to your identity provider, and select the Cobalt app to authenticate. Depending on the setup, you may need to follow a unique URL.

SAML SSO affects the following roles:

{{% owner-member-team-member %}}

If your organization [enforces SAML SSO](/platform-deep-dive/organization/organization-settings/saml-sso/#enforce-saml-sso), **you must authenticate only through your identity provider**, such as Okta, OneLogin, or Microsoft Azure AD. Authentication from the Cobalt {{% sign-in %}} page is not possible.

Learn more about [configuring SAML SSO](/platform-deep-dive/organization/organization-settings/saml-sso/) (for Organization Owners).

{{< alert title="Tip" color="primary" >}}
If you can't sign in through SAML SSO, see our [troubleshooting tips](/platform-deep-dive/cobalt-account/account-recovery/#cant-sign-in-using-saml-sso).
{{< /alert >}}

## Two-Factor Authentication

We support two-factor authentication (2FA) **for users who sign in with their email and password**. If you're using [SAML SSO](#saml-sso) to sign in, you don't need to turn on 2FA.

- If your organization [enforces 2FA](/platform-deep-dive/organization/organization-settings/enforce-2fa/) for all users, configure it upon signing in.
- We recommend that you [enable 2FA](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication) even if your organization doesn't enforce it.

{{< alert title="Tip" color="primary" >}}
{{% 2fa-see-troubleshooting %}}
{{< /alert >}}

## Browser Verification

{{% browser-verification-intro %}}

{{< alert title="Tip" color="primary" >}}
If you see the **Verify Your Browser** message upon signing in, follow the steps described in [We Don't Recognize Your Browser](/platform-deep-dive/cobalt-account/account-recovery/#we-dont-recognize-your-browser).
{{< /alert >}}
