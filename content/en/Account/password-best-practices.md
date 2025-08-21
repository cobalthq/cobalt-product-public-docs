---
title: "Password Best Practices"
linkTitle: "Password Best Practices"
weight: 40

description: >
  Learn how to create a strong password.
---

{{% pageinfo %}}
Follow best practices when creating a password for your Cobalt account. A strong password helps you protect your account from unauthorized access.
{{% /pageinfo %}}

## Create a Strong Password

**Cobalt password requirements**:

- The password must contain:
  - At least 10 characters
  - At least 3 of the following:
    - Lowercase letters: a–z
    - Uppercase letters: A–Z
    - Numbers: 0–9
    - Special characters: !@#$%^&\*
- We don't allow common passwords such as `password`, `123456`, or `qwerty`.

Example of a strong password: `1$WinterIsComing$1` (don't use this example).

**How to create a strong password**:

- Use a unique passphrase that you can memorize but no one else can guess, such as an abbreviation made from the first letters of your favorite quote.
- Use a long passphrase that you can memorize. The longer your password is, the harder it is for an attacker to compromise it.
- If you find it difficult to remember multiple unique passwords, use a trusted password management tool.

**Avoid the following**:

- Sharing your passwords with anyone.
- Reusing one password on multiple accounts. If an attacker compromises one of your accounts, they can access your other accounts using the same password.
- Writing your passwords down. If you have no other choice, store your written passwords in a secret place that no one else knows about.
- Using common words and patterns:
  - Keyboard patterns, such as `qwerty` or `123456`
  - Special characters instead of letters, such as in `P@ssw0rd`
  - Obvious words, such as `password` or `mypass`
- Using passwords that contain easily accessible information. A threat actor can guess your password if they know your personal data, such as:
  - Your name or birthday
  - Names or birthdays of your family members
  - Your phone number or email address
  - Your Social Security Number or ID number

## Protect Your Account

To add an extra layer of security to your account, enable [two-factor authentication (2FA)](/platform-deep-dive/cobalt-account/account-settings/#two-factor-authentication). 2FA only works when you sign in with your email and password.

As an [Organization Owner](/platform-deep-dive/collaboration/user-roles/#organization-owner), you can enhance the security of user accounts within your organization:

- [Enforce 2FA](/platform-deep-dive/organization/organization-settings/enforce-2fa/).
- [Enable SAML single sign-on (SSO)](/platform-deep-dive/organization/organization-settings/saml-sso/). You can also [enforce SAML](/platform-deep-dive/organization/organization-settings/saml-sso/#enforce-saml-sso) to require users to authenticate only through SAML SSO.
