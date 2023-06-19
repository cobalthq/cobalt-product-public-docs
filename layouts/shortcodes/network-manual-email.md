Cobalt pentesters check SMTP, POP3, and IMAP on the mail gateway for open relay vulnerabilities. Your mail servers should:

- Accept mail _only_ for the organization's domains
- Not relay mail for other domains

Attackers could exploit an open relay to flood the mail server with spam, which could lead to the domain being blacklisted.

Our pentesters examine the mail server using a variety of methods, such as sending emails to non-existent domains.