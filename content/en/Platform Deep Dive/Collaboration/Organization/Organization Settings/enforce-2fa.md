---
title: "Enforce Two-Factor Authentication"
linkTitle: "Enforce 2FA"
weight: 10
description: >
  Enforce 2FA for users.
---

{{% pageinfo %}}
As an [Organization Owner](/getting-started/glossary/#organization-owner), you can enforce two-factor authentication (2FA) for all organization users who authenticate with their email and password.
{{% /pageinfo %}}

## Important to Know

Note the following about 2FA enforcement:

- 2FA enforcement only applies to **users who authenticate with their email and password**.
- 2FA enforcement doesn't apply to single sign-on (SSO). This includes [SAML single sign-on (SSO)](/getting-started/sign-in/#saml-sso) and Google authentication.
- If your organization has SAML SSO enforced, you can't enforce 2FA. Your SAML provider may already require 2FA.
- 2FA enforcement affects users with the following roles:
    {{% owner-member-team-member %}}

## Enforce 2FA

1. Navigate to **Settings** > **Security**.
1. Under **Enforce Two-Factor Authentication (2FA)**, turn on the toggle.
1. In the overlay that appears, confirm your action.

Users who haven't yet configured 2FA on their account get an email notification. They must enable 2FA upon their next sign-in.

As an Organization Owner who enforces 2FA, you see an overlay prompting you to [enable 2FA](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication)—if you haven't already.

{{< alert title="Tip" color="primary" >}}
{{% 2fa-see-troubleshooting %}}
{{< /alert >}}

### Check the 2FA Status of Users

To view the 2FA status on the user accounts within your organization, navigate to the **People** page. You see a yellow warning icon ![Warning icon](/icons/Warning.png "Warning icon") for a user when:

- The user hasn't enabled 2FA—regardless of the 2FA enforcement; and
- Your organization doesn't have SAML SSO configured.

We don't enforce 2FA for [Pentesters](/getting-started/glossary/#pentester) and [Pentest Leads](/getting-started/glossary/#pentest-lead), but we display a warning icon ![Warning icon](/icons/Warning.png "Warning icon") on the **Pentest Collaborators** tab if they haven't enabled 2FA.

![Check the 2FA status of users on the People page](/deepdive/Check2FAStatus.png "Check the 2FA status of users on the People page")

## Disable 2FA Enforcement

1. Navigate to **Settings** > **Security**.
1. Under **Enforce Two-Factor Authentication (2FA)**, turn off the toggle.

Users within your organization are no longer required to enable 2FA. This does not disable 2FA on their accounts. We recommend that they continue using 2FA to enhance their account security.
