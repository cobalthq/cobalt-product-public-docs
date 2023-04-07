---
title: "Sign In to Cobalt"
linkTitle: "Sign In"
weight: 9
description: >
  Start the pentest process. Sign in to the Cobalt app.
---

{{% pageinfo %}}
Learn about your first steps with Cobalt after receiving a welcome email.
{{% /pageinfo %}}

## Set Up Your Account

Once you've received a welcome email from Cobalt, do the following:

1. Select **Sign In** in the email.
1. Create a password. Follow the password complexity requirements on the screen.

Once you've confirmed your email and created a password, your Cobalt account is fully set up.

## Sign-in Methods

Depending on the configurations of your organization, you can sign in to Cobalt in the following ways:

- Through [SAML single sign-on](#saml-sso), if configured. Go to your identity provider system to sign in to Cobalt. Authentication from the Cobalt {{% sign-in %}} page is not possible.
- From the Cobalt {{% sign-in %}} page, with:
  - Your email address and password.
  - Your Google account that you used to set up your profile with Cobalt.<br><br>
  ![Cobalt Sign In page](/gsg/Cobalt-Sign-In-Page.png "Cobalt Sign In page")

{{< alert title="Tip" color="primary" >}}
If you have problems signing in, see [Troubleshoot Sign-in Issues](/platform-deep-dive/cobalt-account/account-recovery/).
{{< /alert >}}

## SAML SSO

We support single sign-on (SSO) based on [Security Assertion Markup Language](/getting-started/glossary/#security-assertion-markup-language) 2.0 (SAML 2.0). SAML-based single sign-on (SSO) is available to all [PtaaS tiers](https://www.cobalt.io/pentest-pricing).

Once your organization has [configured SAML SSO](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/), you must sign in to Cobalt through the identity provider (IdP) system. Authentication from the Cobalt {{% sign-in %}} page is not possible.

This affects the following users:

{{% owner-member-team-member %}}

{{< alert title="Tip" color="primary" >}}
If you can't sign in through SAML SSO, see our [troubleshooting tips](/platform-deep-dive/cobalt-account/account-recovery/#cant-sign-in-using-saml-sso).
{{< /alert >}}

## Two-Factor Authentication

We support two-factor authentication (2FA). If you're using [SAML SSO](#saml-sso) to sign in, you don't need to turn on 2FA.

- If your organization enforces all users to enable 2FA, configure it upon signing in.
- We recommend that you [enable 2FA](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication) even if your organization doesn't enforce it.

{{< alert title="Tip" color="primary" >}}
{{% 2fa-see-troubleshooting %}}
{{< /alert >}}

## Device Verification

{{% device-verification-intro %}}

{{< alert title="Tip" color="primary" >}}
If you see the **Verify It's You** message upon signing in, follow the steps described in [We Don't Recognize Your Device](/platform-deep-dive/cobalt-account/account-recovery/#we-dont-recognize-your-device).
{{< /alert >}}
