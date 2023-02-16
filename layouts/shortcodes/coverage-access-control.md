<b>General Access Control Design</b>:

- [ ] Verify that the principle of least privilege exists - users should only be able to access functions, data files, URLs, controllers, services, and other resources, for which they possess specific authorization. This implies protection against spoofing and elevation of privilege.
- [ ] Verify that the application enforces access control rules on a trusted service layer, especially if client-side access control is present and could be bypassed.
- [ ] Verify that the principle of deny by default exists whereby new users/roles start with minimal or no permissions and users/roles do not receive access to new features until access is explicitly assigned.
- [ ] Verify that all user and data attributes and policy information used by access controls cannot be manipulated by end users unless specifically authorized.
- [ ] Verify that access controls fail securely including when an exception occurs.

<b>Operation Level Access Control</b>:

- [ ] Verify that sensitive data and APIs are protected against direct object attacks targeting creation, reading, updating and deletion of records, such as creating or updating someone else's record, viewing everyone's records, or deleting all records.
- [ ] Verify that the application or framework enforces a strong anti-CSRF mechanism to protect authenticated functionality, and effective anti-automation or anti-CSRF protects unauthenticated functionality.

<b>Other Access Control Considerations</b>:

- [ ] Verify administrative interfaces use appropriate multi-factor authentication to prevent unauthorized use.
- [ ] Verify that directory browsing is disabled unless deliberately desired. Additionally, applications should not allow discovery or disclosure of file or directory metadata, such as Thumbs.db, .DS_Store, .git or .svn folders.