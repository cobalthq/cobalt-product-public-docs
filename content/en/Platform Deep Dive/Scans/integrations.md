---
title: "Integrations"
linkTitle: "Integrations"
weight: 50
description: Push DAST findings to your ticketing system!
---

## Overview

The DAST ticketing integration allows you to push your DAST findings to your ticketing system as soon as vulnerabilities are detected.
At this time, the integration supports the following ticketing systems:

* Jira Cloud
* GitHub Issues
* Azure DevOps Boards

## How it Works

The DAST ticketing integration uses Cobalt's [Integration Builder](/integrations/integrationbuilder) to push DAST findings to your ticketing system.
The integration builder is a no-code workflow builder that enables you to create highly customizable integrations.
We provide integration quickstart templates for the above-mentioned ticketing systems that allow you to get your DAST integration up and running quickly!

## Steps to Integrate with Ticketing Systems

<iframe src="https://play.vidyard.com/kVCJ1gQ6ywr1t2G3K7Z46m" width="640" height="360" frameborder="0" allowfullscreen></iframe>

## Frequently Asked Questions

Click <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> to view answers.

{{%expand "Does it create duplicate tickets?" %}}
<br>

The DAST ticketing integration will not create duplicate tickets as long as you follow our guidance regarding [external ticket references](/integrations/integrationbuilder/how-to-guides/#external-ticket-references).

{{% /expand %}}
<br>

{{%expand "Can I route tickets from different targets to different tools or projects?" %}}
<br>

Yes.
You can create one ticket-push recipe per DAST target and configure the recipes differently.
You should use [trigger filters](/integrations/integrationbuilder/how-to-guides/#trigger-filters)
to ensure that each recipe is triggered only by findings that are associated to the correct target.
Checkout the video above for a walkthrough of this process.

{{% /expand %}}
<br>

{{%expand "Can I update a DAST finding from my ticketing tool?" %}}
<br>

No.
Our public API does not currently have functionality that can be used to update a DAST finding.
The Integration Builder uses our public API, so it doesn't support updating DAST findings either.
This functionality is on our roadmap.

{{% /expand %}}
<br>

{{%expand "How do I know if a ticket has been created for a finding?" %}}
<br>

When everything is working correctly, you can see tickets associated to your DAST findings directly within the DAST user interface.
It is possible in failure scenarios that the integration could correctly create a ticket but fail to record an [external ticket references](/integrations/integrationbuilder/how-to-guides/#external-ticket-references).
If this situation occurs, a ticket would exist, but it would not show up in the DAST user interface.
You can investigate failures using our [troubleshooting steps](/integrations/integrationbuilder/troubleshooting/).

{{% /expand %}}
<br>

## Troubleshooting

Checkout our general Integration Builder troubleshooting documentation [here](/integrations/integrationbuilder/troubleshooting/).
