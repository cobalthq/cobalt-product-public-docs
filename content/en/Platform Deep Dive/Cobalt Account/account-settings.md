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

![Adjust your account settings](/deepdive/AccountSettings.png "Account Settings page")

### Change Your Email Address

1. Navigate to https://app.cobalt.io/settings/account.
1. In the **Your email** field, enter a new email address that you want to link to your Cobalt account.
    - Make sure this email address is valid.
1. Enter your current password to confirm the changes, and select **Update Account**.
    - {{% forgot-password-reset %}}
1. Follow the instructions in the email you receive.

If you're signing in using [SAML single sign-on (SSO)](/getting-started/sign-in/#saml-sso), ask your identity provider (IdP) admin to verify that your email address is updated within the IdP system.

### Change Your Username

You can create a custom username for your account.

1. Navigate to https://app.cobalt.io/settings/account.
1. In the **Choose a username** field, enter a new username.
1. Enter your current password to confirm the changes, and select **Update Account**.
    - {{% forgot-password-reset %}}

### Change Your Password

Follow this instruction if you remember your password and want to change it. {{% forgot-password-reset %}}

1. Navigate to https://app.cobalt.io/settings/account.
1. In the **New password** field, enter a new password.
1. Enter the same password in the **Password Confirmation** field.
1. Enter your current password to confirm the changes, and select **Update Account**.

## Manage Security Settings

To manage two-factor authentication (2FA) settings for your account, select **Security Settings** on the user menu.

### Two-Factor Authentication

#### Enable Two-Factor Authentication

Even if your organization hasn't enforced 2FA for all users, we recommend that you enable it to enhance your account security. If you're using [SAML SSO](/getting-started/sign-in/#saml-sso) to sign in, you don't need to turn on 2FA.

![Configure 2FA for your account](/deepdive/SecuritySettings.png "Two-factor authentication page")

To enable 2FA on your account:

1. Navigate to https://app.cobalt.io/settings/security/2fa.
    - You should see **Disabled** under **Status**.
1. Enter your current password, and select **Enable two-factor authentication**.
    - {{% forgot-password-reset %}}
1. Scan the QR code using an authenticator app on your mobile device, such as [Authy](https://authy.com/) or [Google Authenticator](https://support.google.com/accounts/answer/1066447).
1. Enter a 6-character code that your authenticator app generates.
1. Select **Enable two-factor authentication** to confirm.

Now, each time you sign in to Cobalt, you need to enter a one-time code from your authenticator app. You can turn on the option to remember your device for 30 days.

For troubleshooting tips, see [Problems with Two-Factor Authentication](/platform-deep-dive/cobalt-account/account-recovery/#problems-with-two-factor-authentication).

#### Reset Two-Factor Authentication

We don't recommend turning off 2FA on your account. However, you may need to reset 2FA when:

- You want to switch to a different authenticator provider.
- You believe your [account was compromised](/platform-deep-dive/cobalt-account/account-recovery/#account-was-compromised)—and you still have access to your authenticator.
- You have a new device. Depending on your authenticator, you can transfer data to a new device without having to reset 2FA in Cobalt.
  - For Authy, [restore your access](https://support.authy.com/hc/en-us/articles/115012672088-Restoring-Authy-Access-on-a-New-Lost-or-Inaccessible-Phone) on a new device.
  - For Google Authenticator, [transfer your codes](https://support.google.com/accounts/answer/1066447?hl=en&ref_topic=2954345#zippy=%2Ctransfer-google-authenticator-codes-to-new-phone) to a new device.

If you lose access to your authenticator, start the account recovery process, as described in [Lost Access to Your Authenticator](/platform-deep-dive/cobalt-account/account-recovery/#lost-access-to-your-authenticator).

To reset 2FA on your account:

1. Navigate to https://app.cobalt.io/settings/security/2fa.
1. Enter your current password, and select **Disable two-factor authentication**.
    - {{% forgot-password-reset %}}
1. To reactivate 2FA, follow the procedure described in [Enable Two-Factor Authentication](#enable-two-factor-authentication).

## Create and Manage API Tokens

{{% api-token-intro %}} See [Create an API Token in the Cobalt UI](/apiusecases/create_asset/#create-an-api-token-in-the-cobalt-ui) for instructions.

![Create and manage API tokens to work with the Cobalt API](/deepdive/SettingsAPITokens.png "API Tokens page")

To manage your API tokens, navigate to https://app.cobalt.io/settings/api-tokens.

- To revoke all tokens, select **Revoke All Tokens**.
  - Any applications or scripts using these tokens will no longer be able to access the Cobalt API.
- To revoke a single token, select the three-dot icon {{% three-dots %}} under **Actions**, and then select **Revoke Token**.
- To edit the token name, select the three-dot icon {{% three-dots %}} under **Actions**, and then select **Edit Name**. Enter a new name in the overlay that appears.

{{< alert title="Tip" color="primary" >}}
Visit our [API documentation](https://docs.cobalt.io/v2/) to learn more about the Cobalt API.
{{< /alert >}}
