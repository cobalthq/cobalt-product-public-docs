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

Follow these instructions if you can't sign in to Cobalt because:

- You have [problems with two-factor authentication (2FA)](#problems-with-two-factor-authentication):
  - You [lost access to your authenticator](#lost-access-to-your-authenticator).
  - [One-time codes](#one-time-codes-dont-work) don't work.
  - ["Remember this device" option](#remember-this-device-doesnt-work)  doesn't work.
- You [forgot your password](#forgot-your-password).
- You [can’t sign in using SSO](#cant-sign-in-using-sso).
- You are [locked out of your account](#locked-out-of-your-account).
- You believe [your account was compromised](#account-was-compromised).

{{%expand "Here are some general tips that may help." %}}

- Sign in from another browser.
- Turn on incognito mode in your browser.
- Clear your browsing data.
{{% /expand %}}

## Problems with Two-Factor Authentication

### Lost Access to Your Authenticator

Users in the following roles can ask an [_Organization Owner_](/getting-started/glossary/#organization-owner) to turn off [two-factor authentication](/getting-started/sign-in/#two-factor-authentication) (2FA) for their account:

- [_Organization Owner_](/getting-started/glossary/#organization-owner)
- [_Organization Member_](/getting-started/glossary/#organization-member)
- [_Pentest Team Member_](/getting-started/glossary/#pentest-team-member)

Follow these steps:

1. Sign in to Cobalt from the {{% sign-in %}} page in one of the following ways:
   - With your username and password
   - By selecting **Sign in with Google**
1. On the page prompting you to enter a one-time code, select **Start account recovery process**.
1. Once you get an email with a one-time verification code, enter the code, and select **Verify**.
1. Your _Organization Owner_ gets notified and turns off 2FA for your account.
   - If you are the only _Organization Owner_, we'll turn off 2FA for you.
1. You get an email notification confirming that your 2FA settings were updated.
1. You can now sign in without a second authentication factor.
   - If your organization enforces 2FA, enable it upon signing in.

Once you've set up a new authenticator, you can turn on 2FA again.<!--Add link to instruction-->

#### Turn Off 2FA for a User

As an [_Organization Owner_](/getting-started/glossary/#organization-owner), you can turn off two-factor authentication for a user following their request.

1. Once you get an email notification requesting you to turn off 2FA, select **Recover Account** in the email.
1. On the **People** page of your dashboard, locate the user who submitted the request.
1. Select the three-dot icon on the right, and then select **Turn Off 2FA**.
   - We verified the user's identity with a one-time verification code. However, we recommend that you verify their identity again before turning off 2FA.
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

## Can't Sign In Using SSO

If you have problems signing in through [SAML SSO](/getting-started/sign-in/#saml-sso), contact your administrator for help. Ensure that:

- You're signing in from the identity provider system, such as Okta or OneLogin, and not the Cobalt {{% sign-in %}} page.
- You've completed the account setup process in the Cobalt app, which includes confirming your email address and password.

## Locked Out of Your Account

If you make several unsuccessful attempts to sign in, we'll temporarily lock your account. You can see what went wrong in the error message that appears.

Try to sign in again after 15 minutes. If you still can't sign in, contact us at support@cobalt.io.

## Account Was Compromised

If you believe your account was compromised, reach out to {{% csm-support %}}. We'll open an investigation.

If you have access to your Cobalt account, do the following:

1. Reset your password.<!--Add link to instruction-->
1. Reset two-factor authentication.<!--Add link to instruction-->
