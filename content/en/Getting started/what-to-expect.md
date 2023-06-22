---
title: "Pentest Expectations"
linkTitle: "Pentest Expectations"
weight: 260
description: >
  What happens after you've set up your pentest.
---

{{% pageinfo %}}
Our pentesters share what they've found before they submit your [report](/platform-deep-dive/pentests/reports/).
{{% /pageinfo %}}

Now that you've done all the work needed to set up a pentest, you might be anxious for
results. Here's what you can expect:

1. Once you've finished setting up a pentest, select **Pentests** in the left-hand
   pane. You should see your pentest listed, with an [In Review](/platform-deep-dive/pentests/pentest-process/pentest-states/) label.
1. We'll select the best available pentesters before the start of the pentest. The time we need
   depends on your {{% ptaas-tier %}} and any [additional requests](/getting-started/review-pentest/#additional-requests) you have.
1. Once our pentesters start the pentest, they'll update you on their progress. Depending on the [collaboration platform](/platform-deep-dive/collaboration/collaborate-on-pentests/) you selected, you can communicate in:
   - [Cobalt Chat](/platform-deep-dive/collaboration/collaborate-on-pentests/#collaborate-in-cobalt-chat); or
   - [Slack channel](/platform-deep-dive/collaboration/collaborate-on-pentests/#use-slack-for-communication) dedicated for your pentest.
1. You may get questions from your pentesters. You can also elaborate
   on your requirements for the pentest.
1. As our pentesters analyze your asset, they'll add updates frequently. If they discover vulnerabilities ("[findings](/platform-deep-dive/pentests/findings/)"), you can start
   [remediating](/platform-deep-dive/pentests/findings/remediate-findings/) them before the pentest is complete.
1. Once the pentest is complete, we move it from Live to Remediation.
1. Review and analyze each [finding](/platform-deep-dive/pentests/findings/). You can:
    {{% process-findings %}}
1. <a id="report-timing">When your pentest is in Remediation or Closed, you can download [pentest reports](/platform-deep-dive/pentests/reports/).
    - If you've purchased a qualifying {{% ptaas-tier %}}, you can [customize your pentest report](/platform-deep-dive/pentests/reports/customize-report/).
1. We move your pentest to Closed once you've resolved all findings, which includes {{% resolved-finding-states %}}

{{< alert title="Tip" color="primary" >}}
To learn more about each pentest state, visit [Pentest States](/platform-deep-dive/pentests/pentest-process/pentest-states/).
{{< /alert >}}
