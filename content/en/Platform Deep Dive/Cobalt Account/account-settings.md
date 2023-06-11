---
title: "Account Settings"
linkTitle: "Account Settings"
weight: 30
description: >
  Explore your Cobalt account.
---

{{% pageinfo %}}
To navigate to your account settings, select the profile icon in the Cobalt app.
{{% /pageinfo %}}

## Edit Your Profile

Other users can view your profile information. To edit your profile, navigate to https://app.cobalt.io/settings/profile.

On the **Profile settings** page, you can:

- Upload a user profile image.
- Specify your full name and country.
- Add links to your profiles in social networks.
- Add your background information.

When finished, select **Update Profile** to confirm.

## Update Account Settings

To edit general account settings, select **Account Settings** on the user menu.

### Change Your Username

You can create a custom username for your account.

1. Navigate to https://app.cobalt.io/settings/account.
1. In the **Username** field, enter a new username.
1. Select **Save Changes** to confirm.

### Change Your Password

You can change your password by resetting it.

1. Navigate to https://app.cobalt.io/settings/account.
1. Select **Change Password**.
1. Follow the instructions in the email that you receive to reset your password. Learn [how to create a strong password](/platform-deep-dive/cobalt-account/password-best-practices/).

If you're using Google authentication (OAuth 2.0), sign in with your email and password, and then change your password.

If you [forgot your password](/platform-deep-dive/cobalt-account/account-recovery/#forgot-your-password), you can reset it from the Sign In page.

## Manage Security Settings

To manage two-factor authentication (2FA) settings for your account, select **Security Settings** on the user menu.

### Two-Factor Authentication

#### Enable Two-Factor Authentication

If you're **signing in with your email and password**, you can enable two-factor authentication (2FA) to protect your account. 2FA adds another layer of security to your account by requiring more than just a password to sign in.

- Even if your organization doesn't [enforce 2FA](/platform-deep-dive/organization/organization-settings/enforce-2fa/) for all users, we recommend that you enable it to enhance your account security.
- If you're signing in through single sign-on, 2FA doesn't apply. This includes [SAML SSO](/getting-started/sign-in/#saml-sso) and OAuth.

To enable 2FA on your account:

1. Navigate to https://app.cobalt.io/settings/security/2fa.
1. Under **Two-Factor Authentication (2FA)**, select **Manage**, and reauthenticate to your account.
1. To add a new authenticator device, select **Add a new OTP device**.
1. Follow the instructions on the screen to complete the process. Use an authenticator of your choice, such as [Authy](https://authy.com/) or [Google Authenticator](https://support.google.com/accounts/answer/1066447).
1. Add one or more backup devices to avoid being locked out of your account. Select **Add a new OTP device** to proceed.

Now, each time you sign in to Cobalt, you must enter a one-time code from your authenticator app. If you have problems signing in with 2FA, see our [troubleshooting tips](/platform-deep-dive/cobalt-account/account-recovery/#problems-with-two-factor-authentication).

#### Manage 2FA Devices

When you add a new 2FA device, it appears on the account security page<!--under **Current Devices**-->. Here, you can see devices with an authenticator app that generates one-time codes required for authentication to your Cobalt account.

- **Add multiple backup devices** to avoid being locked out of your account. Select **Add a new OTP device** to proceed.
- **Remove a device** if it's no longer valid or has been lost or stolen. Select **Delete**, and confirm your action.

#### Reset Two-Factor Authentication

We don't recommend turning off 2FA on your account. However, you may need to reset your 2FA methods when:

- You believe your [account was compromised](/platform-deep-dive/cobalt-account/account-recovery/#account-was-compromised)—and you still have access to one of your authenticators.
- Your authenticator device was lost or stolen.

You can remove your current 2FA devices and add new ones for added security.

To remove a 2FA device:

1. Navigate to https://app.cobalt.io/settings/security/2fa.
1. Under **Two-Factor Authentication (2FA)**, select **Manage**.
1. Locate the desired device, and select **Remove**.
    - Remove other devices if needed.

Now you can add a new 2FA device to protect your account. Make sure you also add one or more backup devices.

If you lose access to your authenticator and don't have a backup one, ask your Organization Owner to turn off 2FA. For details, see [Lost Access to Your Authenticator](/platform-deep-dive/cobalt-account/account-recovery/#lost-access-to-your-authenticator).

## Create and Manage API Tokens

To work with the Cobalt API, you need an **API token**. To manage your API tokens, navigate to https://app.cobalt.io/settings/api-tokens.

Learn how to:

- [Create an API token](/cobalt-api/create-personal-api-token/)
- [Revoke API tokens](/cobalt-api/revoke-personal-api-tokens/)

![Create and manage API tokens to work with the Cobalt API](/deepdive/API-tokens-page.png "API Tokens page")
