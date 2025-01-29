---
title: "Release Notes: January 2025"
linkTitle: "January 2025"
weight: 39
description: >-
---

{{% pageinfo %}} 
Explore What's New from Cobalt This Month
{{% /pageinfo %}}


## DAST Release: Blackout Period

<strong>Problem</strong>
- Customers needed a way to pause DAST scans during maintenance, high-traffic events, or other sensitive times to avoid conflicts, performance issues, or inaccurate results. Previously, they had to manually pause scans + resume them later, which was inconvenient and could lead to missed vulnerabilities if scans weren't restarted.
- (Bonus: Timestamps + inputs were set in UTC, which is not as accessible and required some extra thinkin' to translate to local timezones).

<strong>Solution</strong>
- The Blackout Period feature (located in the target settings) allows customers to schedule specific times and days for scans to be automatically paused and resumed, eliminating the need for manual intervention.
- (Bonus: all timestamps + inputs within the DAST UI are displayed to the user in their local timezone)

<strong>Benefits</strong>
- <strong>Convenience + Automation:</strong> No more manual stopping and starting of scans.
- <strong>Flexibility:</strong> Customers can define blackout periods that precisely match their needs.
- <strong>Continuous Security:</strong> Ensures critical security testing windows are maintained, as scans automatically resume.
- <strong>Efficiency:</strong> Prevents wasted time + resources on scans that might be affected by temporary events or maintenance activities.
- <strong>Peace of Mind:</strong> Customers can confidently schedule maintenance or other activities without worrying about disrupting their security scans or missing potential vulnerabilities.

{{% pageinfo color="blue" %}}
For more information, have a look at our [Blackout Period documentation.](https://docs.cobalt.io/platform-deep-dive/scans/blackout-period/)
{{% /pageinfo %}}

{{% image src="/deepdive/scans/blackout-period-enabled.png" alt="Blackout Period - Enabled" %}}

---

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

