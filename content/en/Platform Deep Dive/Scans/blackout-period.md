---
title: "Blackout Period"
linkTitle: "Blackout Period"
weight: 45
description: Schedule blackout periods to automatically pause and resume your DAST scans
---

Blackout periods allow you to temporarily pause your DAST scans to avoid conflicts with other activities or to prevent disruptions during sensitive times.

- **Automatic Resumption:** Once the blackout period ends, your DAST scans will automatically resume without any manual intervention.
- **Flexible Scheduling:** Define blackout periods with precise start and end times to fit your specific needs.
- **No Data Loss:** Any scan progress made before the blackout period will be preserved, and the scan will continue from where it left off.

## Use Cases

- **Planned maintenance:** Suspend scans during scheduled maintenance windows to prevent interference with system updates or infrastructure changes.
- **High-traffic events:** Pause scans during peak traffic periods or marketing campaigns to avoid performance impacts on your application.
- **Vulnerability remediation:** Temporarily disable scans while you're actively fixing identified vulnerabilities to prevent redundant alerts.
- **Third-party integrations:** Prevent scans from interfering with scheduled tasks from other tools or services integrated with your application.

## Setting Up the Blackout Period

1. Go to your target's settings.
2. In the Scanner tab, locate the **Blackout Period** section.
3. Enable the feature by toggling the switch component.
   - Note: Disabling the feature does not delete your saved blackout periods.
5. Define the start and end time/day for when the scan will be paused and resumed.
7. Save your changes.

## Other Considerations

- While a blackout period is active, no new scans will be initiated, and any in-progress scans will be paused.
- Ensure your blackout periods do not overlap with critical security testing windows to maintain continuous vulnerability assessment.
- Consider setting reminders for upcoming blackout periods to avoid unintended lapses in security coverage.

