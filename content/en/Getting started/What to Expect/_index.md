---
title: "Pentest Expectations"
linkTitle: "Pentest Expectations"
weight: 300
description: >
  What happens after you've set up your pentest.
---

{{% pageinfo %}}
Our pentesters share what they've found before they write your report.
{{% /pageinfo %}}

Now that you've done all the work needed to set up a pentest, you might be anxious for
results. Here's what you can expect:

1. Once you've finished setting up a pentest, select **Pentests** in the left-hand
   pane. You should see your pentest listed, with an "In Review" label.
1. You should see a link to a Slack channel, dedicated for your pentest.
1. Add the colleagues of your choice to the Slack channel. Choose colleagues who can
   benefit from direct communication with our pentesters.
1. We'll select the best available testers before the start of the pentest. We need
   at least 48 hours. (We may need more time, if you have limits on the pentesters that
   we can use.)
   - As soon as we've selected your pentesters, and have moved your pentest to
     the "Planned" state, you'll see them in your Slack channel.
1. You may get questions from your pentesters in Slack. You can also elaborate
   on your requirements in that same channel.
1. As our pentesters analyze your asset, they'll add updates frequently in your
   Slack channel. If they discover vulnerabilities ("findings"), you can start
   remediating before the pentest is complete.
   
   Here's an example finding as discussed in a Slack pentest channel.

   ![Pentest Sample Discussion](/SampleSlackFinding.png "Sample communication from pentester")

   {{% alert title="Note" color="note" %}}
   As our pentesters share the vulnerabilities they find in "real-time", you can
   start remediating your code before you see a Pentest report.
   {{% /alert %}}

1. Once the pentest is complete, we replace the "In Review" label with "Remediation".
1. You can start assessing all discovered vulnerabilities. In the Cobalt app, navigate
   to **Pentests**. Select your pentest, and navigate to the Findings tab.
   - Scroll down until you see "Activity". Depending on your assessment, you can
     set the finding to one of the following states:

     - Pending Fix, when your developers are remediating the finding.
     - Ready for Re-Test, assumes that your developers have fixed the issue, and you're ready
       for our pentesters to validate your fix.
     - Accepted Risk, when you've determined that the finding is either not critical,
       or is beyond your control.
       For more information, see the following blog post on [Accepted Risk](https://cobalt.io/blog/explain-accepted-risk-in-a-few-easy-steps).

1. We keep the Slack channel open until you've set each finding to:

   - Accepted Risk
   - Fixed

   If you need access to the archived channel, contact your Customer Success Manager
   or support@cobalt.io.
1. You're welcome to customize the pentest report. For more information, see the
   following blog post on how you can [Customize Your Pentest
   Reports](https://cobalt.io/blog/cobalt-platform-deep-dive-customize-your-pentest-reports-per-your-needs).
1. Within days, our pentesters then finalize and share a more formal pentest report.
   You're welcome to download this
   [sample test report (PDF)](/GettingStarted_Sample_WebApp_Report.pdf) for a web app.

   <!-- Timing confirmed with Grahame -->
