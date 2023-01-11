---
title: "Enforce Two-Factor Authentication"
linkTitle: "Enforce 2FA"
weight: 10
description: >
  Enforce 2FA for users.
---

{{% pageinfo %}}
As an [Organization Owner](/getting-started/glossary/#organization-owner), you can enforce two-factor-authentication (2FA) for all users within your organization.
{{% /pageinfo %}}

2FA enforcement affects users belonging to your organization, including the following roles:

{{% owner-member-team-member %}}

{{< alert title="Note" color="primary" >}}
If your organization uses [SAML-based single sign-on (SSO)](/getting-started/sign-in/#saml-sso), you bypass any 2FA enforcement. Your SAML provider may already require 2FA.
{{< /alert >}}

## Enforce 2FA

1. Navigate to **Settings** > **Identity & Access**.
1. Under **Two-Factor Authentication**, select **Enforce 2FA**.<br><br>
  ![Enforce 2FA for your organization](/deepdive/Enforce2FA.png "Enforce 2FA for your organization")
1. In the overlay that appears, select **Yes, enforce 2FA** to confirm.

Users who haven't yet configured 2FA on their account get an email notification. They need to enable 2FA before signing in. For details, see steps 3–5 described in [Enable Two-Factor Authentication](/platform-deep-dive/cobalt-account/account-settings/#enable-two-factor-authentication).

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

1. Navigate to **Settings** > **Identity & Access**.
1. Under **Two-Factor Authentication**, select **Disable 2FA Enforcement**.

Users within your organization are no longer required to enable 2FA. This does not automatically disable 2FA on their accounts. We recommend that they keep using 2FA to enhance their account security.
