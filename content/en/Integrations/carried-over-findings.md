---
title: "Carried Over Findings"
linkTitle: "Carried Over Findings"
weight: 140
description: >
  Configure integration behavior for carried over findings
---

### What is a Carried-Over Finding?

When you conduct a pentest on an asset that still has unfixed findings from a previous pentest, pentesters can "carry over" the findings to the new pentest.
When the pentester carries over the finding, the original finding's state will be set to "Carried Over".

### Default integration behavior for Carried-Over Findings

By default, ticketing integrations will treat carried over findings as new findings. 
This means that your integration will create a new ticket for the carried over finding regardless of the existence of a ticket for the original finding.

### Avoid creating new tickets for Carried-Over Findings

If you do not want your integration to create a new ticket for a carried-over finding when a ticket already exists for the original finding, 
you can configure your integration (at the pentest level) to use the alternative carry-over handling logic.
If you would like to use the non-default carry-over handling logic, we recommend performing the following configuration step before launching a new pentest:

1. Navigate to the pentest in the Cobalt UI
2. Navigate to the Integrations tab
3. In the "Ticket creation for carry over findings" tile, click the radio button for the "Re-associate existing ticket" option
4. Click save

{{% image src="/integrations/carry-over-findings/carryover-ticket-handling-config.png" alt="UI config option" %}}

### What does Re-associating the existing ticket do?

When the carried over finding is moved to the Pending Fix state, the following will happen:

1. The ticket will be unlinked from the original finding
2. The ticket will be linked to the carried over finding

### Which integrations are supported?

* Native Jira Cloud integration
* Native Jira Data Center (server) integration
* Integration Builder External Ticket References
