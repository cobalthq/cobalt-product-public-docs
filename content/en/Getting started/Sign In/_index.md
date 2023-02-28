---
title: "Sign In to Cobalt"
linkTitle: "Sign In"
weight: 9
description: >
  Start the pentest process. Sign in to the Cobalt app.
---

{{% pageinfo %}}
This page assumes that you've received a welcome email from Cobalt.
{{% /pageinfo %}}

Even if you haven't yet purchased Cobalt credits, this page (and document)
can help you visualize how you can set up a pentest with the Cobalt UI.

You've just received an email with the following title:

```
Welcome to the Cobalt Platform: Let's Get Started
```

Open the email. It should include a link to Get Started:

![Cobalt Welcome email](/gsg/WelcomeToPlatformEmail.png "Get Started")

Now you can:

1. Select the link in your email.
1. From the webpage that appears, create a password. Follow the password complexity requirements on the screen. We also include a link to our [Terms and Conditions](https://cobalt.io/terms/general).
1. Once you've set a password, you should see the Cobalt app.
1. Next time you can sign in to Cobalt in the following ways:
   - From the {{% sign-in %}} page, with:
      - An email address and password
      - A Google account that you used to sign in to Cobalt<br>
      ![Cobalt Sign In page](/gsg/SignInPage.png "Cobalt Sign In page")
   - Through [SAML SSO](#saml-sso), if configured

{{< alert title="Tip" color="primary" >}}
If you have problems signing in, see [Troubleshoot Sign-in Issues](/platform-deep-dive/cobalt-account/account-recovery/).
{{< /alert >}}

## SAML SSO

We support single sign-on (SSO) based on [Security Assertion Markup Language](/getting-started/glossary/#security-assertion-markup-language) 2.0 (SAML 2.0). SAML-based single sign-on (SSO) is available to all [PtaaS tiers](https://www.cobalt.io/pentest-pricing).

Once your [Organization Owner](/getting-started/glossary/#organization-owner) has configured SAML SSO, you need to sign in to Cobalt through the identity provider (IdP) instead of the Cobalt {{% sign-in %}} page. This affects the following users:

{{% owner-member-team-member %}}

{{< alert title="Tip" color="primary" >}}
If you can't sign in through SAML SSO, see our [troubleshooting tips](/platform-deep-dive/cobalt-account/account-recovery/#cant-sign-in-using-saml-sso).
{{< /alert >}}

Learn how Organization Owners can [configure SAML SSO](https://cobaltio.zendesk.com/hc/en-us/sections/360012774052--SAML-SSO-).

## Two-Factor Authentication

We support two-factor authentication (2FA). If you're using [SAML SSO](#saml-sso) to sign in, you don't need to turn on 2FA.

- If your organization enforces all users to enable 2FA, configure it upon signing in. Follow steps 3–5 from the instruction in [Enable Two-Factor Authentication](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication).
- We recommend that you [enable 2FA](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication) even if your organization doesn't enforce it.

{{< alert title="Tip" color="primary" >}}
{{% 2fa-see-troubleshooting %}}
{{< /alert >}}

## Device Verification

{{% device-verification-intro %}}

{{< alert title="Tip" color="primary" >}}
If you see the **Verify It's You** message upon signing in, follow the steps described in [We Don't Recognize Your Device](/platform-deep-dive/cobalt-account/account-recovery/#we-dont-recognize-your-device).
{{< /alert >}}

## Next Step

You can start [defining your assets](/getting-started/assets/). Select **New Asset** to proceed.
