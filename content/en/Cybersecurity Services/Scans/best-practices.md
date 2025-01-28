---
title: "Best Practices"
linkTitle: "Best Practices"
weight: 60
description: Tips and tricks to maximize the effectiveness of your DAST scans from the first attempt.
---

## Reachability

To ensure a successful scan, you should first verify the reachability of the target URL you provide. Several factors can impact the reachability of the target, including:
- IP restrictions: Ensure that the scanner's IP is allowlisted in your firewall. You can find our IP on the [DAST scanner page].
- VPN restrictions: Make sure the scanner can access the target URL without a VPN.
- Test the target URL in your browser from another network or location to confirm its accessibility.

## Test User Credentials

- For authenticated scans, the test user credentials should be valid and have the necessary permissions to access all application features. Verify that the credentials are correct and have not expired.
- It is recommended to use the [sequence recorder] to record the login sequence to avoid human errors when setting the form selectors manually.

## Crawler Configuration

To avoid crawling issues, ensure that the crawler is properly configured:
- Provide a root URL as your [target URL], not the login page or any other page, so the scanner can discover all possible links.
- If the test user might get blocked after a certain number of visits or asked to complete a CAPTCHA check, provide [custom headers] in the scanner settings or set an exception for that test user in your system to bypass such checks. A similar solution is to be used if the application requires a login URL to be clicked in an Email.
- Do you have any important URLs that you want to ensure the crawler visits? If yes, add them to the Seed Paths section in the [target settings].
- Do you have any critical pages or paths where you don't want the crawler to interact with buttons or submit forms? Examples include Settings, User Profiles, Security, Admin section, etc. Make sure the crawler is aware of which URLs to avoid to prevent unintended interactions and potential disruptions. You can add them to the Avoided URLs in the [target settings].

## Single Page Applications

Is your Target a Single Page Application built using technologies like Reactjs, Angularjs, Vuejs, etc.? If yes, what is the API URL? Take the API URL and configure it as an [Extra Host].

<!-- links -->

[DAST Scanner page]: /platform-deep-dive/scans
[sequence recorder]: /platform-deep-dive/scans/sequence-recorder
[target URL]: /platform-deep-dive/scans/targets/#examples-of-dast-targets
[custom headers]: /platform-deep-dive/scans/target-auth/#custom-headers
[target settings]: /platform-deep-dive/scans/targets/#configuring-a-target
[Extra Host]: /platform-deep-dive/scans/extra-hosts/
