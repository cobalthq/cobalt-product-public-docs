---
title: "Account Recovery"
linkTitle: "Account Recovery"
weight: 20
aliases: /getting-started/sign-in/account-recovery/
description: >
  Learn how to recover your Cobalt account.
---

{{% pageinfo %}}
If you have problems signing in, refer to the instructions on this page. To get more help, reach out to {{% csm-support %}}.
{{% /pageinfo %}}

{{< alert title="Tip" color="primary" >}}
Before proceeding, ask your Organization Owner if SAML-based single sign-on (SSO) is enabled for your organization. If yes, sign in from the identity provider (IdP) system, not the Cobalt {{% sign-in %}} page. For more troubleshooting tips, see [Can’t Sign In Using SAML SSO](#cant-sign-in-using-saml-sso), below.
{{< /alert >}}

Follow these instructions if you can't sign in to Cobalt because:

- You have [problems with two-factor authentication (2FA)](#problems-with-two-factor-authentication):
  - You [lost access to your authenticator](#lost-access-to-your-authenticator).
  - [One-time codes](#one-time-codes-dont-work) don't work.
  - ["Remember this device" option](#remember-this-device-doesnt-work)  doesn't work.
- You [forgot your password](#forgot-your-password).
- You [can’t sign in using SAML SSO](#cant-sign-in-using-saml-sso).
- You are [locked out of your account](#locked-out-of-your-account).
- You believe [your account was compromised](#account-was-compromised).

{{%expand "Here are some general tips that may help." %}}

- Sign in from another browser.
- Turn on incognito mode in your browser.
- Clear your browsing data.
{{% /expand %}}

## Problems with Two-Factor Authentication

### Lost Access to Your Authenticator

Users in the following roles can ask an [Organization Owner](/getting-started/glossary/#organization-owner) to turn off [two-factor authentication (2FA)](/getting-started/sign-in/#two-factor-authentication) for their account:

- [Organization Owner](/getting-started/glossary/#organization-owner)
- [Organization Member](/getting-started/glossary/#organization-member)
- [Pentest Team Member](/getting-started/glossary/#pentest-team-member)

{{% org-owner-2fa %}} upon your request. Follow the steps below.

To request to turn off 2FA:

1. Sign in to Cobalt from the {{% sign-in %}} page in one of the following ways:
   - With your username and password
   - By selecting **Sign in with Google**
1. On the page prompting you to enter a one-time code, select **Start account recovery process**.<br><br>
    ![Two-Factor Authentication page](/deepdive/SignIn2FARecovery.png "Select 'Start account recovery process' to recover your account")
1. Once you get an email with a one-time identity verification code, enter the code, and select **Verify**.
1. Your Organization Owner gets notified and [turns off 2FA](#turn-off-2fa-for-a-user) for your account.
   - {{% org-owner-2fa %}}.
1. You get an email notification confirming that your 2FA settings were updated.
1. You can now sign in without a second authentication factor.
   - If your organization enforces 2FA, enable it upon signing in.

Once you've set up a new authenticator, you can [turn on 2FA](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication) again.

#### Turn Off 2FA for a User

As an [Organization Owner](/getting-started/glossary/#organization-owner), you can turn off two-factor authentication for a user following their request.

1. Once you get an email notification requesting you to turn off 2FA, select **Recover Account** in the email.
1. On the **People** page of your dashboard, locate the user who submitted the request.
1. Select the three-dot icon {{% three-dots %}} on the right, and then select **Turn Off 2FA**.
   - We verified the user's identity with a one-time verification code. However, we recommend that you verify their identity again before turning off 2FA.<br>
       ![Turn off 2FA for a user](/deepdive/TurnOff2FA.png "Turn off 2FA for a user")
1. Select **Confirm** in the overlay that appears.

### One-Time Codes Don't Work

One-time codes that your authenticator app generates are time-based. If the codes that you enter when signing in are invalid, do the following:

- Enter the code promptly, within 30 seconds as it appears in the authenticator app.
- Make sure the time is synchronized between the devices. If you manually changed the time zone on your mobile device earlier, select the system time zone.

### "Remember This Device" Doesn't Work

When you sign in to Cobalt using 2FA, you can select **Remember this device for 30 days**. This option works for a specific device and browser.

You need to enter a one-time code from your authenticator if:

- You're using a different device or browser.
- You cleared cookies from your browser, or you haven't enabled them.
- You're browsing in incognito mode.
- You're using a different internet connection.
- Another user signed in on the same device using the same browser.

## Forgot Your Password

To reset your password:

1. On the {{% sign-in %}} page, select **Forgot password?**.
1. Enter your email address that you used to [sign in to Cobalt](/getting-started/sign-in/), and select **Reset Password**.
1. Follow the instructions in the email you receive.

## Can't Sign In Using SAML SSO

If your organization has enabled [SAML SSO](/getting-started/sign-in/#saml-sso), sign in from the identity provider system, such as Okta or OneLogin. You can't sign in from the Cobalt {{% sign-in %}} page.

- If you don't know what identity provider your organization uses, contact your Organization Owner.
- If you don't see the Cobalt app within your identity provider, contact your IdP admin. They'll add Cobalt to your IdP account.
- Ensure that you're a provisioned user both in the IdP system and Cobalt. Complete the account setup process for Cobalt, which includes confirming your email address and creating a password. The email address for your IdP and Cobalt must match.
- As an Organization Owner, ensure that your SAML SSO configuration is correct.

## Locked Out of Your Account

If you make several unsuccessful attempts to sign in, we’ll temporarily lock your account.

To unlock your account, follow the instructions in the email that you receive. If you still can't sign in, contact us at support@cobalt.io.

## Account Was Compromised

If you believe your account was compromised, reach out to {{% csm-support %}}. We'll open an investigation.

If you have access to your Cobalt account, do the following:

1. [Change your password](/platform-deep-dive/cobalt-account/account-settings/#change-your-password).
1. [Reset two-factor authentication](/platform-deep-dive/cobalt-account/account-settings/#reset-two-factor-authentication).
