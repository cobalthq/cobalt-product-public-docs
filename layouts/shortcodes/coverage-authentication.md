<b>Authenticator Lifecycle Requirements</b>:

- [ ] Verify system generated initial passwords or activation codes SHOULD be securely randomly generated, SHOULD be at least 6 characters long, and MAY contain letters and numbers, and expire after a short period of time. These initial secrets must not be permitted to become the long term password.

<b>Single or Multi Factor One Time Verifier Requirements</b>:

- [ ] Verify that time-based OTPs have a defined lifetime before expiring.

<b>General Authenticator Requirements</b>:

- [ ] Verify that anti-automation controls are effective at mitigating breached credential testing, brute force, and account lockout attacks. Such controls include blocking the most common breached passwords, soft lockouts, rate limiting, CAPTCHA, ever increasing delays between attempts, IP address restrictions, or risk-based restrictions such as location, first login on a device, recent attempts to unlock the account, or similar. Verify that no more than 100 failed attempts per hour is possible on a single account.
- [ ] Verify that secure notifications are sent to users after updates to authentication details, such as credential resets, email or address changes, logging in from unknown or risky locations. The use of push notifications - rather than SMS or email - is preferred, but in the absence of push notifications, SMS or email is acceptable as long as no sensitive information is disclosed in the notification.
- [ ] Verify that the use of weak authenticators (such as SMS and email) is limited to secondary verification and transaction approval and not as a replacement for more secure authentication methods. Verify that stronger methods are offered before weak methods, users are aware of the risks, or that proper measures are in place to limit the risks of account compromise.

<b>Password Security Requirements</b>:

- [ ] Verify that "paste" functionality, browser password helpers, and external password managers are permitted.
- [ ] Verify that user set passwords are at least 12 characters in length.
- [ ] Verify that password change functionality requires the user's current and new password.
- [ ] Verify that there are no periodic credential rotation or password history requirements.
- [ ] Verify that passwords 64 characters or longer are permitted.
- [ ] Verify users can change their password.
- [ ] Verify that Unicode characters are permitted in passwords. A single Unicode code point is considered a character, so 12 emoji or 64 kanji characters should be valid and permitted.
- [ ] Verify that there are no password composition rules limiting the type of characters permitted. There should be no requirement for upper or lower case or numbers or special characters.
- [ ] Verify that a password strength meter is provided to help users set a stronger password.
- [ ] Verify that the user can choose to either temporarily view the entire masked password, or temporarily view the last typed character of the password on platforms that do not have this as native functionality.
- [ ] Verify that passwords submitted during account registration, login, and password change are checked against a set of breached passwords either locally (such as the top 1,000 or 10,000 most common passwords which match the system's password policy) or using an external API. If using an API a zero knowledge proof or other mechanism should be used to ensure that the plain text password is not sent or used in verifying the breach status of the password. If the password is breached, the application must require the user to set a new non-breached password.
- [ ] Verify that passwords can contain spaces and truncation is not performed. Consecutive multiple spaces MAY optionally be coalesced.

<b>Out of Band Verifier Requirements</b>:

- [ ] Verify that clear text out of band (NIST "restricted") authenticators, such as SMS or PSTN, are not offered by default, and stronger alternatives such as push notifications are offered first.
- [ ] Verify that the out of band verifier expires out of band authentication requests, codes, or tokens after 10 minutes.
- [ ] Verify that the out of band authenticator and verifier communicates over a secure independent channel.
- [ ] Verify that the out of band verifier authentication requests, codes, or tokens are only usable once, and only for the original authentication request.

<b>Credential Recovery Requirements</b>:

- [ ] Verify shared or default accounts are not present (e.g. "root", "admin", or "sa").
- [ ] Verify that a system generated initial activation or recovery secret is not sent in clear text to the user.
- [ ] Verify forgotten password, and other recovery paths use a secure recovery mechanism, such as TOTP or other soft token, mobile push, or another offline recovery mechanism.
- [ ] Verify password hints or knowledge-based authentication (so-called "secret questions") are not present.
- [ ] Verify password credential recovery does not reveal the current password in any way.
- [ ] Verify that if an authentication factor is changed or replaced, that the user is notified of this event.