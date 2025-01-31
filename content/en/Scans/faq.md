---
title: "FAQ"
linkTitle: "FAQ"
weight: 70
description: >
  Frequently asked questions about the DAST Scanner.
---

## How does the crawler work?
The crawler starts with the target URL and any configured [seed paths]. It tries to follow and click all the links on a given page. The new pages and new injection points found are added to the list of URLs to scan. The crawler can detect patterns in the URLs and mark some URLs as duplicates. Some of the duplicates will be sampled to be scanned as well.

## Can we scan an internal app?
If the internal app can be accessed via an IP whitelist, we can test it. However, if a VPN/jumpbox or similar setup is required, we don't support that level of advanced configuration yet.

## Why don't I receive email notifications?
We send DAST emails to the Organization Owners only, not to the Organization Members. If you are an Organization Owner and still not receiving emails, please check your spam folder. If you still can't find the email, please [contact us].

## My scan started to fail but I haven't changed anything. What's going on?
Some common reasons are:
- The login credentials have expired.
- The [login form] selectors have changed, such as different IDs or CSS classes.
- The server blocked the scanner's IP address. This can happen if the scanner is hitting the server too fast or too many times in a short period.

## My scan failed but I don't know why. How can I find out what happened?
Go to the scan details page, where you can find more information about any existing errors or warnings.

## We tried out the DAST Scanner and it brought down our app. Basically, we DOS’d ourselves. Is there a less intrusive way to scan?
We currently don't have the rate-limiting option open to customers. However, here are some suggestions:
- Try to scan the app during off-peak hours.
- Configure your server to return a status code 429 (Too Many Requests) when the scanner hits it too fast. Our scanner will respect this status code and slow down the requests.
- If these solutions don't work for you, please [contact us] for more help.

## Once the DAST scan started, our system began emailing all the users with accounts/email addresses. What is the DAST Scanner doing that initiated emails?
The DAST Scanner interacts with web pages similarly to how a human would, by clicking buttons and submitting forms on each crawled page. Do you have any critical pages or paths where you don't want the crawler to interact with buttons or submit forms? Examples include Settings, User Profiles, Security, Admin section, etc. Make sure the crawler is aware of which URLs to avoid to prevent unintended interactions and potential disruptions. You can add them to the Avoided URLs in the [target settings].

## Can you give access to our developers only to DAST and not to the pentests?
We don't have this fine-grained access control yet.

## My scan seems completed but the status says 'Under Review'. What does this mean?
'Under Review' status is an intermediate status before 'Completed.' If some vulnerabilities need to be manually confirmed by our team, the scan is set to Under Review; after this manual review, the scan changes to Completed.

## The scan is completed but I see only one finding. Does this mean my app is secure? Or did the scanner fail?
If the scan is completed, then the scanner didn't fail. However, you can check a few things:
- Download the [crawl report] and check if the scanner visited all the pages you expected.
- Make sure the scanner was able to log in to the app.
- Ensure the test user has enough permissions to access all the pages and perform different actions.

## Are you able to tailor vulnerability severities per target?
We can't do that at the moment, but we have it as a future roadmap candidate.

## Do you support scans against targets with basic HTTP auth enabled?
We don't have this feature open to customers yet. However, you can [contact us] if you can't work around this limitation to assist you.

## Does the DAST Scanner support 2FA login?
We don't have this feature open to customers yet. However, you can [contact us] if you can't work around this limitation to assist you.

## We use an external service for form-based authentication. Can the DAST Scanner handle this?
The DAST Scanner can handle this as long as you provide a login URL on the same domain as the target (e.g., `my-app.example.com/login`), and the crawler will follow the redirection to the external URL.
When in doubt, you can use the [sequence recorder] to record the login sequence.

## Does the DAST Scanner support CAPTCHA?
We don't support this feature yet. Here are some suggestions:
- Disable CAPTCHA for the scanner's IP address.
- Set an exception for the test user in your system to bypass CAPTCHA checks.
- Provide [custom headers] in the scanner settings to bypass CAPTCHA checks.

## Does the DAST API scanner work with GraphQL APIs?
Currently, we do not support standalone GraphQL API scanning. However, if there is a target with an interface that uses a GraphQL service as its backend API (e.g., SPA), then we can scan it. Standalone GraphQL API scanning is on our roadmap for future development.

## We have two regional TLDs for our targets (e.g., example.de and example.co.uk). Is this one target or multiple targets?
If the domains are different (e.g., example.de and example.co.uk), then they are considered different targets. You can add them as separate targets in the platform. Unlike example.com/de and example.com/co.uk, which are considered different paths of the same target.

<!-- links -->

[target settings]: /platform-deep-dive/scans/targets/#configuring-a-target
[custom headers]: /platform-deep-dive/scans/target-auth/#custom-headers
[seed paths]: /platform-deep-dive/scans/targets/#configuring-a-target
[contact us]: mailto:dast@cobalt.io
[login form]: /platform-deep-dive/scans/target-auth/#using-a-login-form
[crawl report]: /platform-deep-dive/scans/#crawl-report
[sequence recorder]: /platform-deep-dive/scans/sequence-recorder
