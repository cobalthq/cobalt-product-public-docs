<b>Defenses Against Session Management Exploits</b>:

- [ ] Verify the application ensures a valid login session or requires re-authentication or secondary verification before allowing any sensitive transactions or account modifications.

<b>Session Logout and Timeout Requirements</b>:

- [ ] If authenticators permit users to remain logged in, verify that re-authentication occurs periodically both when actively used or after an idle period of Max 30 days.
- [ ] Verify that logout and expiration invalidate the session token, such that the back button or a downstream relying party does not resume an authenticated session, including across relying parties.

<b>Session Binding Requirements</b>:

- [ ] Verify that session tokens possess at least 64 bits of entropy.
- [ ] Verify the application only stores session tokens in the browser using secure methods such as appropriately secured cookies (see section 3.4) or HTML 5 session storage.
- [ ] Verify the application generates a new session token on user authentication.

<b>Fundamental Session Management Requirements</b>:

- [ ] Verify the application never reveals session tokens in URL parameters or error messages.

<b>Cookie-based Session Management</b>:

- [ ] Verify that cookie-based session tokens have the 'HttpOnly' attribute set.
- [ ] Verify that if the application is published under a domain name with other applications that set or use session cookies that might override or disclose the session cookies, set the path attribute in cookie-based session tokens using the most precise path possible.
- [ ] Verify that cookie-based session tokens have the 'Secure' attribute set.
- [ ] Verify that cookie-based session tokens use "__Host-" prefix (see references) to provide session cookie confidentiality.
- [ ] Verify that cookie-based session tokens utilize the 'SameSite' attribute to limit exposure to cross-site request forgery attacks.