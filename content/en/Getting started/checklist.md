---
title: "Your Pentest Checklist"
linkTitle: "Pentest Checklist"
weight: 250
description: >
  Review your pentest request.
---

{{% pageinfo %}}
Make sure our pentesters have the information they need.
{{% /pageinfo %}}

In previous sections, you've saved what you've entered for the pentest.
Now you can review your work. Before selecting **Submit For Review**, follow this checklist for Objectives and Details.

![Review your pentest](/gsg/SubmitPentestForReview.png "Review pentest details")

For both tabs, you can select **Edit** to make changes.

## Objectives

Under the **Objectives** tab, you can review:

- [Targets in scope](../pentest-objectives/pentest-target)
- [Objectives](../pentest-objectives/methodologies/), which define methodologies that our pentesters use as a checklist
- [Test credentials](../pentest-objectives/test-credentials)
- [Asset](/getting-started/assets/) for which you're setting up the pentest
- [Technology stack](/getting-started/pentest-objectives/stack/) behind your asset
- [Test period](/getting-started/planning/#schedule-the-pentest), [scoping parameters](/getting-started/planning/#scope-the-pentest), and required [credits](/getting-started/planning/#view-required-credits)

To view more pentest details, navigate to the **Settings** tab > **Objectives**.

### Additional Requests

You can specify special requirements for pentesters. For example, if
industry, company, or national regulations require that you limit pentesters
to residents of one or more countries, you can request this.

1. On the pentest page, navigate to **Settings**, and scroll down to the bottom of the page.
1. Select **Show advanced options**, and add your notes under **Additional requests**.

![Pentester limits](/gsg/AdditionalRequests.png "Specify legal or regulatory limitations on pentesters.")

We can't guarantee that we'll accept your additional request. This may also delay scheduling the pentest.

## Details

Under the **Details** tab, you can review:

- The target [environment](/getting-started/details/#environment) for your asset
- [Rate-limiting controls](/getting-started/details/#controls)
- [Cloud platform components](/getting-started/details/#cloud-platform-components)
- [Additional guidelines](/getting-started/details/#additional-guidelines)
- [Test data](/getting-started/details/#test-data) sensitivity

## Reports

You can download a pentest [report](/platform-deep-dive/pentests/reports/) to view security issues that our pentesters found.

### Co-branded Reports

If your organization manages pentests for third parties, you can add your company logo to all reports. In co-branded reports, your company logo appears next to the Cobalt logo.

An [Organization Owner](/getting-started/glossary/#organization-owner) of a partner company can enable co-branded reports.

{{%expand "Learn more." %}}

<ol>
<li>To turn on the co-branding functionality, submit a request to <a href="mailto:support@cobalt.io">support@cobalt.io</a> with:
<ul><li>Your name</li>
<li>Your organization name</li>
<li>List of client organizations you manage</li>
<li>Reason: Enable partner co-branding functionality</li></ul></li>

<li>Once we've processed your request, you get access to specific functionality as a Cobalt Partner, which you can verify on the <b>People</b> tab next to your name.</li>

<li>To enable co-branded reports for an organization you manage:
<ul><li>Select the organization in the upper-left corner.</li>
<li>Navigate to the <b>Settings</b> tab, and scroll down to the <b>Report Branding</b> section.</li>
<li>Upload the logo image, and select <b>Apply</b>.</li></ul></li>

<li>To verify that co-branding is enabled:
<ul><li>Go to the <b>Pentests</b> tab, and select a pentest in the Remediation or Closed state.</li>
<li>On the <b>Report</b> tab, download a report, and verify that it has your company logo.</li></ul></li>
</ol>

As a Cobalt Partner, you can edit your company logo or turn off co-branded reports for a client organization on the **Settings** tab under **Report Branding**.
{{% /expand%}}

## When You're Ready

If you're ready with your pentest, select **Submit for Review**.

Once you do so, learn [what to expect after you create a
pentest](../what-to-expect).
