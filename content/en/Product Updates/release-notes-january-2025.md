---
title: "Release Notes: January 2025"
linkTitle: "January 2025"
weight: 39
description: >-
---

{{% pageinfo %}} 
Explore What's New from Cobalt This Month
{{% /pageinfo %}}


## Ticketing Integration for Carried Over Findings

<strong>Problem</strong>
<p>Previously, our ticketing integrations would create new tickets for findings carried over by pentesters to new pentests, causing inconvenience for some customers who did not want multiple tickets for the same issue, especially larger clients.</p>

<strong>Solution</strong>
<p>We have introduced a configuration option at the pentest level that modifies the integration behavior to re-associate an existing ticket, if available, to the carried over finding. With this feature enabled, when a carried over finding is marked for pending fix:</p>

- The existing ticket is unlinked from the original finding
- The existing ticket is linked to the carried over finding
- No new ticket is generated

<strong>Supported Integrations</strong>
- The Integration Builder
- Native Jira Cloud integration
- Native Jira Data Center (server) integration

<strong>Benefits</strong>
- Customer Flexibility: Clients who prefer not to have new tickets created for carried over findings can now opt-in to this feature.
- Customization Options: The ticketing integration behavior remains unchanged for customers who are comfortable with the current system and choose not to enable this functionality.

{{% pageinfo color="blue" %}}
For more information, have a look at our [Carried Over Findings documentation.](https://docs.cobalt.io/integrations/carried-over-findings/)
{{% /pageinfo %}}

{{% image src="/integrations/carry-over-findings/carryover-ticket-handling-config.png" alt="UI config option" %}}

---

