---
title: "Account Recovery"
linkTitle: "Account Recovery"
weight: 10
description: >
  Learn how to recover your Cobalt account.
---

{{% pageinfo %}}
Refer to this page if you lose access to your authenticator app or forget your password. If you have problems signing in through [SAML SSO](../#saml-sso), contact your administrator for help.
{{% /pageinfo %}}

## Lost Access to Your Authenticator

Users in the following roles can ask an [_Organization Owner_](/getting-started/glossary/#organization-owner) to turn off [two-factor authentication](../#two-factor-authentication) (2FA) for their account:

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

Once you've set up a new authenticator, you can turn on 2FA again.

### Turn Off 2FA for a User

As an [_Organization Owner_](/getting-started/glossary/#organization-owner), you can turn off two-factor authentication for a user following their request.

1. Once you get an email notification requesting you to turn off 2FA, select **Recover Account** in the email.

1. On the **People** page of your dashboard, locate the user who submitted the request.

1. Select the three-dot icon on the right, and then select **Turn Off 2FA**.
   - We verified the user's identity with a one-time verification code. However, we recommend that you verify their identity again before turning off 2FA.

1. Select **Confirm** in the overlay that appears.

## Forgot Your Password

To reset your password:

1. On the {{% sign-in %}} page, select **Forgot password?**.

1. Enter your email address, and select **Reset Password**.

1. Follow the instructions in the email you receive.
