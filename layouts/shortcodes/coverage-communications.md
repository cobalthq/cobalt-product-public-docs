<b>Communications Security Requirements</b>:

- [ ] Verify that secured TLS is used for all client connectivity, and does not fall back to insecure or unencrypted protocols.
- [ ] Verify that old versions of SSL and TLS protocols, algorithms, ciphers, and configuration are disabled, such as SSLv2, SSLv3, or TLS 1.0 and TLS 1.1. The latest version of TLS should be the preferred cipher suite.
- [ ] Verify using online or up to date TLS testing tools that only strong algorithms, ciphers, and protocols are enabled, with the strongest algorithms and ciphers set as preferred.