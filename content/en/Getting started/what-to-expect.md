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
   pane. You should see your pentest listed, with an _In Review_ label.
1. We'll select the best available testers before the start of the pentest. The time we need
   depends on your {{% ptaas-tier %}} and any special requirements you have.
1. Once we start the pentest, you’ll start getting updates from pentesters:
   - On the **Pentester Updates** tab of the pentest page
   - In a Slack channel dedicated for your pentest where you can communicate with pentesters. You should see a link to the Slack channel on the pentest page next to the pentest status.
      - Add the colleagues of your choice to the Slack channel. Choose colleagues who can benefit from direct communication with our pentesters.
      - As soon as we’ve moved your pentest from _In Review_ to _Planned_, you’ll see your pentesters in the Slack channel.
1. You may get questions from your pentesters. You can also elaborate
   on your requirements for the pentest.
   - You'll get in-app and email notifications for each update from pentesters.
1. As our pentesters analyze your asset, they'll add updates frequently. If they discover vulnerabilities ("findings"), you can start
   remediating before the pentest is complete.
   
   Here's an example finding as discussed in a Slack pentest channel.

   ![Pentest Sample Discussion](/gsg/SampleSlackFinding.png "Sample communication from pentester")

   {{% alert title="Note" color="note" %}}
   As our pentesters share the vulnerabilities they find in "real-time," you can
   start remediating your code before you see a pentest report.
   {{% /alert %}}

1. Once the pentest is complete, we move your pentest from _Planned_ to _Remediation_.
1. You can start assessing all discovered vulnerabilities. In the Cobalt app, navigate
   to **Pentests**. Select your pentest, and navigate to the **Findings** tab.
   - Scroll down until you see **Activity**. Depending on your assessment, you can
     set the finding to one of the following states:

     - Pending Fix, when your developers are remediating the finding.
     - Ready for Retest, assumes that your developers have fixed the issue, and you're ready
       for our pentesters to validate your fix. Retesting may depend on
       your {{% ptaas-tier %}}.
     - Accepted Risk, when you've determined that the finding is either not critical,
       or is beyond your control.
       For more information, see the following blog post on [Accepted Risk](https://cobalt.io/blog/explain-accepted-risk-in-a-few-easy-steps).

1. We keep the Slack channel open until you've set each finding to:
   - Accepted Risk
   - Fixed
   <br>{{% contact-csm-support %}} if you need access to the archived Slack channel.

1. If you've purchased a qualifying {{% ptaas-tier %}}, you can customize your pentest report.
   However, we report _all_ findings. For more information, see [Customize Your Pentest
   Report](/platform-deep-dive/pentests/reports/customize-report/).
1. <a id="report-timing">Based on your Service Level Agreement, our pentesters then share a formal report.
   You're welcome to download this
   [sample test report (PDF)](/gsg/GettingStarted_Sample_WebApp_Report.pdf) for a web app.

   <!-- Timing confirmed with Grahame -->

Our [Pentest States](../../../penteststates/) page includes more information about each pentest
state, including _Draft_, _In Review_, _Planned_, _Remediation_, and _Closed_.
