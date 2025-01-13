---
title: "Carried Over Findings"
linkTitle: "Carried Over Findings"
weight: 30
description: >
  Configure integrations behavior for carried over findings.
---

{{% pageinfo %}}
Configure integrations behavior for carried over findings.
{{% /pageinfo %}}

## What is a Carried-Over Finding?

When you conduct a pentest on an asset that still has unfixed findings from a previous pentest, pentesters can "carry over" the findings to the new pentest.
When the pentester carries over the finding, the new finding will start in the Pending Fix state and the original finding's state will be set to "Carried Over".

## Default integration behavior for Carried-Over Findings

By default, ticketing integrations will treat carried over findings as new findings. 
This means that your integration will create a new ticket for the carried over finding regardless of the existence of a ticket for the original finding.

## Avoid creating new tickets for Carried-Over Findings

If you do not want your integration to create a new ticket a for carried over finding when a ticket already exists for the original finding, 
you can configure your integration to use the alternative carry-over handling logic at the pentest level.
If you would like to use the non-default carry-over handling logic, we recommend performing the following configuration step before launching a new pentest:

1. Navigate to the pentest in the Cobalt UI
2. Navigate to the Integrations tab
3. In the "Ticket creation for carry over findings" tile, click the radio button for the "Re-associate existing ticket" option
4. Click save

![config](static/integrations/carry-over-findings/carryover-ticket-handling-config.png)

