<b>Business Logic Security Requirements</b>:

- [ ] Verify the application has business logic limits or validation to protect against likely business risks or threats, identified using threat modelling or similar methodologies.
- [ ] Verify the application will only process business logic flows with all steps being processed in realistic human time, i.e. transactions are not submitted too quickly.
- [ ] Verify the application has appropriate limits for specific business actions or transactions which are correctly enforced on a per user basis.
- [ ] Verify the application will only process business logic flows for the same user in sequential step order and without skipping steps.
- [ ] Verify the application has sufficient anti-automation controls to detect and protect against data exfiltration, excessive business logic requests, excessive file uploads or denial of service attacks.