---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
description: >
  How to get started with Cobalt.
---

{{% pageinfo %}}
Visualize your journey with Cobalt, and launch your first pentest to make your security stronger.
{{% /pageinfo %}}

Take your first steps to get started:

- [Prepare for a pentest](#prepare-for-a-pentest)
- [Launch a pentest](#launch-a-pentest)
- Read answers to [frequently asked questions](#frequently-asked-questions)
- Learn how to [get in touch with Cobalt](#get-in-touch)

## Prepare for a Pentest

<a class="btn btn-outline-primary rounded" href="/getting-started/pentest-preparation/">Pentest Preparation Checklist »</a>

- **Make your teams aware of the upcoming pentest**.
  - Notify everyone who should be aware of the pentest. Ensure that the pentest doesn't disrupt anyones workflows.
  - Prepare credentials and account details for pentesters.
- **Be responsive to pentest results**.
  - Pentesters will share vulnerabilities ([findings](/platform-deep-dive/pentests/findings/)) that they discover in real time. Start remediating them. [Collaborate on the pentest](/platform-deep-dive/collaboration/collaborate-on-pentests/), and ask questions if you need help.
- **Be available to help find solutions to problems**.
  - Most of the time pentesters are cautious and don't perform any actions that have detrimental effects on your software. However, as a precautionary measure, you should prepare for the worst. Prepare a backup copy of your software (especially when testing a production environment), and have a team ready to respond to any unexpected events.
  - Establish communication with pentesters, and let them know you are there—available and responsive.
- **Communicate significant changes to your environment made during a test to pentesters**.
  - If you make significant changes to your environment during a test (including remediating vulnerabilities), make sure to communicate this to our pentesters. Any major updates to your asset that you make when the pentest is Live may impact pentesters' workflows and the testing process.

## Launch a Pentest

[Sign in to Cobalt](/getting-started/sign-in/), and start with [defining your assets](/getting-started/assets/). Here are the steps you need to take.

![Workflow for creating a pentest](/gsg/CreatePentestFlowFull.png "Workflow for creating a pentest")

{{% expand "Click to learn more." %}}

1. Define your [assets](/getting-started/assets/). Our pentesters analyze all kinds of
   assets, from web apps to internal networks.
1. Select the [pentest type](/getting-started/select-pentest-type/). We offer [Agile](/getting-started/glossary/#agile-pentest) and [Comprehensive Pentests](/getting-started/glossary/#comprehensive-pentest).
1. [Review your asset](/getting-started/review-asset/).
1. Set [requirements](/getting-started/pentest-objectives/) for your pentest.
   - By default, our pentesters use standards defined by the
     [Open Web Application Security
     Project (OWASP)](/getting-started/glossary/#open-web-application-security-project-owasp) and in
     the [Open Source Security Testing Methodology
     Manual](/getting-started/glossary/#open-source-security-testing-methodology-manual-osstmm).
   - Add and modify the objectives of your choice.
   - To help our penetration testers, include more information about your asset,
     such as architecture and coding language. You'll see more details about
     what to include when you [define your assets](/getting-started/assets/).
1. Define [details](/getting-started/details/) of your environment.
   Is your asset in production or in development? Is part of your system
   on a Cloud platform?
1. [Plan and scope](/getting-started/planning/) the test. Define your desired pentest start
   date, and specify the pentest scope. We need time to find the best available pentesters for your assets.
1. [Review your pentest request](/getting-started/review-pentest/) to make
   sure you've included _all_ information that our pentesters need.

Once you've set up a pentest, we start analyzing your asset. When
possible, we share results even before we create your report. Here's what
you can [expect](/getting-started/what-to-expect/).

{{% /expand %}}

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{% expand "What is an organization?" %}}
<br>
When you receive an email invitation from Cobalt, you join a specific organization with a role assigned to you. Within an organization, you and your team get access to the Cobalt platform and the pentest experience. Learn more about <a href="/platform-deep-dive/organization/">organizations</a>.
<br><br>
{{% /expand %}}

{{% expand "How do I add people to my organization?" %}}
<br>
Organization Owners can manage users for their organization. For instructions, see <a href="/platform-deep-dive/organization/manage-users/#invite-users">Invite Users</a>.
<br><br>
{{% /expand %}}

{{% expand "What user roles are available?" %}}
<br>
To learn more, please see <a href="/platform-deep-dive/collaboration/user-roles/">User Roles and Permissions</a>.
<br><br>
{{% /expand %}}

{{% expand "What is an asset?" %}}
<br>
{{% asset-definition %}} Learn more about the <a href="/platform-deep-dive/assets/asset-types/">asset types</a> we support. Once you've created an asset, you can launch pentests for it.
<br><br>
{{% /expand %}}

## Get in Touch

If you need help, don't hesitate to contact us.

- If you have a named Customer Success Manager, get in touch with them.
- Otherwise, [submit a ticket](https://cobaltio.zendesk.com/hc/en-us/requests/new) or send an email to support@cobalt.io.

We process support requests within one business day.

If you find a security issue on the Cobalt platform, please report it to security@cobalt.io. Learn more about our [security practices](https://cobalt.io/security/practices).
