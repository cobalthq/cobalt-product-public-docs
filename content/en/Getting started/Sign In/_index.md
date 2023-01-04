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

1. From the webpage that appears, create a password. Follow the complexity
   requirements on the screen. We require passwords with at least:
   - Eight (8) characters
   - One (1) uppercase letter
   - One (1) lowercase letter
   - One (1) digit

   We also include a link to our [Terms and Conditions](https://cobalt.io/terms/general).

1. Once you've set a password, you should see the Cobalt app.

1. Next time you can sign in to Cobalt in the following ways:
   - From the {{% sign-in %}} page, with:
      - A username and password. Your username is your email address.
      - A Google account that you used to sign in to Cobalt<br>
      ![Cobalt Sign In page](/gsg/SignInPage.png "Cobalt Sign In page")
   - Through [SAML SSO](#saml-sso), if configured

{{% alert title="Note" color="primary" %}}
If you have problems signing in, see <a href="/platform-deep-dive/cobalt-account/account-recovery/">Account Recovery</a>.
{{% /alert %}}

## SAML SSO

We support single sign-on (SSO) based on [Security Assertion Markup Language](/platform-deep-dive/glossary/#security-assertion-markup-language) 2.0 (SAML 2.0). SAML-based single sign-on (SSO) is available to all <a href="https://www.cobalt.io/pentest-pricing" target="_blank">PtaaS tiers</a>.

Once your [Organization Owner](/platform-deep-dive/glossary/#organization-owner) has configured SAML SSO, you need to sign in to Cobalt through the identity provider (IdP) instead of the Cobalt {{% sign-in %}} page. Procedures differ for each provider. Usually, you need to select the Cobalt app within the IdP system.

{{% alert title="Note" color="primary" %}}
If you can't sign in through SAML SSO, see our <a href="/platform-deep-dive/cobalt-account/account-recovery/#cant-sign-in-using-saml-sso">troubleshooting tips</a>.
{{% /alert %}}

Learn how Organization Owners can [configure SAML SSO](https://cobaltio.zendesk.com/hc/en-us/sections/360012774052--SAML-SSO-).

## Two-Factor Authentication

We support two-factor authentication (2FA). After you sign in, select the profile icon in the upper-right corner, and then select **Security Settings**.

If you’re using [SAML SSO](#saml-sso) to sign in, you don’t need to turn on 2FA.

{{% alert title="Note" color="primary" %}}
If you have problems signing in with 2FA, see our <a href="/platform-deep-dive/cobalt-account/account-recovery/#problems-with-two-factor-authentication">troubleshooting tips</a>.
{{% /alert %}}

## Next Step

You can now start setting up a pentest. Select **Create a Pentest**, and proceed to the next step to [define your assets](../assets).
