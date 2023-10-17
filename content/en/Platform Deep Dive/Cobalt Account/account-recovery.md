---
title: "Troubleshoot Sign-in Issues"
linkTitle: "Troubleshoot Sign-in Issues"
weight: 20
aliases: /getting-started/sign-in/account-recovery/
description: >
  Troubleshoot common sign-in issues.
---

{{% pageinfo %}}
If you have problems signing in, refer to the instructions on this page. To get more help, reach out to {{% csm-support %}}.
{{% /pageinfo %}}

{{< alert title="Tip" color="primary" >}}
Before proceeding, ask your Organization Owner if SAML-based single sign-on (SSO) is enforced for your organization. If yes, sign in from the identity provider (IdP) system, not the Cobalt {{% sign-in %}} page. For more troubleshooting tips, see [Can't Sign In Using SAML SSO](#cant-sign-in-using-saml-sso), below.
{{< /alert >}}

Follow these instructions if you can't sign in to Cobalt because:

- You have [problems with two-factor authentication (2FA)](#problems-with-two-factor-authentication):
  - You [lost access to your authenticator](#lost-access-to-your-authenticator)
  - [One-time codes](#one-time-codes-dont-work) don't work
  - ["Remember this device" option](#remember-this-device-doesnt-work) doesn't work
- You [forgot your password](#forgot-your-password)
- Your [account isn't fully set up](#account-isnt-fully-set-up)
- Your [email or password is invalid](#email-or-password-is-invalid)
- [We don't recognize your browser](#we-dont-recognize-your-browser)
- You have [problems with SAML SSO](#cant-sign-in-using-saml-sso)
- You're [locked out of your account](#locked-out-of-your-account)
- [The sign-in page doesn't load](#the-sign-in-page-doesnt-load)
- You believe [your account was compromised](#account-was-compromised)

{{%expand "Here are some general tips that may help." %}}

- Sign in from another browser.
- Turn on incognito mode in your browser.
- Clear your browsing data.
{{% /expand %}}

## Problems with Two-Factor Authentication

### Lost Access to Your Authenticator

If you lost access to your authenticator, ask your [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) to [turn off two-factor authentication (2FA)](#turn-off-2fa-for-a-user) on your account. If you're the only Organization Owner, contact {{% csm-support %}} for help.

Once your Organization Owner has turned off 2FA, you get an email notification. You can now sign in without a second authentication factor.

If you have a [recovery code](/getting-started/glossary/#recovery-code) enabled:

1. Sign in as usual with your email and password.
2. Under **Verify Your Identity**, select **Try another method**, then **Recovery code**.
3. Enter your saved recovery code. You will be prompted to save a new recovery code for future use before access to your account.

To protect your account, [enable 2FA](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication).

#### Turn Off 2FA for a User

As an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner), you can turn off two-factor authentication for a user. A user who needs help with 2FA should contact their Organization Owner directly.

If you're the only Organization Owner, contact {{% csm-support %}} for help.

To turn off 2FA for a user:

1. On the **People** page, locate the user who needs help with 2FA.
1. Select the three-dot icon {{% three-dots %}} on the right, and then select **Turn Off 2FA**.
   - We recommend that you verify the user's identity before turning off 2FA.<br>
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
1. Follow the instructions in the email you receive. Learn [how to create a strong password](/platform-deep-dive/cobalt-account/password-best-practices/).

## Email or Password is Invalid

When you sign in, you may see an error stating that your email or password is invalid.

Ensure that:

- Your Organization Owner has [invited](/platform-deep-dive/organization/manage-users/#invite-users) you to the Cobalt platform. You have fully set up your account in Cobalt and are signing in with the registered email address. Learn more about [setting up your account](#account-isnt-fully-set-up).
- The password you're entering is correct. If you forgot your password, [reset](#forgot-your-password) it.

If you're locked out of your account, see our [troubleshooting tips](#locked-out-of-your-account).

## Account Isn't Fully Set Up

To use the Cobalt platform, you need to fully set up your account.

1. Ask your [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner) to [invite you to your organization](/platform-deep-dive/organization/manage-users/#invite-users) in Cobalt, if they haven't already done so.
1. Confirm your email address by clicking the link in the email invitation.
1. Create a password.

Possible problems:

- If you're not receiving emails from Cobalt, see our [troubleshooting tips](/platform-deep-dive/collaboration/manage-notifications/#troubleshoot-email-notifications).
- If the invitation link in the email has expired, ask your Organization Owner to invite you once again.
  - If you're an Organization Owner: To resend an invitation to a user, [remove them from your organization](/platform-deep-dive/organization/manage-users/#remove-users), and then [invite](/platform-deep-dive/organization/manage-users/#invite-users) them again.
  - If you're the only Organization Owner in your organization: To get help, contact your Customer Success Manager (CSM) or support@cobalt.io.

## We Don't Recognize Your Browser

{{% browser-verification-intro %}}

When you see the **Verify Your Browser** message upon signing in, do the following:

1. Check your email that you used to sign in to Cobalt.
1. In the email prompting you to verify your browser, double-check the details of your last sign-in attempt, and select **Verify Browser**.
    - If you don't recognize this sign-in attempt, do the following:
       - Contact {{% csm-support %}}. {{% compromised-account-action %}}
       - [Change your password](/platform-deep-dive/cobalt-account/account-settings/#change-your-password), and [reset two-factor authentication](/platform-deep-dive/cobalt-account/account-settings/#reset-two-factor-authentication).
    - Make sure to verify your browser before the link in the email expires.
1. We save the browser information and sign you in to the Cobalt app.
    - You get an email confirming that we verified your new browser.
    - Next time you sign in from this browser, you don't need to verify it again.

To enhance your account security, we recommend that you [enable two-factor authentication](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication).

**Troubleshooting tips**:

- Make sure that cookies are turned on for the `cobalt.io` site in your browser. To turn on cookies, follow the instructions for your browser. Here are instructions for some popular browsers:
  - [Google Chrome](https://support.google.com/accounts/answer/61416)
  - [Firefox](https://support.mozilla.org/en-US/kb/websites-say-cookies-are-blocked-unblock-them)
  - [Safari](https://support.apple.com/en-au/guide/safari/ibrw850f6c51/mac)
- The subject line of the email we send is `[Cobalt] Verify Browser`. Search for this email in your mailbox. If you're not receiving emails from Cobalt, see our [troubleshooting tips](/platform-deep-dive/collaboration/manage-notifications/#troubleshoot-email-notifications).

## Can't Sign In Using SAML SSO

If your organization has enforced [SAML SSO](/getting-started/sign-in/#saml-sso), sign in from the identity provider system, such as Okta or OneLogin. Authentication from the Cobalt {{% sign-in %}} page is not possible.

- If you don't know what identity provider your organization uses, contact your Organization Owner.
- If you don't see the Cobalt app within your identity provider, contact your IdP admin. They'll add Cobalt to your IdP account.
- Ensure that you're a provisioned user both in the IdP system and Cobalt. Complete the account setup process for Cobalt, which includes confirming your email address and creating a password. The email address for your IdP and Cobalt must match.

For [Organization Owners](/platform-deep-dive/collaboration/user-roles/#organization-owner):

- Ensure that your [SAML SSO configuration](/platform-deep-dive/organization/organization-settings/saml-sso/#troubleshoot-your-saml-sso-configuration) is correct.
- If you're using a legacy SAML configuration, [update it to the new setup](/platform-deep-dive/organization/organization-settings/saml-sso/saml-migration/).

## Locked Out of Your Account

If you make several unsuccessful attempts to sign in, we'll temporarily lock your account.

To unlock your account, follow the instructions in the email that you receive. If you still can't sign in, contact us at support@cobalt.io.

## The Sign-in Page Doesn't Load

If the Cobalt {{% sign-in %}} page doesn't load, try to clear your browser's cache through a hard refresh. The most recent version of the sign-in page should load.

Instructions vary depending on the browser and operating system you're using. There may be several ways to complete this action.

{{%expand "See instructions." %}}
- **Chrome**:
  - **Windows**: Press Ctrl + F5.
  - **Mac**: Press ⌘ Cmd + Shift + R.
- **Firefox**:
  - **Windows**: Press Ctrl + F5.
  - **Mac**: Press ⌘ Cmd + Shift + R.
- **Safari**: Press Option + ⌘ Cmd + E.
- **Microsoft Edge**: Press Ctrl + F5.
{{% /expand %}}

## Account Was Compromised

If you believe your account was compromised, reach out to {{% csm-support %}}. {{% compromised-account-action %}}

If you have access to your Cobalt account, do the following:

1. [Change your password](/platform-deep-dive/cobalt-account/account-settings/#change-your-password).
1. [Reset two-factor authentication](/platform-deep-dive/cobalt-account/account-settings/#reset-two-factor-authentication).

## Error Messages upon Signing In

Here are the most common error messages you may see upon signing in to Cobalt.

| Error | Details | Troubleshooting Steps |
|---|---|---|
| `You have to confirm your email address before continuing` | You haven't fully set up your account on the Cobalt platform. | Confirm your email address by clicking the link in the email invitation, and then create a password. Learn more about [setting up your account](#account-isnt-fully-set-up). |
| `Invalid email or password` | The email address or password that you're using is incorrect. | See our [troubleshooting tips](#email-or-password-is-invalid).  |
