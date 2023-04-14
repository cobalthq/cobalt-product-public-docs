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
Before proceeding, ask your Organization Owner if SAML-based single sign-on (SSO) is enabled for your organization. If yes, sign in from the identity provider (IdP) system, not the Cobalt {{% sign-in %}} page. For more troubleshooting tips, see [Can't Sign In Using SAML SSO](#cant-sign-in-using-saml-sso), below.
{{< /alert >}}

Follow these instructions if you can't sign in to Cobalt because:

- You have [problems with two-factor authentication (2FA)](#problems-with-two-factor-authentication):
  - You [lost access to your authenticator](#lost-access-to-your-authenticator).
  - [One-time codes](#one-time-codes-dont-work) don't work.
- You [forgot your password](#forgot-your-password).
- [We don't recognize your device](#we-dont-recognize-your-device).
- You have [problems with SAML SSO](#cant-sign-in-using-saml-sso).
- You are [locked out of your account](#locked-out-of-your-account).
- [The sign-in page doesn't load](#the-sign-in-page-doesnt-load).
- You believe [your account was compromised](#account-was-compromised).

{{%expand "Here are some general tips that may help." %}}

- Sign in from another browser.
- Turn on incognito mode in your browser.
- Clear your browsing data.
{{% /expand %}}

## Problems with Two-Factor Authentication

### Lost Access to Your Authenticator

If you lost access to your authenticator and don't have a backup device, ask your [Organization Owner](/getting-started/glossary/#organization-owner) to [turn off two-factor authentication (2FA)](#turn-off-2fa-for-a-user) on your account. If you’re the only Organization Owner, contact {{% csm-support %}} for help.

Once your Organization Owner has turned off 2FA, you get an email notification. You can now sign in without a second authentication factor.

To protect your account, [enable 2FA](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication). Add one or more backup authenticators to avoid being locked out of your account.

#### Turn Off 2FA for a User

As an [Organization Owner](/getting-started/glossary/#organization-owner), you can turn off two-factor authentication for a user. A user who needs help with 2FA should contact their Organization Owner directly.

If you’re the only Organization Owner, contact {{% csm-support %}} for help.

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

## Forgot Your Password

To reset your password:

1. On the {{% sign-in %}} page, select **Forgot password?**.
1. Enter your email address that you used to [sign in to Cobalt](/getting-started/sign-in/), and select **Reset Password**.
1. Follow the instructions in the email you receive.

## We Don't Recognize Your Device

{{% device-verification-intro %}}

When you see the **Verify It's You** message upon signing in, do the following:

1. Check your email that you used to sign in to Cobalt.
1. In the email prompting you to verify your device, double-check the details of your last sign-in attempt, and select **Verify Device**.
    - If you don't recognize this sign-in attempt, do the following:
       - Contact {{% csm-support %}}. {{% compromised-account-action %}}
       - [Change your password](/platform-deep-dive/cobalt-account/account-settings/#change-your-password), and [reset two-factor authentication](/platform-deep-dive/cobalt-account/account-settings/#reset-two-factor-authentication).
    - Make sure to verify your device before the link in the email expires.
1. We save the device information and sign you in to the Cobalt app.
    - You get an email confirming that we verified your new device.
    - Next time you sign in from this device, you don't need to verify it again.

To enhance your account security, we recommend that you [enable two-factor authentication](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication).

## Can't Sign In Using SAML SSO

If your organization has enforced [SAML SSO](/getting-started/sign-in/#saml-sso), sign in from the identity provider system, such as Okta or OneLogin. Authentication from the Cobalt {{% sign-in %}} page is not possible.

- If you don't know what identity provider your organization uses, contact your Organization Owner.
- If you don't see the Cobalt app within your identity provider, contact your IdP admin. They'll add Cobalt to your IdP account.
- Ensure that you're a provisioned user both in the IdP system and Cobalt. Complete the account setup process for Cobalt, which includes confirming your email address and creating a password. The email address for your IdP and Cobalt must match.

For [Organization Owners](/getting-started/glossary/#organization-owner):

- Ensure that your [SAML SSO configuration](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/#troubleshoot-your-saml-sso-configuration) is correct.
- If you're using a legacy SAML configuration, [update it to the new setup](/platform-deep-dive/collaboration/organization/organization-settings/saml-sso/saml-migration/).

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

| Error | Description | Troubleshooting Steps |
|---|---|---|
| `You have to confirm your email address before continuing` | You haven't set up your account on the Cobalt platform. | To fully set up your account: <ol><li>Confirm your email address by selecting the link in the email invitation.</li><li>Create a password.</li></ol><p>Check your spam folder and filters for a welcome email from Cobalt.</p><p>If the invitation link in the email has expired, ask your [Organization Owner](/getting-started/glossary/#organization-owner) to invite you to the organization once again.</p><ul><li>**If you're an Organization Owner**: To resend an invitation to a user, [remove them from your organization](/platform-deep-dive/collaboration/organization/manage-users/#remove-users), and then [invite](/platform-deep-dive/collaboration/organization/manage-users/#invite-users) them again.</li><li>**If you're the only Organization Owner in your organization**: To get help, contact {{% csm-support %}}.</li></ul> |
