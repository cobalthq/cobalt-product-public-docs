<b>Sensitive Private Data</b>:

- [ ] Verify that users have a method to remove or export their data on demand.
- [ ] Verify that sensitive data is sent to the server in the HTTP message body or headers, and that query string parameters from any HTTP verb do not contain sensitive data.
- [ ] Verify that users are provided clear language regarding collection and use of supplied personal information and that users have provided opt-in consent for the use of that data before it is used in any way.
- [ ] Verify that all sensitive data created and processed by the application has been identified, and ensure that a policy is in place on how to deal with sensitive data.

<b>Client-side Data Protection</b>:

- [ ] Verify the application sets sufficient anti-caching headers so that sensitive data is not cached in modern browsers.
- [ ] Verify that authenticated data is cleared from client storage, such as the browser DOM, after the client or session is terminated.
- [ ] Verify that data stored in client side storage (such as HTML5 local storage, session storage, IndexedDB, regular cookies or Flash cookies) does not contain sensitive data or PII.